import { useState } from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { OffersT } from '../../types'
import Offer from './Offer'
import { BiHeartCircle } from "react-icons/bi"

const variants = {
	open: {
		translateY: '22.1%'
	},
	closed : {
		translateY: '33%'
	}
}

const Modal = ({open, oferta, closeModal}:{open:boolean, oferta: OffersT | undefined, closeModal : any}) => {
const [color, setColor] = useState("black");
const change=(e: any)=>{
	setColor(e)
}
  return (
	<motion.div
		animate={open ? 'open' : 'closed'}
		variants={variants}
		className='h-[81%] overflow-y-scroll left-[40%] p-4 fixed w-3/5 bg-slate-100 rounded-lg  shadow-slate-300 shadow-inner rounded-t-xl'
		exit={{translateY: '100vh'}}
	>
		<Offer closeModal={closeModal} oferta={oferta}/>
			
		<div  className='flex justify-center items-end w-full pr-16'>
				<Link to="" className='fixed h-10 w-[10rem] rounded-2xl shadow-xl shadow-slate-400 flex items-center justify-center bg-blue-300 transition-all duration-200 '>Postularme</Link>
				<div >
				<Link to="" className=''><BiHeartCircle  onClick={(e)=>  change(color == 'black' ? 'red-500' : 'black')}  className={`text-4xl ml-[16rem] text-${color}  w-10  transition-all duration-200 rounded-full`}/></Link>
				</div>
			</div>

			

	</motion.div>
  )
}

export default Modal