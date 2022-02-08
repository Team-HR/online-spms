<?php

namespace App\Http\Controllers;

use App\Models\RatingScaleMatrix;
use App\Models\RatingScaleMatrixIncumbent;
use App\Models\RatingScaleMatrixSuccessIndicator;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\Echo_;

class RatingScaleMatrixController extends Controller
{
    public $mfos = [];

    public function add_subfunction(Request $request)
    {
        $rsm = RatingScaleMatrix::create([
            'parent_id' => $request->parent_id,
            'order_number' => 0,
            'code' => $request->code,
            'function' => $request->function,
            'period' => $request->period,
            'year' => $request->year,
            'department_id' => $request->department_id
        ]);
        return response()->json($rsm);
    }
    public function getRatingScaleMatrix()
    {
        $department_id = 13;
        $period = 1;
        $year = 2022;

        $parent_mfos = RatingScaleMatrix::select('*')
            ->where('parent_id', '=', NULL)
            ->where('department_id', '=', $department_id)
            ->where('period', '=', $period)
            ->where('year', '=', $year)
            ->get();

        $data = [];
        foreach ($parent_mfos as $mfo) {
            $id = $mfo['id'];
            $indent = 0;
            $data[] = [
                'id' => $id,
                'indent' => $indent,
                'parent_id' => $mfo['parent_id'],
                'order_number' => $mfo['order_number'],
                'code' => $mfo['code'],
                'function' => $mfo['function'],
                'period' => $mfo['period'],
                'year' => $mfo['year'],
                'department_id' => $mfo['department_id'],
                /* 
                    Iterate function to get children mfos so and so...
                */
                'children' => $this->getChildren($indent, $id)
            ];
        }
        $this->getChildData($data);

        /* 
            Sort mfos before getting success indicators
            by code in ASC
        */
        usort($this->mfos, function ($item1, $item2) {
            return $item1['code'] <=> $item2['code'];
        });

        $items = [];

        foreach ($this->mfos as $rating_scale_matrix) {
            $success_indicators = RatingScaleMatrixSuccessIndicator::where('rating_scale_matrix_id', '=', $rating_scale_matrix['id'])->get();
            if (count($success_indicators) === 0) {
                array_push($items, [
                    "indent" => $rating_scale_matrix['indent'],
                    "rating_scale_matrix_id" => $rating_scale_matrix['id'],
                    "code" => $rating_scale_matrix['code'],
                    "order_number_mfo" => $rating_scale_matrix['order_number'],
                    "function" => $rating_scale_matrix['function'],
                    'period' => $rating_scale_matrix['period'],
                    'year' => $rating_scale_matrix['year'],
                    'department_id' => $rating_scale_matrix['department_id'],
                ]);
            }
            foreach ($success_indicators as $key => $success_indicator) {
                if ($key === 0) {
                    $success_indicator['indent'] = $rating_scale_matrix['indent'];
                    $success_indicator['code'] = $rating_scale_matrix['code'];
                    $success_indicator['order_number_mfo'] = $rating_scale_matrix['order_number'];
                    $success_indicator['function'] = $rating_scale_matrix['function'];
                    $success_indicator['rowspan'] = count($success_indicators);
                    $success_indicator['period'] = $rating_scale_matrix['period'];
                    $success_indicator['year'] = $rating_scale_matrix['year'];
                    $success_indicator['department_id'] = $rating_scale_matrix['department_id'];
                }
                $success_indicator['order_number_si'] = $success_indicator['order_number'];
                unset($success_indicator['order_number']);
                array_push($items, $success_indicator);
            }
        }


        return response()->json($items);
    }


    /* 
        Function for flattening the mfo list
    */
    public function getChildData($children)
    {
        foreach ($children as $child) {
            $this->mfos[] = [
                'id' => $child['id'],
                'indent' => $child['indent'],
                'parent_id' => $child['parent_id'],
                'order_number' => $child['order_number'],
                'function' => $child['function'],
                'code' => $child['code'],
                'period' => $child['period'],
                'year' => $child['year'],
                'department_id' => $child['department_id'],
            ];
            $this->getChildData($child['children']);
        }
    }

