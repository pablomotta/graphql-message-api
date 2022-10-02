import { GraphQLList } from 'graphql';
import { MessageType } from '../TypeDefs/Messages';
import { data, IData } from '../data';

export const GET_ALL_MESSAGES = {
	type: new GraphQLList(MessageType),
	resolve(): IData[] {
		return data;
	},
};
