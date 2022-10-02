import getMetaData from 'metadata-scraper';

/**
 * @param url
 * @returns site title metadata
 */
export const getPageTitle = async (url: string) => {
	const data = await getMetaData(url);
	return { url: data.url, title: data.title };
};

export const parseEmoticon = (string: string) => {
	if (string) {
		const emoticons = string.match(/\(.*?\)/g);
		if (emoticons && emoticons.length >= 1) {
			const matches =
				emoticons &&
				emoticons.map((item) => {
					const emoticon = item.replace(/[()]/g, '');
					if (emoticon.length < 15) {
						return emoticon;
					}
				});
			return matches;
		}
	} else {
		return null;
	}
};

export const parseMention = (string: string | undefined) => {
	if (string) {
		const matches = string.match(/@[0-9a-z](\.?[0-9a-z])*/g);
		const mentions =
			matches &&
			matches.map((item) => {
				const mention = item.replace(/@/g, '');
				return mention;
			});
		return mentions;
	}
};

export const parseUrl = (string: string | undefined) => {
	const matches = string?.match(
		/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
	);
	return matches;
};
