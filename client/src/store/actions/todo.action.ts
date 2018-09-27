import * as models from '../../models'
import * as constants from '../constants'

// ========= interfaces =========
export interface ICommonTodoAction {
    todo: models.Todo;
}

export interface IAddTodo extends ICommonTodoAction {
    type: constants.ADD_TODO;
}
export interface IAddTodoSuccess extends ICommonTodoAction {
    type: constants.ADD_TODO_SUCCESS;
}
export interface IAddTodoFail extends ICommonTodoAction {
    type: constants.ADD_TODO_FAIL;
}

export interface IRemoveTodo extends ICommonTodoAction {
    type: constants.REMOVE_TODO;
}
export interface IRemoveTodoSuccess extends ICommonTodoAction {
    type: constants.REMOVE_TODO_SUCCESS;
}
export interface IRemoveTodoFail extends ICommonTodoAction {
    type: constants.REMOVE_TODO_FAIL;
}

export interface IEditTodo extends ICommonTodoAction {
    type: constants.EDIT_TODO;
}
export interface IEditTodoSuccess extends ICommonTodoAction {
    type: constants.EDIT_TODO_SUCCESS;
}
export interface IEditTodoFail extends ICommonTodoAction {
    type: constants.EDIT_TODO_FAIL;
}

// ========= facorties ========= 
export function addTodo(todo: models.Todo): IAddTodo {
    return {
        todo,
        type: constants.ADD_TODO
    };
}
export function addTodoSuccess(todo: models.Todo): IAddTodoSuccess {
    return {
        todo,
        type: constants.ADD_TODO_SUCCESS
    };
}
export function addTodoFail(todo: models.Todo): IAddTodoFail {
    return {
        todo,
        type: constants.ADD_TODO_FAIL
    };
}

export function removeTodo(todo: models.Todo): IRemoveTodo {
    return {
        todo,
        type: constants.REMOVE_TODO
    };
}
export function removeTodoSuccess(todo: models.Todo): IRemoveTodoSuccess {
    return {
        todo,
        type: constants.REMOVE_TODO_SUCCESS
    };
}
export function removeTodoFail(todo: models.Todo): IRemoveTodoFail {
    return {
        todo,
        type: constants.REMOVE_TODO_FAIL
    };
}

export function editTodo(todo: models.Todo): IEditTodo {
    return {
        todo,
        type: constants.EDIT_TODO
    };
}
export function editTodoSuccess(todo: models.Todo): IEditTodoSuccess {
    return {
        todo,
        type: constants.EDIT_TODO_SUCCESS
    };
}
export function editTodoFail(todo: models.Todo): IEditTodoFail {
    return {
        todo,
        type: constants.EDIT_TODO_FAIL
    };
}

// ========= union type ========= 
export type TodoAction =
    IAddTodo | IAddTodoSuccess | IAddTodoFail |
    IRemoveTodo | IRemoveTodoSuccess | IRemoveTodoFail |
    IEditTodo | IEditTodoSuccess | IEditTodoFail;
