export interface IData {
	id: number;
	message: string;
	mentions?: string[] | null;
	emoticons?: string[] | null;
	links?: {
		url?: string | null;
		title?: string | null;
	}[];
}

export const data: IData[] = [
	{
		id: 1,
		message:
			'This is a sample message (smile) @johnny - https://pablomotta.github.io/',
		mentions: ['johnny'],
		emoticons: ['smile'],
		links: [{ url: 'https://pablomotta.github.io/', title: 'Pablo Motta' }],
	},
];
