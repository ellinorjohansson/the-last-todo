import { useState, type ChangeEvent, type FormEvent } from "react"
import { Todo } from "../models/Todo"
import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";
import { TodoSort } from "./TodoSort";

export const TodoApp = () => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const stored = localStorage.getItem("todos");
            if (stored) {
                const parsed: Todo[] = JSON.parse(stored);
                return parsed.map((t) => new Todo(t.task, t.done));
            } else {
            return [
                new Todo("Run", false),
                new Todo("Cook dinner", false),
                new Todo("Study", false),
            ];
        }
    });

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

        const updatedTodos = [...todos, todo];
        setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        setTodo(new Todo("", false));
    }

    const handleToggle = (id: number) => {
        const updated = todos.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
        );
        setTodos(updated);
        localStorage.setItem("todos", JSON.stringify(updated));
    };

    const activeTodos = todos.filter(todo => !todo.done);
    const completedTodos = todos.filter(todo => todo.done);

    const [sortOrder, setSortOrder] = useState("default");

    const sortTodos = (todos: Todo[]) => {
        switch (sortOrder) {
            case "az":
            return [...todos].sort((a, b) => a.task.localeCompare(b.task));
            case "za":
            return [...todos].sort((a, b) => b.task.localeCompare(a.task));
            default:
            return todos;
        }
    };

    return (
        <>
            <TodoForm todo={todo} onChange={handleChange} onSubmit={handleSubmit}/>
            <TodoSort sortOrder={sortOrder} onSortChange={setSortOrder} />
            <h2>ToDo List</h2>
            <TodoList todos={sortTodos(activeTodos)} onToggle={handleToggle} />
            <h2>Completed ToDo</h2>
            <TodoList todos={sortTodos(completedTodos)} onToggle={handleToggle} />

        </>
    )
}