import { useRef } from 'react'
import Swal from 'sweetalert2'

const FechaNacimiento = ({ handler }: { handler: (key: string, value: any) => void}) => {
	const fecha_nacimiento = useRef<HTMLInputElement>(null)
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
	return (
		<div className='h-2/4 rounded-lg w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600 shadow-lg'>
			<label htmlFor='fecha_nacimiento' className='text-2xl h-2/4 flex flex-col gap-[20%]'>Fecha de nacimiento:
				<input type="date" name="fecha_nacimiento" ref={fecha_nacimiento} className='bg-transparent border-solid border-0 border-b-2 border-slate-400 text-slate-600 font-medium'/>
			</label>
			<div>
				<button className='px-4 bg-green-500 rounded-md text-green-900 h-8' onClick={() => checking()}>Guardar</button>
			</div>
		</div>
	)
}

export default FechaNacimiento