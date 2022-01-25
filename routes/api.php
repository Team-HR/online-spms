<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RatingScaleMatrixController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route::get('/test', [RatingScaleMatrixController::class, 'test']);
Route::middleware('auth:sanctum')->get('/rsm', [RatingScaleMatrixController::class, 'getRatingScaleMatrix']);
Route::middleware('auth:sanctum')->post('/rsm/add_new_mfo', [RatingScaleMatrixController::class, 'add_new_mfo']);
Route::middleware('auth:sanctum')->post('/rsm/save_edit_mfo', [RatingScaleMatrixController::class, 'save_edit_mfo']);