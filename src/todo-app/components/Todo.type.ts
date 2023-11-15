export type Todo = {
    id: string;
    text: string;
    completed: boolean;
}

export type TodoJob = {
    todo: Todo;
    job: JobType;
}

enum JobType {
    create = 'create',
    read = 'read',
    update = 'update',
    delete = 'delete',
}