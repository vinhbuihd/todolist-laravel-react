import { useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Tasks({ tasks }) {
    const [editingTask, setEditingTask] = useState();

    const {
        data,
        setData,
        post,
        put,
        delete: destroy,
        processing,
        reset,
    } = useForm<{ title: string; completed: boolean }>({
        title: '',
        completed: false,
    });

    const addTask = async (e: React.FormEvent) => {
        e.preventDefault();
        post(route('tasks.store'), {
            onSuccess: () => reset(),
        });
    };

    const deleteTask = async (id: string) => {
        if (confirm('Bạn có chắc muốn xoá task này?')) {
            destroy(route('tasks.destroy', id));
        }
    };

    const startEdit = (task) => {
        setEditingTask(task);
        setData({
            title: task.title,
            completed: task.completed,
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        if (!editingTask) return;

        put(route('tasks.update', editingTask?.id), {
            onSuccess: () => {
                reset();
                setEditingTask(undefined);
            },
        });
    };

    return (
        <div className="mx-auto max-w-xl space-y-6 rounded-lg bg-white p-6 shadow-md">
            <form onSubmit={editingTask ? handleUpdate : addTask} className="space-y-4 space-x-2">
                <div>
                    <label className="mb-1 block font-medium text-gray-700">Tên task</label>
                    <input
                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        type="text"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        placeholder="Nhập tên task"
                        required
                    />
                </div>

                <label className="inline-flex items-center">
                    <input
                        type="checkbox"
                        checked={data.completed}
                        onChange={(e) => setData('completed', e.target.checked)}
                        className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Hoàn thành</span>
                </label>

                <button
                    type="submit"
                    disabled={processing}
                    className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 disabled:opacity-50"
                >
                    {editingTask ? 'Cập nhật Task' : 'Thêm Task'}
                </button>
            </form>

            <div>
                <h2 className="mb-3 text-lg font-semibold text-gray-800">📋 Danh sách công việc</h2>
                <ul className="space-y-2">
                    {tasks?.map((task) => (
                        <li key={task.id} className="flex items-center justify-between rounded-md border border-gray-200 bg-gray-50 p-3">
                            <div className="flex items-center gap-2 text-gray-800">
                                <span className={task.completed ? 'line-through' : ''}>{task.title}</span>
                                <span>{task.completed ? '✅' : '❌'}</span>
                            </div>
                            <div className="space-x-2">
                                <button
                                    onClick={() => startEdit(task)}
                                    className="rounded-md bg-yellow-400 px-3 py-1 text-sm text-white hover:bg-yellow-500"
                                >
                                    Sửa
                                </button>
                                <button
                                    onClick={() => deleteTask(task.id)}
                                    className="rounded-md bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600"
                                >
                                    Xoá
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
