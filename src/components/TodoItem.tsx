import type { Todo } from "../models/Todo"

type TodoItemProps = {
    todo: Todo;
}

export const TodoItem = ({todo}: TodoItemProps) => {
    return (
        <>
            <h2>{todo.todo}</h2>
            <input type="checkbox" checked={todo.done} />
        </>
    )
}