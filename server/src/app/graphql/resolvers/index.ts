import { queries as todoQueries } from './todo.query';
import { mutations as todoMutations } from './todo.mutation';

export const resolvers = {
    Query: todoQueries,
    Mutation: todoMutations
};
