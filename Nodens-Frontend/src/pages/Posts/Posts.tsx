import { BsSearch } from "react-icons/bs"

const Posts = () => {
	return (
		<>
			<main>
				<div className="pt-8 pl-6">
					<label htmlFor="" className="w-[85vw] flex items-center gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl pl-4 shadow-xl">
						<BsSearch className="text-slate-400" />
						<input type="text" placeholder="Buscar" className="bg-transparent w-full outline-none text-slate-900" />
					</label>

				</div>
			</main>
		</>
	);
};

export default Posts;
