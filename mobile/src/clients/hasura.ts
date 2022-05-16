import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HASURA_GRAPHQL_API_URL } from '../utils/constants';

const httpLink = createHttpLink({
	uri: HASURA_GRAPHQL_API_URL,
});

export const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});
