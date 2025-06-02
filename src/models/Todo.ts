export class Todo {
    id: number;
    task: string;
    done: boolean;

    constructor(task: string, done: boolean) {
        this.id = Date.now() + Math.floor(Math.random() * 1000);
        this.task = task;
        this.done = done;
    }
}