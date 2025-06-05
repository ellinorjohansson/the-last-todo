import type { Todo } from "../models/Todo"
import { TodoItem } from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    emptyMessage?: string;
}

export const TodoList = ({todos, onToggle, emptyMessage = "No data to display"}: TodoListProps) => {
    if (todos.length === 0) {
        return <p className="text-gray-500 italic">{emptyMessage}</p>;
    }

    return (
        <ul>
            {todos.map((t) => (
                <TodoItem key={t.id} todo={t} onToggle={onToggle} />
            ))}
        </ul>
    )
}