import {motion} from 'framer-motion'
import { OffersT } from '../../types'
import Offer from './Offer'

const variants = {
	open: {
		translateY: '-95vh'
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
		className='h-[80vh] overflow-y-scroll fixed w-full bg-slate-100 rounded-lg shadow-2xl shadow-slate-300'
		exit={{translateY: '100vh'}}
	>
		<Offer oferta={oferta}/>
	</motion.div>
  )
}

export default Modal