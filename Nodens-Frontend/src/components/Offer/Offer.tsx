import {motion} from 'framer-motion'
import { OffersT } from '../../pages/Offers/Offers'

const variants = {
	open: {
		translateY: '-50vh'
	},
	closed : {
		translateY: '100vh'
	}
}

const Offer = ({open, oferta}:{open:boolean, oferta: OffersT | undefined}) => {
  return (
	<motion.div
		animate={open ? 'open' : 'closed'}
		variants={variants}
		className='h-48 w-full bg-black'
		exit={{translateY: '100vh'}}
	>
		<h1 className='text-slate-100'>{oferta!.Title}</h1>
	</motion.div>
  )
}

export default Offer