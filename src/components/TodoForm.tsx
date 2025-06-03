import type { ChangeEvent, FormEvent } from "react";
import type { Todo } from "../models/Todo";

type TodoFormProps = {
    todo: Todo;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent) => void;
};

export const TodoForm = ({ todo, onChange, onSubmit }: TodoFormProps) => {
    return (
        <form
            onSubmit={onSubmit}
            className="bg-yellow-100 p-6 rounded-2xl shadow-md max-w-md mx-auto mb-6 font-sans"
            >
            <label className="block mb-4">
                <h2 className="text-lg font-semibold mb-1 text-yellow-800">Task</h2>
                <input
                type="text"
                id="task"
                value={todo.task}
                onChange={onChange}
                className="w-full px-3 py-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </label>

            <label
                htmlFor="done"
                className="flex items-center gap-2 cursor-pointer mb-4"
                >
                <input
                    type="checkbox"
                    id="done"
                    checked={todo.done}
                    onChange={onChange}
                    className="h-5 w-5 accent-yellow-500 rounded-sm border-yellow-400 shadow-sm cursor-pointer transition duration-200"
                />
                <span className="text-lg font-semibold text-yellow-800">
                    Already done?
                </span>
            </label>

            <button
                type="submit"
                className="bg-yellow-400 text-yellow-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-colors cursor-pointer"
            >
                Add Todo
            </button>
        </form>
    );
};
