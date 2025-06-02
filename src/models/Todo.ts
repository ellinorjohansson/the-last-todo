export class Todo {
    id: number;
    task: string;
    done: boolean;

    constructor(task: string, done: boolean) {
        this.id = Date.now();
        this.task = task;
        this.done = done;
    }
}