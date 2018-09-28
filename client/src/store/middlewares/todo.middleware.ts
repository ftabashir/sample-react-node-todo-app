import { ApolloQueryResult } from 'apollo-boost';
import { Dispatch, Middleware, MiddlewareAPI } from 'redux';
import { IStoreState } from '../';
import { apolloClient } from '../../graphql';
import * as todoQueries from '../../graphql/queries/todo.query';
import * as models from '../../models';
import * as actions from '../actions';
import * as constants from '../constants';

const loadTodosMiddleware = (dispatch: Dispatch<actions.TodoAction>) => {
    apolloClient.query({ query: todoQueries.getAll })
        .then((result: ApolloQueryResult<{ todos: models.Todo[] }>) => {
            result.data.todos.forEach(todo => todo.dueDate = new Date(todo.dueDate));
            dispatch(actions.loadTodosSuccess(result.data.todos));
        }).catch(error => {
            dispatch(actions.loadTodosFail());
        });
};
const addTodoMiddleware = (todo: models.Todo, dispatch: Dispatch<actions.TodoAction>) => {
    const { id: todoId, ...todoCreationInput } = todo;
    apolloClient.mutate({ mutation: todoQueries.add, variables: { todo: todoCreationInput } })
        .then((result: ApolloQueryResult<{ createTodo: models.Todo }>) => {
            result.data.createTodo.dueDate = new Date(result.data.createTodo.dueDate)
            dispatch(actions.addTodoSuccess(result.data.createTodo));
        }).catch(error => {
            dispatch(actions.addTodoFail(todo));
        });
};
const deleteTodoMiddleware = (todo: models.Todo, dispatch: Dispatch<actions.TodoAction>) => {
    const { id } = todo;
    apolloClient.mutate({ mutation: todoQueries.deleteIt, variables: { id } })
        .then((result: ApolloQueryResult<{ deleteTodo: boolean }>) => {
            if (result.data.deleteTodo) { dispatch(actions.removeTodoSuccess(todo)); }
            else { dispatch(actions.removeTodoFail(todo)) }
        }).catch(error => {
            dispatch(actions.removeTodoFail(todo));
        });
};
const editTodoMiddleware = (todo: models.Todo, dispatch: Dispatch<actions.TodoAction>) => {
    const { id: todoId, ...todoEditInput } = todo;
    apolloClient.mutate({ mutation: todoQueries.edit, variables: { id: todoId, todo: todoEditInput } })
        .then((result: ApolloQueryResult<{ updateTodo: boolean }>) => {
            if (result.data.updateTodo) { dispatch(actions.editTodoSuccess(todo)); }
            else { dispatch(actions.editTodoFail(todo)) }
        }).catch(error => {
            dispatch(actions.addTodoFail(todo));
        });
};
export const todoWebServiceMiddleware: Middleware<{}, IStoreState> =
    (api: MiddlewareAPI<Dispatch<actions.TodoAction>>) =>
        (next: Dispatch) => action => {
            const todo = (action as actions.ITodoManipulationAction).todo;
            switch (action.type) {
                case constants.LOAD_TODOS:
                    loadTodosMiddleware(api.dispatch);
                    break;
                case constants.ADD_TODO:
                    addTodoMiddleware(todo, api.dispatch);
                    break;
                case constants.REMOVE_TODO:
                    deleteTodoMiddleware(todo, api.dispatch);
                    break;
                case constants.EDIT_TODO:
                    editTodoMiddleware(todo, api.dispatch);
                    break;
            }
            return next(action);
        }
