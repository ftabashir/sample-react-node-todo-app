export interface ITodo {
    title: string;
    dueDate: String;
    priority: Priority;
    completed: boolean;
}

export type Priority = 'low' | 'medium' | 'high';

export const defaultDueDate = () => {
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    return nextWeek.toISOString();
};
