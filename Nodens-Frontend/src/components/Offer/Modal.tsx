import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { OffersT } from '../../types'
import Offer from './Offer'
import { BiHeartCircle } from "react-icons/bi"

const variants = {
	open: {
		translateY: '-100vh'
	},
	closed : {
		translateY: '100vh'
	}
}

const Modal = ({open, oferta}:{open:boolean, oferta: OffersT | undefined}) => {
  return (
	<motion.div
		animate={open ? 'open' : 'closed'}
		variants={variants}
		className='h-[90vh] overflow-y-scroll fixed w-full bg-slate-100 rounded-lg shadow-2xl shadow-slate-300 shadow-inner rounded-t-xl'
		exit={{translateY: '100vh'}}
	>
		<Offer oferta={oferta}/>
			<div className='flex justify-center items-center pt-52 w-full pr-16'>
				<Link to="" className='fixed h-10 w-[10rem] bg-slate-300 rounded-2xl shadow-xl shadow-slate-400 flex items-center justify-center bg-blue-300 transition-all duration-200 '>Postularme</Link>
				<div >
				<Link to="" className=''><BiHeartCircle  className='text-4xl ml-[16rem] hover:text-red-500 hover:bg-red-100 w-10  transition-all duration-200 rounded-full'/></Link>
				</div>
			</div>
		

			

	</motion.div>
  )
}

export default Modal