import {motion, AnimatePresence} from 'framer-motion'

const variants = {
	hidden: {
		y: "100vh"
	}
}

const Offer = () => {
	return (
		// <AnimatePresence>
			<motion.div
				transition={{duration: 1}}
				style={{translateY: '-100vh'}}
			>
				<h1>Holi</h1>
			</motion.div>
		// </AnimatePresence>
	)
}

export default Offer