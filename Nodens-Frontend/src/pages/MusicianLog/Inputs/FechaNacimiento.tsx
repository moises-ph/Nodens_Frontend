import { useRef } from 'react'

const FechaNacimiento = ({ handler }: { handler: (key: string, value: any) => void}) => {
	const fecha_nacimiento = useRef(null)
	return (
		<div className='bg-slate-200 h-2/4 border-solid border-2 border-slate-400 rounded-lg w-10/12 flex flex-col justify-center gap-8 px-2'>
			<label htmlFor='fecha_nacimiento' className='text-2xl h-2/4 flex flex-col gap-[20%]'>Fecha de nacimiento:
				<input type="date" name="fecha_nacimiento" ref={fecha_nacimiento} className='bg-transparent border-solid border-2 border-slate-400 rounded-md text-slate-700 font-medium'/>
			</label>
			<div>
				<button
					className='bg-green-200 p-2 border-solid border-[1px] border-green-600 rounded-md text-green-700'
					onClick={() => handler('fecha_nacimiento', fecha_nacimiento.current.value)}>Guardar</button>
			</div>
		</div>
	)
}

export default FechaNacimiento