import type { Todo } from "../models/Todo"
import { TodoItem } from "./TodoItem";

type TodoListProps = {
    todos: Todo[];
}

export const TodoList = ({todos}: TodoListProps) => {
    return (
        <>
            {todos.map((t) => (
                <TodoItem todo={t} />
            ))}
        </>
    )
}