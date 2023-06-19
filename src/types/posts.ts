export type PostT = {
	IDAuth : string,
	title: string,
	content: {
		text: string,
		links?: string[],
		images?: string[]
	},
	date: Date,
	likes: number,
	comments?: [{
		IDAuth: string,
		text: string,
		links?: string[],
		images?: string[],
		Responses?: [{
			IDAuth: string,
			text: string,
			links?: string[],
			images?: string[],
		}]
	}]
}
