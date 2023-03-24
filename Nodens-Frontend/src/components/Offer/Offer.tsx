import {motion} from 'framer-motion'
import Offers, { OffersT } from '../../pages/Offers/Offers'

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
		className='h-60 w-full bg-black rounded-lg shadow-xl shadow-slate-300'
		exit={{translateY: '100vh'}}
	>
		<h1 className='text-slate-100 pl-1 pt-1'>{oferta!.Title}</h1>
		<p className='text-slate-50 pl-1'>{oferta?.Description}</p>
		<p className='text-slate-50 pl-1'>{oferta?.Requeriments.map((k, index)=>(
			<>
				<div key={index}>
					<p>{k.description}</p>
				</div>
			</>
		))}</p>
		<p className='text-slate-50 pl-1'>Ubicación: {oferta?.Event_Ubication.city}, {oferta?.Event_Ubication.Town}</p>
		<p className='text-slate-50 pl-1'>Pago: {oferta?.Payment}</p>
		<p className='text-slate-50 pl-1'>Publicado el: {oferta?.Creation_Date.toDateString()}</p>
		<p className='text-slate-50 pl-1'>{oferta?.vacants} vacantes disponibles</p>
		
	</motion.div>
  )
}

export default Offer