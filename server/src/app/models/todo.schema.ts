import { Document, Schema, Model, model } from 'mongoose';
import { ITodo, defaultDueDate } from './Todo';

export interface ITodoModel extends ITodo, Document { }

export const TodoSchema: Schema = new Schema({
    title: String,
    dueDate: Date,
    priority: String,
    completed: Boolean
}, { versionKey: false });

TodoSchema.pre('save', function (next) {
    const defaultValues = {
        title: '[NO_TITLE]',
        dueDate: defaultDueDate(),
        priority: 'medium',
        completed: false
    };
    Object.keys(defaultValues).forEach(key => {
        if ((this as any)[key] == undefined) {
            (this as any)[key] = (defaultValues as any)[key];
        }
    });
    next();
});

TodoSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
// Ensure virtual fields are serialised.
TodoSchema.set('toJSON', {
    virtuals: true
});

export const TodoModel: Model<ITodoModel> = model<ITodoModel>('Todo', TodoSchema);
