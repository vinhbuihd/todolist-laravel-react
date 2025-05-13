<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Post::create(['title' => 'Test Post 1', 'description' => 'description 1']);
        Post::create(['title' => 'Test Post 2', 'description' => 'description 2']);
        Post::create(['title' => 'Test Post 3', 'description' => 'description 3']);
    }
}
