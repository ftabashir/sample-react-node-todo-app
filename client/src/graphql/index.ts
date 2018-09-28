import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-boost'

const apiHost = process.env.API_HOST || 'localhost';
const apiPort = process.env.API_PORT || '3000';
const GRAPGQL_URL = `http://${apiHost}:${apiPort}/graphql`;
export const apolloClient = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    uri: GRAPGQL_URL
});
