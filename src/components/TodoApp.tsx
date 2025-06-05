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

    const [sortOrder, setSortOrder] = useState("default");

    const activeTodos = todos.filter(todo => !todo.done);
    const completedTodos = todos.filter(todo => todo.done);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.type === "text") {
            setTodo({...todo, [e.target.id]: e.target.value});
        }

        if (e.target.type === "checkbox") {
            setTodo({...todo, [e.target.id]: e.target.checked});
        }
    }

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
        <div className="max-w-lg mx-auto p-4 bg-yellow-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-yellow-800 mb-8">Todo List</h1>
            <div className="mb-10">
                <TodoForm todo={todo} onChange={handleChange} onSubmit={handleSubmit} />
            </div>
            <div className="mb-3">
                <TodoSort sortOrder={sortOrder} onSortChange={setSortOrder} />
            </div>
            <h2 className="text-lg font-semibold mt-4 mb-4">ToDo List</h2>
            <div className="mb-10">
                <TodoList todos={sortTodos(activeTodos)} onToggle={handleToggle} />
            </div>
            <h2 className="text-lg font-semibold mt-4 mb-4">Completed ToDo</h2>
            <div>
                <TodoList todos={sortTodos(completedTodos)} onToggle={handleToggle} />
            </div>
        </div>
    )
}