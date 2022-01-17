<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingScaleMatrixSuccessIndicatorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rating_scale_matrix_success_indicators', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('rating_scale_matrix_id');
            $table->integer('order_number');
            $table->string('success_indicator')->nullable();
            $table->string('quality')->nullable();
            $table->string('efficiency')->nullable();
            $table->string('timeliness')->nullable();
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
        Schema::dropIfExists('rating_scale_matrix_success_indicators');
    }
}
