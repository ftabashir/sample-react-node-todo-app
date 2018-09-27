import { TodoModel, ITodoModel } from './todo.schema';

export class TodoDAO {
    static getAll() {
        return TodoModel.find();
    }

    static get(id: string) {
        return TodoModel.findById(id);
    }

    static create(todo: ITodoModel) {
        return TodoModel.create(todo);
    }

    static delete(id: string) {
        return TodoModel.deleteOne({ _id: id }).then((result: { n: number }) => result.n > 0);
    }

    static update(id: string, todo: ITodoModel) {
        return TodoModel.updateOne({ _id: id }, todo).then((result: { n: number }) => result.n > 0);
    }
}
