import type { Todo } from "../models/Todo"
import { TodoItem } from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
}

export const TodoList = ({todos, onToggle}: TodoListProps) => {
    return (
        <ul>
            {todos.map((t) => (
                <TodoItem key={t.id} todo={t} onToggle={onToggle} />
            ))}
        </ul>
    )
}