import { ApolloServer } from 'apollo-server-express';
import { resolvers } from './resolvers';
import { typeDefs } from './types';


const apolloServer = new ApolloServer({ typeDefs, resolvers });
export = apolloServer;
