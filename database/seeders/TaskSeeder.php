<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Task;

class TaskSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Task::create(['title' => 'Học Laravel', 'completed' => false]);
        Task::create(['title' => 'Học InertiaJS', 'completed' => true]);
        Task::create(['title' => 'Tạo giao diện React', 'completed' => false]);
        Task::create(['title' => 'Tạo giao diện React 2', 'completed' => false]);
    }
}
