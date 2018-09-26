export interface ITodo {
    title: string;
    dueDate: Date;
    priority: Priority;
    completed: boolean;
}

export type Priority = 'low' | 'medium' | 'high';

export const defaultDueDate = () => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    return nextWeek;
};
