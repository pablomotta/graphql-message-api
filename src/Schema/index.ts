import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { PARSE_MESSAGE } from './Mutations/Messages';
import { GET_ALL_MESSAGES } from './Queries/Messages';

const RootQuery = new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		getAllMessages: GET_ALL_MESSAGES,
	},
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		parseMessage: PARSE_MESSAGE,
	},
});

export const schema = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation,
});
