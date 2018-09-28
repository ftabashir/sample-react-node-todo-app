import { gql } from 'apollo-boost';

export const getAll = gql`
  query {
    todos {
      id
      title
      dueDate
      priority
      completed
    }
  }
`;

export const get = gql`
  query {
    todo(id:$id) {
      id
      title
      dueDate
      priority
      completed
    }
  }
`;

export const add = gql`
  mutation createTodo($todo: CreateTodoInput!){
    createTodo(todo:$todo) {
      id
      title
      dueDate
      priority
      completed
    }
  }
`;

export const deleteIt = gql`
  mutation deleteTodo($id: String!){
    deleteTodo(id:$id)
  }
`;

export const edit = gql`
  mutation updateTodo($id: String!, $todo: UpdateTodoInput!){
    updateTodo(id:$id, todo:$todo)
  }
`;
