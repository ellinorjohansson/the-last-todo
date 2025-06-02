import { useState } from "react"
import { Todo } from "../models/Todo"

export const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([
        new Todo("Springa", false),
        new Todo("Laga middag", false),
        new Todo("Plugga", false)
    ]);

    const [todo, setTodo] = useState<Todo>(
        new Todo("", false)
    );

    return (
        <>

        </>
    )
}