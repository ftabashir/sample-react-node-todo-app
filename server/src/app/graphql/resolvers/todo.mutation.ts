import { ITodoModel } from '../../models/todo.schema';
import { TodoDAO } from '../../models/todo.dao';

export const mutations = {
    createTodo: (_: any, args: { todo: ITodoModel }) => TodoDAO.create(args.todo),
    updateTodo: (_: any, args: { id: string, todo: ITodoModel }) => TodoDAO.update(args.id, args.todo),
    deleteTodo: (_: any, args: { id: string }) => TodoDAO.delete(args.id)
};
