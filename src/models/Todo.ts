export class Todo {
    id: number;
    todo: string;
    done: boolean;

    constructor(todo: string, done: boolean) {
        this.id = Date.now();
        this.todo = todo;
        this.done = done;
    }
}