import { useState } from 'react'
import { ProfileT } from '../../types';
import { motion } from 'framer-motion'
import { BiHeartCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const ModalProfile = ({open, profile, closeModal}:{open:boolean, profile: ProfileT | undefined, closeModal : any}) => {
	const variants = {
		open: {
			translateY: window.innerWidth > 768 ? '22.1%' : '100%'
		},
		closed : {
			translateY: window.innerWidth > 768 ? '33%' : '-100%'
		}
	}
	const [color, setColor] = useState("black");
	const change=(e: any)=>{
		setColor(e)
	}
	
  return (
    <motion.div
		animate={open ? 'open' : 'closed'}
		variants={variants}
		className='md:h-[82%] h-[50%] overflow-y-scroll md:left-[40%] p-4 pb-2 fixed md:w-3/5 w-full bg-slate-100 rounded-lg  shadow-slate-300 shadow-inner rounded-t-xl'
		exit={{translateY: '100vh'}}
	>
		<Profile closeModal={closeModal} profile={profile} />
			
		<div  className='flex mt-2 md:m-0 justify-center items-end w-full pr-16'>
				<Link to="" className='fixed h-10 w-[10rem] rounded-2xl shadow-xl shadow-slate-400 flex items-center justify-center bg-blue-300 transition-all duration-200 '>Postularme</Link>
				<div >
				<Link to="" className=''><BiHeartCircle  onClick={(e)=>  change(color == 'black' ? 'red-500' : 'black')}  className={`text-4xl ml-[16rem] text-${color}  w-10  transition-all duration-200 rounded-full`}/></Link>
				</div>
			</div>

			

	</motion.div>
  )
}

export default ModalProfile