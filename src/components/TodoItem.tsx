import type { Todo } from "../models/Todo"

type TodoItemProps = {
    todo: Todo;
}

export const TodoItem = ({todo}: TodoItemProps) => {
    return (
        <>
            <h2>{todo.task}</h2>
            <input type="checkbox" checked={todo.done} />
        </>
    )
}