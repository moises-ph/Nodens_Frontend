import CloudinaryWidget from '../../../components/CloudinarySnipet/CloudinaryWidget';
import Lastname from './Lastname';

function InfoMusical({goBack} : {goBack : () => void}) {

  return (
    <div className='bg-white transition-all bg-opacity-100 md:h-full rounded-lg w-screen md:w-10/12 flex flex-col md:flex-row items-center gap-8 py-10 px-24 text-black/90 shadow-xl'>
      <form className='md:w-1/2 flex flex-col gap-8'>
        <h1 className='text-3xl'>Ahora hablemos de tu talento</h1>
        <div className='flex w-fit gap-4'>
          <div className="flex flex-col gap-1 w-fit">
            <label htmlFor='genero' className='flex flex-col text-lg gap-3'>Cual es tu nombre?</label>
            <div className='flex md:flex-row flex-col gap-4 h-fit'>
              <input required type="text" name="telefono" placeholder='Nombre' className='min-w-36 w-fit bg-transparent border-solid border-b-2 border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
              <input required type="text" name="telefono" placeholder='Apelllido' className='bg-transparent border-solid border-b-2 min-w-36 w-fit border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
            </div>
          </div>
        </div>
        <div className='flex gap-10'>
          <div className='flex gap-1 flex-col'>
            <label htmlFor='fecha_nacimiento' className='text-lg'>Fecha de tu nacimiento</label>
            <input required type="date" name="fecha_nacimiento" className='h-7 bg-transparent border-solid border-0 border-b-2 border-slate-400 text-black/70 font-thin'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='genero' className='text-lg'>Genero</label>
            <select required name="" id="" className='bg-slate-100 bg-opacity-20 h-7 w-fit border-solid border-b-2 border-slate-300 text-black/70 font-medium outline-none'>
              <optgroup className='backdrop-blur-md rounded-none'>
                <option className='selection:bg-orange-500' value="Masculino">Masculino</option>
                <option className='selection:bg-orange-500' value="Femenino">Femenino</option>
                <option className='selection:bg-orange-500' value="Helicoptero Apache">Helicoptero Apache</option>
                <option className='selection:bg-orange-500' value="Otro">Otro</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='genero' className='flex flex-col text-lg'>Danos una breve descripción de ti</label>
          <textarea required name="telefono" className='bg-transparent w-1/3 min-w-[336px] border-solid border-b-2 border-slate-300 text-black/70 font-medium outline-none focus:border-slate-500'/>
        </div>
        <button className='bg-orange-500 w-fit self-center px-4 py-1 rounded-lg text-white/80 hover:scale-105 transition'>Listo</button>
        <button onClick={(e) =>{ e.preventDefault(); goBack() }} className='bg-blue-500 w-fit self-center px-4 py-1 rounded-lg text-white/80 hover:scale-105 transition'>Ir atrás</button>
      </form>
      
    </div>
  )
}

export default InfoMusical