<?php

namespace App\Http\Controllers;

use App\Models\RatingScaleMatrix;
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

        $items = RatingScaleMatrix::select('*')
        ->where('department_id', '=', $department_id)
        ->where('period', '=', $period)
        ->where('year', '=', $year)
        ->get();
        return response()->json($items);
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
