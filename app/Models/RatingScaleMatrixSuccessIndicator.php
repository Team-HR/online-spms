<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RatingScaleMatrixSuccessIndicator extends Model
{
    use HasFactory;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'success_indicator',
        'quality',
        'efficiency',
        'timeliness',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'quality' => 'array',
        'efficiency' => 'array',
        'timeliness' => 'array'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'performance_measures',
        'incumbents',
    ];

    /**
     * Get the incumbents of the mfo/pap.
     *
     * @return array
     */
    public function getIncumbentsAttribute()
    {
        $incumbents = [];
        $incumbents = RatingScaleMatrixIncumbent::where("rating_scale_matrix_success_indicator_id", "=", $this->id)->get();
        return $incumbents;
    }

    /**
     * Get the performance measures of mfo/pap.
     *
     * @return array
     */
    public function getPerformanceMeasuresAttribute()
    {
        $performance_measures = ["quality", "efficiency", "timeliness"];

        $arr = [];
        foreach ($performance_measures as $perf) {
            if (!empty($this[$perf])) {
                $perf = mb_convert_case($perf, MB_CASE_TITLE);
                array_push($arr, $perf);
            }
        }

        return $arr;
    }
}
