import { useState, type ChangeEvent, type FormEvent } from "react"
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

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "text") {
            setTodo({...todo, [e.target.id]: e.target.value});
        }

        if (e.target.type === "checkbox") {
            setTodo({...todo, [e.target.id]: e.target.checked});
        }
    }

    console.log(todos);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setTodos([...todos, todo]);
        setTodo(new Todo("", false));
    }

    return (
        <>
         <form onSubmit={handleSubmit}>
            <label>
                <h2>Task</h2>
                <input type="text" id="task" value={todo.task} onChange={handleChange} />
            </label>
            <label>
                <h2>Already done?</h2>
                <input type="checkbox" id="done" checked={todo.done} onChange={handleChange} />
            </label>
            <button>Add Todo</button>
         </form>

         <TodoList todos={todos}/>
        </>
    )
}