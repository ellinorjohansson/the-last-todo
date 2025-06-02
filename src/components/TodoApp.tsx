import { useState } from "react"
import { Todo } from "../models/Todo"
import { TodoList } from "./TodoList";

export const TodoApp = () => {
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
         <form>
            <label>
                <h2>Task</h2>
                <input type="text" />
            </label>
            <label>
                <h2>Already done?</h2>
                <input type="checkbox" />
            </label>
            <button>Add Todo</button>
         </form>

         <TodoList todos={todos}/>
        </>
    )
}