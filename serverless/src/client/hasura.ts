import { GraphQLClient } from 'graphql-request';
import { HASURA_GRAHQL_API_ADMIN_SECRET, HASURA_GRAPHQL_API_URL } from '../utils/constants';

const hasuraClient = new GraphQLClient(HASURA_GRAPHQL_API_URL!);

export const request = <R, V = Record<string, any>>(document: string, variables?: V): Promise<R> => {
	hasuraClient.setHeader('x-hasura-admin-secret', HASURA_GRAHQL_API_ADMIN_SECRET!);

	return hasuraClient.request(document, variables);
};
