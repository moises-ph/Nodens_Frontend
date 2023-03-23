import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react'
import Backdrop from './Backdrop';





const variants = {
	hidden: {
		y: "100vh",
		opacity: 0,
	},
	visible: {
		y: "0",
		opacity: 0,
		transition:{
			duration:0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit:{
		y: "100vh",
		opacity: 0,
	},
};
const Offer = ({handleClose, text}: {handleClose: any, text: string}) => {
	return (
	<>		
		<Backdrop onClick={handleClose}>
			<motion.div
			onClick={(e) => e.stopPropagation()}
			className="modal oragnde-gradient"
			variants={variants}
			initial="hidden"
			animate="visible"
			exit="exit"
			>
				<p>{text}</p>
				<button onClick={handleClose}>Close</button>
			</motion.div>

		</Backdrop>

	</>
	)
}

export default Offer