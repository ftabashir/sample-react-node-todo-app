export type Priority = 'low' | 'medium' | 'high'

export const priorityOptions: Priority[] = ['low', 'medium', 'high']

export class Todo {
    constructor(
        public title: string,
        public dueDate: Date = defaultDueDate(),
        public priority: Priority = 'medium',
        public completed: boolean = false,
        public id: string = '') { }
}

const defaultDueDate = () => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    return nextWeek;
}
