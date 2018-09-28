import { IStoreState } from '../';
import * as actions from '../actions';
import * as constants from '../constants/index';

export function todoReducer(state: IStoreState, action: actions.TodoAction): IStoreState {
    switch (action.type) {
        case constants.ADD_TODO:
            const addingTodo = (action as actions.IAddTodo).todo
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [addingTodo.id]: {
                        isAdding: true,
                        isEditing: false,
                        isRemoving: false,
                        model: addingTodo
                    }
                }
            };
        case constants.ADD_TODO_SUCCESS:
            const { '': outdatedTodo, ...notOutdatedTodos } = state.todos;
            const addedTodo = (action as actions.IAddTodoSuccess).todo
            return {
                ...state,
                todos: {
                    ...notOutdatedTodos,
                    [addedTodo.id]: {
                        ...state.todos[addedTodo.id],
                        isAdding: false,
                        model: addedTodo
                    }
                }
            };
        case constants.ADD_TODO_FAIL:
            const notAddedTodo = (action as actions.IAddTodoFail).todo
            const { [notAddedTodo.id]: notAddedTodo2, ...notAddedOthers } = state.todos
            return {
                ...state,
                todos: { ...notAddedOthers }
            };

        case constants.REMOVE_TODO:
            const removingTodo = (action as actions.IRemoveTodo).todo
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [removingTodo.id]: {
                        ...state.todos[removingTodo.id],
                        isRemoving: true
                    }
                }
            };
        case constants.REMOVE_TODO_SUCCESS:
            const removedTodoId = (action as actions.IRemoveTodoSuccess).todo.id
            const { [removedTodoId]: removedTodo, ...notRemovedTodos } = state.todos;
            return {
                ...state,
                todos: { ...notRemovedTodos }
            };
        case constants.REMOVE_TODO_FAIL:
            const notRemovedTodo = (action as actions.IRemoveTodoFail).todo
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [notRemovedTodo.id]: {
                        ...state.todos[notRemovedTodo.id],
                        isRemoving: false
                    }
                }
            };

        case constants.EDIT_TODO:
            const editingTodo = (action as actions.IEditTodo).todo
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [editingTodo.id]: {
                        isAdding: false,
                        isEditing: true,
                        isRemoving: false,
                        model: editingTodo
                    }
                }
            };
        case constants.EDIT_TODO_SUCCESS:
            const editedTodo = (action as actions.IEditTodoSuccess).todo
            return {
                ...state,
                todos: {
                    ...state.todos,
                    [editedTodo.id]: {
                        ...state.todos[editedTodo.id],
                        isEditing: false,
                        model: editedTodo
                    }
                }
            };
        case constants.EDIT_TODO_FAIL:
            const notEditedTodo = (action as actions.IEditTodoFail).todo
            const { [notEditedTodo.id]: notEditedTodo2, ...notEditedOthers } = state.todos
            return {
                ...state,
                todos: { ...notEditedOthers }
            };
    }
    return state;
}
