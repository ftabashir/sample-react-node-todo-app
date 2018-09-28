import * as models from '../../models'
import * as constants from '../constants'

// ========= interfaces =========
export interface ITodoManipulationAction {
    todo: models.Todo;
}

export interface ILoadTodos {
    type: constants.LOAD_TODOS;
}
export interface ILoadTodosSuccess {
    type: constants.LOAD_TODOS_SUCCESS;
    todos: models.Todo[]
}
export interface ILoadTodosFail {
    type: constants.LOAD_TODOS_FAIL;
}

export interface IAddTodo extends ITodoManipulationAction {
    type: constants.ADD_TODO;
}
export interface IAddTodoSuccess extends ITodoManipulationAction {
    type: constants.ADD_TODO_SUCCESS;
}
export interface IAddTodoFail extends ITodoManipulationAction {
    type: constants.ADD_TODO_FAIL;
}

export interface IRemoveTodo extends ITodoManipulationAction {
    type: constants.REMOVE_TODO;
}
export interface IRemoveTodoSuccess extends ITodoManipulationAction {
    type: constants.REMOVE_TODO_SUCCESS;
}
export interface IRemoveTodoFail extends ITodoManipulationAction {
    type: constants.REMOVE_TODO_FAIL;
}

export interface IEditTodo extends ITodoManipulationAction {
    type: constants.EDIT_TODO;
}
export interface IEditTodoSuccess extends ITodoManipulationAction {
    type: constants.EDIT_TODO_SUCCESS;
}
export interface IEditTodoFail extends ITodoManipulationAction {
    type: constants.EDIT_TODO_FAIL;
}

// ========= facorties ========= 
export function loadTodos(): ILoadTodos {
    return {
        type: constants.LOAD_TODOS
    };
}
export function loadTodosSuccess(todos: models.Todo[]): ILoadTodosSuccess {
    return {
        todos,
        type: constants.LOAD_TODOS_SUCCESS
    };
}
export function loadTodosFail(): ILoadTodosFail {
    return {
        type: constants.LOAD_TODOS_FAIL
    };
}

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
    ILoadTodos | ILoadTodosSuccess | ILoadTodosFail |
    IAddTodo | IAddTodoSuccess | IAddTodoFail |
    IRemoveTodo | IRemoveTodoSuccess | IRemoveTodoFail |
    IEditTodo | IEditTodoSuccess | IEditTodoFail;
