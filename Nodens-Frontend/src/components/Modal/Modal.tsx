import { useState } from 'react'
import {motion} from 'framer-motion'
import { OffersT } from '../../types'
import Offer from './Offer'
import { BiHeartCircle } from "react-icons/bi"
import { clientHttp } from '../../services/client'
import Swal from 'sweetalert2'
import { AxiosError, AxiosResponse } from 'axios'
import { renewToken } from '../../services'

const Modal = ({open, oferta, closeModal}:{open:boolean, oferta: OffersT | undefined, closeModal : any}) => {
	const variants = {
		open: {
			translateY: window.innerWidth > 768 ? '28.1%' : '17%'
		},
		closed : {
			translateY: window.innerWidth > 768 ? '33%' : '-100%'
		}
	}
	const [color, setColor] = useState("black");
	const change=(e: any)=>{
		setColor(e)
	}
	const [isLoading, setLoadint] = useState<boolean>(false);

  const postulateOffer = async (e:any) => {
    const date = new Date()
    const postulationDate = `${date.getFullYear()}-${date.getMonth() < 9 ? '0'+(date.getMonth()+1): date.getMonth()+1}-${date.getDate() < 10 ? '0'+date.getDate() : date.getDate()}`;
    clientHttp().put(`/offers/offers/${oferta!._id}`, {
      ApplicantId: localStorage.getItem('musicianId'),
      PostulationDate: postulationDate,
      PostulationFullName: `${localStorage.getItem('musicianName')}`
    })
      .then((res : AxiosResponse<{message: string, emailOrganizer : Object}>)=> {
				setLoadint(false)
				Swal.fire({
					icon: 'success',
					text : res.data.message.includes('Postulado Correctamente') ? 'Te has postulado Correctamente' : 'XD?'
				})
	  	})
      .catch(async (err : AxiosError) => {
				console.error(err)
				if(err.response?.status === 401){
					await renewToken();
					postulateOffer(e);
				} else if (err.response?.status === 500 ) {
					setLoadint(false);
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: err.response.data.message,
						timer: 2000
					})
				}
	  })
  }
	
  return (
	<motion.div
		animate={open ? 'open' : 'closed'}
		variants={variants}
		className='md:h-[72%] sm:h-[90%] h-[79%] overflow-y-scroll md:left-[40%] z-30  md:pt-8 md:pb-2 fixed md:w-3/5 w-full bg-slate-100 rounded-lg  shadow-slate-300 shadow-inner rounded-t-xl'
		exit={{translateY: '120vh'}}
	>
		<Offer closeModal={closeModal} oferta={oferta}/>
			
		<div  className='flex mt-2 md:m-0 justify-center items-end w-full pr-16'>
				<button onClick={(e)=>{setLoadint(true);postulateOffer(e)}} className='fixed h-10 w-[10rem] hover:scale-105 rounded-2xl shadow-xl shadow-slate-400 flex items-center justify-center bg-blue-300 transition-all duration-200 '>Postularme</button>
				<div >
				<button><BiHeartCircle  onClick={(e)=>  change(color == 'black' ? 'red-500' : 'black')}  className={`text-4xl ml-[16rem] text-${color}  w-10  transition-all duration-200 rounded-full`}/></button>
				</div>
			</div>

		{isLoading && 
			<>
				<div className={`absolute top-[1.25rem]  w-full h-full bg-gray-500 bg-opacity-30 flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>	
			</>
		}
		

			

	</motion.div>
  )
}

export default Modal
