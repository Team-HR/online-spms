<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRatingScaleMatricesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rating_scale_matrices', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parent_id')->nullable();
            $table->unsignedBigInteger('department_id');
            $table->string('code')->nullable();
            $table->integer('order');
            $table->string('function');
            $table->tinyInteger('period');
            $table->integer('year');
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
        Schema::dropIfExists('rating_scale_matrices');
    }
}
