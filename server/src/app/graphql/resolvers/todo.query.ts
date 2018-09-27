import { TodoDAO } from '../../models/todo.dao';

export const queries = {
    todos: (_: any) => TodoDAO.getAll(),
    todo: (_: any, params: { id: string }) => TodoDAO.get(params.id)
};
