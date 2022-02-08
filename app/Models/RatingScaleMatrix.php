<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\RatingScaleMatrixSuccessIndicator;

class RatingScaleMatrix extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'parent_id',
        'department_id',
        'code',
        'order_number',
        'function',
        'period',
        'year'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    // protected $appends = [
    //     'success_indicators',
    // ];

   /**
     * The columns to be hidden.
     *
     * @var array
     */
    protected $hidden = [
        // 'success_indicators',
    ];

    /**
     * Get the success indicators of the mfo/pap.
     *
     * @return array
     */
    // public function getSuccessIndicatorsAttribute()
    // {
    //     $success_indicators = [];
    //     $success_indicators = RatingScaleMatrixSuccessIndicator::where('rating_scale_matrix_id','=',$this->id)->get();
    //     return $success_indicators;
    // }
}
