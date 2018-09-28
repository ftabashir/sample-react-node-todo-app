import { Todo } from './Todo'

export class TodoComparators {
    public static get(by: 'title' | 'dueDate' | 'priority') {
        switch (by) {
            case 'title':
                return this.titleComparator;
            case 'dueDate':
                return this.dueDateComparator;
            case 'priority':
                return this.priorityComparator;
        }
    }
    public static titleComparator = (todo1: Todo, todo2: Todo) =>
        (todo1.title > todo2.title) ? 1
            : (todo1.title < todo2.title) ? -1 : 0

    public static dueDateComparator = (todo1: Todo, todo2: Todo) =>
        (todo1.dueDate > todo2.dueDate) ? 1
            : (todo1.dueDate < todo2.dueDate) ? -1 : 0

    public static priorityComparator = (todo1: Todo, todo2: Todo) => {
        const priorityValue = { 'low': 0, 'medium': 1, 'high': 2 }
        return (priorityValue[todo1.priority] > priorityValue[todo2.priority]) ? 1
            : (priorityValue[todo1.priority] < priorityValue[todo2.priority]) ? -1 : 0
    }
}
