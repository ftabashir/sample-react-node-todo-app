import * as models from '../models'

export interface IStoreState {
    todos: {
        [id: string]: {
            model: models.Todo,
            isAdding: boolean,
            isRemoving: boolean,
            isEditing: boolean
        }
    }
}

export const initialStore: IStoreState = { todos: {} }
