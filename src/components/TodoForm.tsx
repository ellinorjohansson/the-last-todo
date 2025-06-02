import type { ChangeEvent, FormEvent } from "react";
import type { Todo } from "../models/Todo";

type TodoFormProps = {
    todo: Todo;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: FormEvent) => void;
};

export const TodoForm = ({ todo, onChange, onSubmit }: TodoFormProps) => {
    return (
        <form onSubmit={onSubmit}>
            <label>
                <h2>Task</h2>
                <input type="text" id="task" value={todo.task} onChange={onChange} />
            </label>
            <label>
                <h2>Already done?</h2>
                <input type="checkbox" id="done" checked={todo.done} onChange={onChange} />
            </label>
            <button>Add Todo</button>
        </form>
    );
};
