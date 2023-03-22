import { BsSearch } from "react-icons/bs"
import { Link } from "react-router-dom";

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

const posts: PostT[] = [
	{
		IDAuth: '1',
		title: 'Titulo 1',
		content: {
			text: 'texto de post 1'
		},
		date: new Date(),
		likes: 20
	},
	{
		IDAuth: '2',
		title: 'Titulo 2',
		content: {
			text: 'texto de post 2'
		},
		date: new Date(),
		likes: 20
	},
	{
		IDAuth: '3',
		title: 'Titulo 3',
		content: {
			text: 'texto de post 3'
		},
		date: new Date(),
		likes: 20
	},
	{
		IDAuth: '4',
		title: 'Titulo 4',
		content: {
			text: 'texto de post 4'
		},
		date: new Date(),
		likes: 20
	},
	{
		IDAuth: '5',
		title: 'Titulo 5',
		content: {
			text: 'texto de post 5'
		},
		date: new Date(),
		likes: 20
	},
	{
		IDAuth: '6',
		title: 'Titulo 6',
		content: {
			text: 'texto de post 6'
		},
		date: new Date(),
		likes: 20
	},
]

const Posts = () => {
	return (
		<>
			<section>
				<div className="pt-8 pl-6 shadow-xl h-40">
					<label htmlFor="" className="w-[85vw] flex items-center gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl">
						<input type="text" placeholder="Buscar" className="bg-transparent w-full outline-none text-slate-900" />
						<button>
							<BsSearch className="text-slate-400" />
						</button>
					</label>
					<p>{posts.length} Posts</p>
				</div>
			</section>
		</>
	);
};

export default Posts;
