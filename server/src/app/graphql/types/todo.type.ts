import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum Priority {
    low
    medium
    high
  }
  type Todo {
    id: String!
    title: String!
    priority: Priority!
    dueDate: String!
    completed: Boolean!
  }
  input CreateTodoInput{
    title: String!
    priority: Priority
    dueDate: String
  }
  input UpdateTodoInput{
    title: String
    priority: Priority
    dueDate: String
    completed: Boolean
  }
  type Query {
    todos: [Todo]
    todo(id: String!): Todo
  }
  type Mutation {
    createTodo(todo: CreateTodoInput!): Todo
    updateTodo(id: String!, todo: UpdateTodoInput): Boolean
    deleteTodo(id: String!): Boolean
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;
