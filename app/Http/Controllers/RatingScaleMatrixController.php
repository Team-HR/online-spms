<?php

namespace App\Http\Controllers;

use App\Models\RatingScaleMatrix;
use App\Models\RatingScaleMatrixSuccessIndicator;
use Facade\FlareClient\Http\Response;
use Illuminate\Http\Request;

class RatingScaleMatrixController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getRatingScaleMatrix(Request $request)
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



    public function addNewMfo(Request $request)
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
