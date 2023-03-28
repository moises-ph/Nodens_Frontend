import { useRef } from 'react'

const FechaNacimiento = ({handler}: {handler: (key:string, value: any)=> void}) => {
	const fecha_nacimiento = useRef(null)
	return (
		<>
			<label htmlFor='fecha_nacimiento'>fecha de nacimiento:
				<input type="date" name="fecha_nacimiento" ref={fecha_nacimiento} />
			</label>
			<button onClick={() => handler('fecha_nacimiento', fecha_nacimiento.current.value)}>Guardar</button>
		</>
	)
}

export default FechaNacimiento