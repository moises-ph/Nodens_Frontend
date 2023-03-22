import { BsSearch } from "react-icons/bs"
import { FaMusic } from "react-icons/fa";
import { GoOrganization } from "react-icons/go"
import { Link } from "react-router-dom";

const Posts = () => {
	return (
		<>

			<main>
				<div className="pt-8 pl-6 shadow-xl h-40">
					<label htmlFor="" className="w-[85vw] flex items-center gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl pl-4 shadow-xl">
						<BsSearch className="text-slate-400" />
						<input type="text" placeholder="Buscar" className="bg-transparent w-full outline-none text-slate-900" />
					</label>
				<nav className="flex  justify-evenly items-center pt-4">
					<Link to=""><FaMusic className="ml-6"/>Músicos</Link>
					<Link to=""><GoOrganization className="ml-10"/>Organizadores</Link>
				</nav>

				</div>
			</main>
			
		</>
	);
};

export default Posts;
