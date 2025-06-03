import type { Todo } from "../models/Todo"

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
}

export const TodoItem = ({todo, onToggle}: TodoItemProps) => {
    return (
        <li
            className={`transition cursor-pointer select-none 
            ${todo.done ? "bg-yellow-200 text-yellow-600 line-through" : "bg-yellow-50 text-yellow-900"}
            flex items-center justify-between p-3 mb-2 rounded-xl shadow-sm border border-yellow-300`}
        >
            <label
                htmlFor={`todo-${todo.id}`}
                className="flex items-center justify-between w-full cursor-pointer"
            >
                <span className="text-base font-medium">{todo.task}</span>
                <input
                    id={`todo-${todo.id}`}
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggle(todo.id)}
                    className="h-5 w-5 accent-yellow-500 rounded-sm border-yellow-400 shadow-sm cursor-pointer transition duration-200"
                />
            </label>
        </li>
    )
}