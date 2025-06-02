import type { Todo } from "../models/Todo"

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
}

export const TodoItem = ({todo, onToggle}: TodoItemProps) => {
    return (
        <li>
            <h2>{todo.task}</h2>
            <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        </li>
    )
}