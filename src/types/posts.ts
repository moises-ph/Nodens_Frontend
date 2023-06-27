export type PostT = {
	IDAuth : string,
	title: string,
	text: string,
	links?: string[],
	images?: string[],
	date: string,
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