    /* 
        The function being loooped to get children mfos
    */
    public function getChildren($indent, $id)
    {
        $indent += 1;
        $data = [];
        $mfos = RatingScaleMatrix::select('*')
            ->where('parent_id', '=', $id)
            ->orderBy('code')
            ->get();
        foreach ($mfos as $mfo) {
            $id = $mfo['id'];
            $data[] = [
                'id' => $id,
                'indent' => $indent,
                'parent_id' => $mfo['parent_id'],
                'order_number' => $mfo['order_number'],
                'function' => $mfo['function'],
                'code' => $mfo['code'],
                'period' => $mfo['period'],
                'year' => $mfo['year'],
                'department_id' => $mfo['department_id'],
                'children' => $this->getChildren($indent, $id)
            ];
        }
        return $data;
    }

    /* 
        Deleting mfo or success indicator
    */
    public function delete(Request $req)
    {
        $success_indicator_id = $req->success_indicator_id;
        $rating_scale_matrix_id = $req->rating_scale_matrix_id;
        $data = null;
        /* 
            If success_indicator_id > 0
            delete success indicator with id
        */
        if ($success_indicator_id > 0) {
            $data = RatingScaleMatrixSuccessIndicator::where('id', $success_indicator_id)->delete();
        }
        /* 
            Else if rating_scale_matrix_id > 0
            delete only the mfo but check first
            if mfo does not have any children
        */ elseif ($rating_scale_matrix_id > 0) {
            // check first if mfo have any children if none proceed deletion
            $rsm = RatingScaleMatrix::where('parent_id', $rating_scale_matrix_id)->get();
            if (count($rsm) > 0) return false;
            $data = RatingScaleMatrix::where('id', $rating_scale_matrix_id)->delete();
        }
        return response()->json($data);
    }

    /* 
        Getting success indicator data
    */
    public function get_success_indicator(Request $request)
    {
        $id = $request->id;

        $rsm_indicator = RatingScaleMatrixSuccessIndicator::find($id);

        return response()->json($rsm_indicator);
    }

