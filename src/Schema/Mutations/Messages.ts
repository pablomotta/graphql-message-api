import { GraphQLString } from 'graphql';
import { IData, data } from '../data';
import { MessageType } from '../TypeDefs/Messages';
import {
	parseMention,
	parseEmoticon,
	parseUrl,
	getPageTitle,
} from '../../utils';

export const PARSE_MESSAGE = {
	type: MessageType,
	args: {
		message: { type: GraphQLString },
	},
	async resolve(_: any, args: IData) {
		const { message } = args;
		console.log(message);

		try {
			const mentions = parseMention(message);
			console.log(mentions);
			const emoticons = parseEmoticon(message);
			console.log(emoticons);
			const urls = parseUrl(message);
			console.log(urls);
			const links = await urls?.map(async (url) => {
				const linkData = await getPageTitle(url);
				return linkData;
			});
			console.log(links);

			let newMessage: IData = {
				id: data.length + 1,
				message: message,
			};
			if (mentions) newMessage.mentions = mentions;
			if (emoticons) newMessage.emoticons = emoticons as string[];
			if (links) newMessage.links = links as any;

			return args;
		} catch (error) {
			console.error(error);
		}
	},
};
