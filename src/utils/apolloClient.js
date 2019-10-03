import ApolloClient from 'apollo-boost';
import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import introspectionQueryResultData from '../fragmentTypes.json';
import { InMemoryCache } from 'apollo-cache-inmemory';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});
const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  uri: 'https://app.pipefy.com/public_api',
  cache,
});

export default client;
