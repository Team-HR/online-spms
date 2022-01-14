<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
        'order',
        'function',
        'period',
        'year',
        'success_indicator',
        'quality',
        'efficiency',
        'timeliness',
    ];
}
