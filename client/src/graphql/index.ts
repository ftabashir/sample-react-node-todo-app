import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost'

const GRAPGQL_URL = 'http://localhost:3000/graphql'
export const apolloClient = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    uri: GRAPGQL_URL
});
