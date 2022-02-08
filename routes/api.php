<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RatingScaleMatrixController;
use App\Models\Employee;
use Facade\FlareClient\Http\Response;
use Prophecy\Argument\Token\InArrayToken;

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



Route::get('/test', [RatingScaleMatrixController::class, 'getRatingScaleMatrix']);
Route::middleware('auth:sanctum')->get('/rsm', [RatingScaleMatrixController::class, 'getRatingScaleMatrix']);
Route::middleware('auth:sanctum')->get('/rsm/get_success_indicator', [RatingScaleMatrixController::class, 'get_success_indicator']);
Route::middleware('auth:sanctum')->post('/rsm/save_success_indicator', [RatingScaleMatrixController::class, 'save_success_indicator']);
Route::middleware('auth:sanctum')->post('/rsm/delete', [RatingScaleMatrixController::class, 'delete']);
Route::middleware('auth:sanctum')->post('/rsm/add_new_mfo', [RatingScaleMatrixController::class, 'add_new_mfo']);
Route::middleware('auth:sanctum')->post('/rsm/add_subfunction', [RatingScaleMatrixController::class, 'add_subfunction']);
Route::middleware('auth:sanctum')->post('/rsm/save_edit_mfo', [RatingScaleMatrixController::class, 'save_edit_mfo']);
// rsm/get_success_indicator

Route::post('/employees', function (Request $request) {
    $items = [];

    $excepts = $request->excepts;
    foreach ($excepts as $key => $employee) {
        $excepts[$key] = $employee['id'];
    }

    $items = Employee::select('*')
        // ->whereNotIn('id',$excepts)
        ->where('last_name', 'like', '%' . $request->name . '%')
        ->orWhere('first_name', 'like', '%' . $request->name . '%')
        ->get();

    /* 
    $items = $items->toArray();

    $items = array_map(function ($employee) {
        return [
            'id' => $employee['id'],
            'full_name' => $employee['full_name'],
        ];
    }, $items);
    */

    $data = [];
    foreach ($items as $key => $employee) {
        if (!in_array($employee->id,$excepts)) {
            $data[] = [
                'id' => $employee->id,
                'full_name' => $employee->full_name,
            ];
        }
    }

    return response()->json($data);
});