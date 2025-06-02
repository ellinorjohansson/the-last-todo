import type { Todo } from "../models/Todo"
import { TodoItem } from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
}

export const TodoList = ({todos}: TodoListProps) => {
    return (
        <ul>
            {todos.map((t) => (
                <TodoItem key={t.id} todo={t} />
            ))}
        </ul>
    )
}