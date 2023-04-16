import { useRef } from 'react'

const FechaNacimiento = ({ handler }: { handler: (key: string, value: any) => void}) => {
	const fecha_nacimiento = useRef<HTMLInputElement>(null)
	return (

		<div className='bg-slate-100 shadow-2xl h-2/4 border-solid border-1 rounded-lg w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600'>
			<label htmlFor='fecha_nacimiento' className='text-center text-2xl h-2/4 flex flex-col gap-[20%]'>Fecha de nacimiento
				<input type="date" name="fecha_nacimiento" ref={fecha_nacimiento} className='bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-600 font-medium'/>
			</label>
			<div className='flex justify-center'>
				<button
					className='px-4 bg-green-100 border-green-700 border-2 border-solid rounded-md text-green-700 h-8'
					onClick={() => handler('fecha_nacimiento', fecha_nacimiento.current.value)}>Guardar</button>

		<div className='h-2/4 rounded-lg w-10/12 flex flex-col justify-center gap-8 px-2 text-slate-600'>
			<label htmlFor='fecha_nacimiento' className='text-2xl h-2/4 flex flex-col gap-[20%]'>Fecha de nacimiento:
				<input type="date" name="fecha_nacimiento" ref={fecha_nacimiento} className='bg-transparent border-solid border-0 border-b-2 border-slate-400 text-slate-600 font-medium'/>
			</label>
			<div>
				<button className='px-4 bg-green-500 rounded-md text-green-900 h-8' onClick={() => handler('fecha_nacimiento', fecha_nacimiento.current!.value)}>Guardar</button>

			</div>
		</div>
		</div>
		</div>
	)
}

export default FechaNacimiento