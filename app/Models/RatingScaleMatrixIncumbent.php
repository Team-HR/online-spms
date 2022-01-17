<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Employee;

class RatingScaleMatrixIncumbent extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'rating_scale_matrix_success_indicator_id',
        'employee_id'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'full_name'
    ];

    /**
     * Get the name of employee.
     *
     * @return string
     */
    public function getFullNameAttribute()
    {
        $full_name = "";
        $employee = Employee::find($this->employee_id);
        $full_name = $employee->full_name;
        return $full_name;
    }
}
