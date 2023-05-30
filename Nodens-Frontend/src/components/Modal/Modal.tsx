import { useState } from 'react'
import {motion} from 'framer-motion'
import { MusicianT, OffersT } from '../../types'
import Offer from './Offer'
import { BiHeartCircle } from "react-icons/bi"
import { clientHttp } from '../../services/client'

const Modal = ({open, oferta, closeModal}:{open:boolean, oferta: OffersT | undefined, closeModal : any}) => {
	const variants = {
		open: {
			translateY: window.innerWidth > 768 ? '25.1%' : '17%'
		},
		closed : {
			translateY: window.innerWidth > 768 ? '33%' : '-100%'
		}
	}
	const [color, setColor] = useState("black");
	const change=(e: any)=>{
		setColor(e)
	}

  const postulateOffer = () => {
    const date = new Date()
    const postulationDate = `${date.getFullYear()}-${date.getMonth() < 9 ? '0'+(date.getMonth()+1): date.getMonth()+1}-${date.getDate()}`;
    clientHttp().put(`/offers/offers/${oferta?._id}`, {
      ApplicantId: localStorage.getItem('musicianId'),
      PostulationDate: postulationDate,
      PostulationFullName: `${localStorage.getItem('musicianName')}`
    })
      .then(res=> console.log(res))
      .catch(err => console.log(err))
  }
	
  return (
	<motion.div
		animate={open ? 'open' : 'closed'}
		variants={variants}
		className='md:h-[72%] sm:h-[90%] h-[79%] overflow-y-scroll md:left-[40%] z-30 p-4 pt-8 pb-2 fixed md:w-3/5 w-full bg-slate-100 rounded-lg  shadow-slate-300 shadow-inner rounded-t-xl'
		exit={{translateY: '120vh'}}
	>
		<Offer closeModal={closeModal} oferta={oferta}/>
			
		<div  className='flex mt-2 md:m-0 justify-center items-end w-full pr-16'>
				<button onClick={()=>postulateOffer()} className='fixed h-10 w-[10rem] rounded-2xl shadow-xl shadow-slate-400 flex items-center justify-center bg-blue-300 transition-all duration-200 '>Postularme</button>
				<div >
				<button><BiHeartCircle  onClick={(e)=>  change(color == 'black' ? 'red-500' : 'black')}  className={`text-4xl ml-[16rem] text-${color}  w-10  transition-all duration-200 rounded-full`}/></button>
				</div>
			</div>

			

	</motion.div>
  )
}

export default Modal
