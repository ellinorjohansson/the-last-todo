import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { Todo } from "../models/Todo"
import { TodoList } from "./TodoList";

export const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const [todo, setTodo] = useState<Todo>(
        new Todo("", false)
    );

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("todos");
        if (stored) {
            const parsed: Todo[] = JSON.parse(stored);
            const restored = parsed.map((t) => new Todo(t.task, t.done));
            setTodos(restored);
        } else {
            setTodos([
                new Todo("Run", false),
                new Todo("Cook dinner", false),
                new Todo("Study", false)
            ]);
        }
        setLoaded(true); 
    }, []);

    useEffect(() => {
        if (loaded) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos, loaded]);


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

    const handleToggle = (id: number) => {
    const updated = todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
    );
        setTodos(updated);
    };  

    const activeTodos = todos.filter(todo => !todo.done);
    const completedTodos = todos.filter(todo => todo.done);


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

            <h2>ToDo List</h2>
            <TodoList todos={activeTodos} onToggle={handleToggle} />
            <h2>Completed ToDo</h2>
            <TodoList todos={completedTodos} onToggle={handleToggle} />

        </>
    )
}