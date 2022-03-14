<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePerformanceCommitmentsAndReviewRecordCoreAccomplishmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('performance_commitments_and_review_record_core_accomplishments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rating_scale_matrix_success_indicator_id');
            $table->unsignedBigInteger('performance_commitments_and_review_record_id');
            $table->integer('percentage_weight');
            $table->text('actual_accomplishment');
            $table->integer('quality');
            $table->integer('efficiency');
            $table->integer('timeliness');
            $table->text('remarks');
            $table->boolean('is_not_applicable');
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
        Schema::dropIfExists('performance_commitments_and_review_record_core_accomplishments');
    }
}
