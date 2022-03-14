<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePerformanceCommitmentsAndReviewRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('performance_commitments_and_review_records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rating_scale_matrix_period_id');
            $table->boolean('is_nga')->nullable();
            $table->unsignedBigInteger('employee_id');
            $table->unsignedBigInteger('employee_id_supervisor')->nullable();
            $table->unsignedBigInteger('employee_id_department_head')->nullable();
            $table->unsignedBigInteger('employee_id_head_of_agency')->nullable();
            $table->text('name_supervisor')->nullable();
            $table->text('name_department_head')->nullable();
            $table->text('name_head_of_agency')->nullable();
            $table->unsignedBigInteger('office_id')->nullable();
            $table->unsignedBigInteger('department_id');
            $table->unsignedBigInteger('employee_id_pmt')->nullable();
            $table->text('status')->nullable();
            $table->timestamp('date_certified')->nullable();
            $table->timestamp('date_approved')->nullable();
            $table->timestamp('date_accomplished')->nullable();
            $table->text('pcr_type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('performance_commitments_and_review_records');
    }
}