    /* 
        Save success indicators new additions and edits
    */
    public function save_success_indicator(Request $request)
    {

        $id = $request->id;
        $rating_scale_matrix_id = $request->rating_scale_matrix_id;
        $success_indicator = $request->success_indicator;
        $quality = $request->quality;
        $quality = !empty($quality) ? $quality : null;
        $efficiency = $request->efficiency;
        $efficiency = !empty($efficiency) ? $efficiency : null;
        $timeliness = $request->timeliness;
        $timeliness = !empty($timeliness) ? $timeliness : null;
        $incumbents = $request->incumbents;

        // foreach ($efficiency as $score => $desc) {
        //     $efficiency[] = [
        //         'score' => $score+1,
        //         'desc'  => $desc
        //     ];
        //     unset($efficiency[$score]);
        // }
        // $efficiency = array_values($efficiency);


        $test = [
            'id' => $id,
            'rating_scale_matrix_id' => $rating_scale_matrix_id,
            'success_indicator' => $success_indicator,
            'quality' => $quality,
            'efficiency' => $efficiency,
            'timeliness' => $timeliness
        ];

        if ($id > 0) {
            RatingScaleMatrixSuccessIndicator::where('id', $id)
                ->update([
                    'success_indicator' => $success_indicator,
                    'quality' => $quality,
                    'efficiency' => $efficiency,
                    'timeliness' => $timeliness
                ]);

            RatingScaleMatrixIncumbent::where('rating_scale_matrix_success_indicator_id', $id)->delete();
            foreach ($incumbents as $employee) {
                RatingScaleMatrixIncumbent::create([
                    'rating_scale_matrix_success_indicator_id' => $id,
                    'employee_id' => $employee['id'],
                ]);
            }
        } else {
            /* 
                create new success indicator 
                with rating_scale_matrix_id
            */
            $rsm_si = RatingScaleMatrixSuccessIndicator::create([
                'rating_scale_matrix_id' => $rating_scale_matrix_id,
                'order_number' => 0,
                'success_indicator' => $success_indicator,
                'quality' => $quality,
                'efficiency' => $efficiency,
                'timeliness' => $timeliness
            ]);

            $insert_id = $rsm_si->id;

            foreach ($incumbents as $employee) {
                RatingScaleMatrixIncumbent::create([
                    'rating_scale_matrix_success_indicator_id' => $insert_id,
                    'employee_id' => $employee['id'],
                ]);
            }
        }

        return response()->json($test);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getRatingScaleMatrixOLD(Request $request)
    {
        $department_id = auth()->user()->department_id;
        $period = $request->period;
        $year = $request->year;

        $items = [];
        $rating_scale_matrix = RatingScaleMatrix::select('*')
            ->where('department_id', '=', $department_id)
            ->where('period', '=', $period)
            ->where('year', '=', $year)
            ->get();

        foreach ($rating_scale_matrix as $rating_scale_matrix) {
            $success_indicators = RatingScaleMatrixSuccessIndicator::where('rating_scale_matrix_id', '=', $rating_scale_matrix->id)->get();
            if (count($success_indicators) === 0) {
                array_push($items, [
                    "rating_scale_matrix_id" => $rating_scale_matrix->id,
                    "code" => $rating_scale_matrix->code,
                    "order_number_mfo" => $rating_scale_matrix->order_number,
                    "function" => $rating_scale_matrix->function
                ]);
            }
            foreach ($success_indicators as $key => $success_indicator) {
                if ($key === 0) {
                    $success_indicator['code'] = $rating_scale_matrix->code;
                    $success_indicator['order_number_mfo'] = $rating_scale_matrix->order_number;
                    $success_indicator['function'] = $rating_scale_matrix->function;
                    $success_indicator['rowspan'] = count($success_indicators);
                }
                $success_indicator['order_number_si'] = $success_indicator['order_number'];
                unset($success_indicator['order_number']);
                array_push($items, $success_indicator);
            }
        }

        return response()->json($items);
    }


    public function add_new_mfo(Request $request)
    {
        $department_id = auth()->user()->department_id;
        $period = $request->period;
        $year = $request->year;
        $mfo = new RatingScaleMatrix;
        $mfo->parent_id = null;
        $mfo->department_id = $department_id;
        $mfo->code = $request->new_mfo['category'];
        $mfo->order_number = 1;
        $mfo->function = $request->new_mfo['title'];
        $mfo->period = $period;
        $mfo->year = $year;
        $mfo->save();
        return  response()->json($mfo);
    }

    public function save_edit_mfo(Request $request)
    {
        // $department_id = auth()->user()->department_id;
        $id = $request->id;
        $code = $request->code;
        $function = $request->function;
        // $mfo = new RatingScaleMatrix;
        // $mfo->parent_id = null;
        // $mfo->department_id = $department_id;
        // $mfo->code = $request->new_mfo['category'];
        // $mfo->order_number = 1;
        // $mfo->function = $request->new_mfo['title'];
        // $mfo->period = $period;
        // $mfo->year = $year;
        // $mfo->save();

        RatingScaleMatrix::where('id', $id)
            ->update([
                'code' => $code,
                'function' => $function,
            ]);

        return  response()->json($request);
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RatingScaleMatrix  $ratingScaleMatrix
     * @return \Illuminate\Http\Response
     */
    public function show(RatingScaleMatrix $ratingScaleMatrix)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RatingScaleMatrix  $ratingScaleMatrix
     * @return \Illuminate\Http\Response
     */
    public function edit(RatingScaleMatrix $ratingScaleMatrix)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RatingScaleMatrix  $ratingScaleMatrix
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RatingScaleMatrix $ratingScaleMatrix)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RatingScaleMatrix  $ratingScaleMatrix
     * @return \Illuminate\Http\Response
     */
    public function destroy(RatingScaleMatrix $ratingScaleMatrix)
    {
        //
    }
}
