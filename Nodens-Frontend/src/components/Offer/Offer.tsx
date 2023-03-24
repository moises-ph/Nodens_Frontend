import {motion} from 'framer-motion'

const variants = {
	open: {
		translateY: '-50vh'
	},
	closed : {
		translateY: '100vh'
	}
}

const Offer = ({open}:{open:boolean}) => {
  return (
	<motion.div
		animate={open ? 'open' : 'closed'}
		variants={variants}
		className='h-48 w-full bg-black'
	>
		<h1 className='text-slate-100'>Holass</h1>
	</motion.div>
  )
}

export default Offer