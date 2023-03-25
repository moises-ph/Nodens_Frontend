import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { OffersT } from '../../types'
import Offer from './Offer'

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
		className='h-[90vh] overflow-y-scroll fixed w-full bg-slate-100 rounded-lg shadow-2xl shadow-slate-300 rounded-t-xl'
		exit={{translateY: '100vh'}}
	>
		<Offer oferta={oferta}/>
			<div className='flex justify-center items-center pt-56'>
				<Link to="" className='fixed h-10 w-28 bg-slate-300 rounded-2xl shadow-xl shadow-slate-400 flex items-center justify-center'>Postularme</Link>
			</div>
			

	</motion.div>
  )
}

export default Modal