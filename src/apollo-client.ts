import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://chuck-backend-challenge.herokuapp.com/graphql',
  cache: new InMemoryCache()
});
