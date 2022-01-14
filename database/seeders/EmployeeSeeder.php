<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class EmployeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('employees')->insert([
            'id' => 9,
            'last_name' => 'Valencia',
            'first_name' => 'Franz Joshua',
            'department_id' => 13,
        ]);
    }
}
