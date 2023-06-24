import { useRef, useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import { MusicianT } from '../../../types';

const FechaNacimiento = ({ handler, actualMusician }: { handler: (key: string, value: any) => void, actualMusician : any}) => {
	const fecha_nacimiento = useRef<HTMLInputElement>(null)
	const [isValue, setIsValue] = useState<boolean>(false);
	const checking = () => {
		if(!fecha_nacimiento.current!.value) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Por favor ingresa tu fecha de nacimiento',
				timer: 2000  
			})
		} else {
			handler("fecha_nacimiento", fecha_nacimiento.current!.value)
		}
	}

	useEffect(() => {
		if(actualMusician.fecha_nacimiento != "") {
			fecha_nacimiento.current!.value = actualMusician.fecha_nacimiento;
			setIsValue(true);
		}
	},[])

	return (
		<div className='bg-white transition-all bg-opacity-100 h-full rounded-lg w-10/12 flex flex-col justify-center gap-8 py-10 px-24 text-black/90 shadow-xl'>
			<label htmlFor='fecha_nacimiento' className='text-2xl h-2/4 flex flex-col gap-[20%]'>Fecha de nacimiento:
				<input type="date" onChange={() => setIsValue(true)} name="fecha_nacimiento" ref={fecha_nacimiento} className='bg-transparent md:w-1/3 border-solid border-0 border-b-2 border-slate-400 text-black/70 font-thin'/>
			</label>
			<div className='flex flex-row gap-4'>
				<button className='px-4 bg-blue-700 disabled:bg-blue-400 rounded-md text-slate-100 h-8' disabled={!isValue} onClick={() => checking()}>Guardar</button>
			</div>
		</div>
	)
}

export default FechaNacimiento
