import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import TodoList from '../components/todo-list/TodoList';
import * as models from '../models';
import { IStoreState } from '../store';
import * as actions from '../store/actions';

export function mapStateToProps({ todos }: IStoreState) {
    return { todos }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.TodoAction>) {
    return {
        onAddTodo: (todo: models.Todo) => dispatch(actions.addTodo(todo)),
        onEditTodo: (todo: models.Todo) => dispatch(actions.editTodo(todo)),
        onRemoveTodo: (todo: models.Todo) => dispatch(actions.removeTodo(todo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
