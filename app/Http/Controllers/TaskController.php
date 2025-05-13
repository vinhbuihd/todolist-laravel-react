<?php

namespace App\Http\Controllers;
use App\Models\Task;
use Inertia\Inertia;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index() {
        $tasks = Task::all();
        return Inertia::render("Tasks", ['tasks' => $tasks]);
    }

    public function store(Request $request) {
        $request->validate([
            'title' => 'required|string|max:255',
            'complete' => 'boolean'
        ]);

        Task::create([
            'title' => $request->title,
            'completed' => $request->completed ?? false,
        ]);

        return redirect()->route('tasks.index');

    }

    public function destroy(Task $task) {
        $task->delete();
        return redirect()->route('tasks.index');

    }


    public function update(Request $request, Task $task)
        {
            $request->validate([
                'title' => 'required|string|max:255',
                'completed' => 'boolean',
            ]);

            $task->update([
                'title' => $request->title,
                'completed' => $request->completed,
            ]);

            return redirect()->route('tasks.index');
        }
}
