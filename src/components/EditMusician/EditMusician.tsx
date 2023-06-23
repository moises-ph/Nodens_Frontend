import { useRef, useState } from "react";
import { InstrumentoT, MusicianT } from "../../types"

interface EditUser {
  user: MusicianT,
  handleSubmit: ()=> void
}

const EditMusician = ({user, handleSubmit}: EditUser) => {
const descripcion = useRef<HTMLTextAreaElement>(null);
  const GeneroRef = useRef<HTMLInputElement>(null);
  const nivelGenRef = useRef<HTMLSelectElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const instrumentRef = useRef<HTMLInputElement>(null);
  const nivelRef = useRef<HTMLSelectElement>(null);
  const [instrumentos, setInstrumentos] =useState<InstrumentoT[]>([]);
  const [generos, setGeneros] =useState<string[]>([]);

  return (
    <>
          <section className="md:w-3/5 w-full min-h-screen md:pt-8 pt-4 flex justify-center overflow-scroll place-self-end ml-[40%]">
            <form onSubmit={handleSubmit} className='slide-top h-fit bg-transparent p-2 w-5/6 md:w-3/4 gap-3 rounded flex flex-col text-start items-center'>
              <h2 className='text-3xl my-2 text-slate-50 font-semibold text-center'>Edita tu información Personal</h2>
              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-zinc-900 p-4 rounded-lg">
                <div className='flex flex-col w-full'>
                    <label className='text-slate-100 font-semibold ' htmlFor='name'>Nombre</label>
                    <input placeholder={user?.Name} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='name' type='text' name='Name'/>
                </div>
                <div className='flex flex-col w-full'>
                    <label className='text-slate-100 font-semibold ' htmlFor='lastname'>Apellido</label>
                    <input placeholder={user?.Lastname} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='lastname' type='text' name='Lastname'/>
                </div>
              </div>
              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-zinc-900 p-4 rounded-lg">
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='phone'>Telefono</label>
                    <input placeholder={user?.telefono as string} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='phone' type='number' name='telefono'/>
                </div>
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='city'>Ciudad</label>
                    <input placeholder={user?.ciudad} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='city' type='text' name='ciudad'/>
                </div>
              </div>
              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-zinc-900 p-4 rounded-lg">
                <div className="w-full flex flex-col gap-2">
                  <label className='text-slate-100 font-semibold ' htmlFor='phone'>Instrumentos</label>
                  <div className="w-full flex flex-col gap-2">
                    {
                      instrumentos.map((ins, i)=> {
                        return <span className="w-full flex justify-between items-center bg-blue-400 rounded-s rounded-md" key={i}>{ins.nombre} <GrFormClose onClick={(e : any)=>deleteInstrument(e, i)}/> </span>
                      })
                    }
                  </div>
                  <input ref={instrumentRef} placeholder="Instrumento" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' type='text'/>
                  <select ref={nivelRef} placeholder="Nivel" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1'>
                    <optgroup>
                      <option value="" >Nivel de Experiencia</option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="Mas de 1 año">Mas de 1 año</option>
                      <option value="Mas de 2 años">Mas de 2 años</option>
                      <option value="Mas de 5 años">Mas de 5 años</option>
                    </optgroup>
                  </select>
                  <button className="text-[#E15D12] font-bold" onClick={(e)=>addInstrument(e)}>Añadir</button>
                </div>  
              </div>

               <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-zinc-900 p-4 rounded-lg">
                <div className="w-full flex flex-col gap-2">
                  <label className='text-slate-100 font-semibold ' htmlFor='phone'>Generos Musicales</label>
                  <div className="w-full flex flex-col gap-2">
                    {
                      generos.map((gen, i)=> {
                        return <span className="w-full flex justify-between items-center bg-blue-400 rounded-s rounded-md" key={i}>{gen} <GrFormClose onClick={(e)=>deleteGen(e, i)}/> </span>
                      })
                    }
                  </div>
                  <input ref={GeneroRef} placeholder="Genero" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' type='text'/>
                  <select ref={nivelGenRef} placeholder="Nivel" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1'>
                    <optgroup>
                      <option value="" >Nivel de Experiencia</option>
                      <option value="Menos de 1 año">Menos de 1 año</option>
                      <option value="Mas de 1 año">Mas de 1 año</option>
                      <option value="Mas de 2 años">Mas de 2 años</option>
                      <option value="Mas de 5 años">Mas de 5 años</option>
                    </optgroup>
                  </select>
                  <button className="text-[#E15D12] font-bold" onClick={(e)=>addGen(e)}>Añadir</button>
                </div>  
              </div>


              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-zinc-900 p-4 rounded-lg">
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='phone'>Experiencia</label>
                    <select placeholder={user?.experiencia as string} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='experiencia'name='experiencia'>
                      <optgroup>
                        <option value=""></option>
                        <option value="Sin Experiencia">Sin Experiencia</option>
                        <option value="Menos de 1 año">Menos de 1 año</option>
                        <option value="Mas de 1 año">Mas de 1 año</option>
                        <option value="Mas de 2 años">Mas de 2 años</option>
                        <option value="Mas de 3 años">Mas de 3 años</option>
                        <option value="Mas de 5 años">Mas de 5 años</option>
                        <option value="Mas de 7 años">Mas de 7 años</option>
                        <option value="Mas de 10 años">Mas de 10 años</option>
                      </optgroup>
                    </select>
                </div>
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='descripcion'>Descripcion</label>
                    <textarea placeholder={user?.descripcion} ref={descripcion} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='descripcion' name='experiencia'/>
                </div>
              </div>
              
              <div className="w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-zinc-900 p-4 rounded-lg">
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='birthdate'>Fecha de nacimiento</label>
                    <input defaultValue={user!.fecha_nacimiento.toString()} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='birthdate' type='date' name='fecha_nacimiento'/>
                </div>
                <div className='w-full flex flex-col'>
                    <label className='text-slate-100 font-semibold ' htmlFor='gender'>Genero</label>
                    <select name="genero" className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id='gender'>
                        <option selected={user?.genero.toLowerCase() === "mujer"} value="Mujer">Mujer</option>
                        <option selected={user?.genero.toLowerCase() === "hombre"} value="Hombre">Hombre</option>
                        <option selected={user?.genero.toLowerCase() === "otro"} value="Otro">Otro</option>
                    </select>
                </div>
              </div>
              <div className='w-5/6 shadow hover:drop-shadow-2xl transition md:w-2/3 flex flex-col items-center bg-zinc-900 p-4 rounded-lg'>
                  <div className="flex items-center justify-center w-fit gap-1">
                    <span className='text-slate-100 font-semibold'>Redes Sociales</span>
                    <button className="h-3 w-3 rounded-full hover:scale-110 transition" onClick={(e) => {e.preventDefault(); setAddingSocial(!addingSocial)}}>{addingSocial ?  <ImCancelCircle className="text-red-600" /> : <IoIosAddCircleOutline className="text-white" />}</button>
                  </div>
                  <div className="flex justify-evenly content-start p-2 flex-wrap gap-3 max-w-full">
                  {
                      socialMedias.map((element :{nombre:string, url: string} | null , index : number)=>
                      <div className='w-24 flex flex-col gap-1 items-center justify-center p-2 bg-blue-200 rounded shadow-xl ' key={index}>
                          <button className='flex flex-col items-center hover:scale-110 transition'>{SocialMedias[element?.nombre.toLocaleLowerCase() as string]} <span>{element?.nombre}</span></button>
                          <button onClick={deleteSocial} value={index} className='hover:scale-110 transition hover:text-white hover:bg-red-500 rounded-full w-5 h-5 flex justify-center items-center bg-transparent text-red-500'><RiDeleteBinLine /></button>
                      </div>)
                  }
                  </div>
                  {
                    addingSocial &&
                    <div className="flex flex-col items-center p-4 w-full gap-2">
                    <div className="w-full flex flex-col">
                      <label className="text-slate-100 font-semibold" htmlFor="socialname">Nombre de la Red Social</label>
                      <select defaultValue={""} ref={SocialMediaName} className='rounded shadow hover:drop-shadow-lg transition text-sm p-1' id="socialname">
                        <option selected>Selecciona una</option>
                        <option value="instagram">Instagram</option>
                        <option value="facebook">Facebook</option>
                        <option value="youtube">Youtube</option>
                        <option value="linkedin">Linkedin</option>
                        <option value="snapchat">Snapchat</option>
                        <option value="tiktok">Tiktok</option>
                        <option value="twitter">Twitter</option>
                        <option value="whatsapp">Whatsapp</option>
                      </select>
                    </div>
                    <div className="w-full">
                      <label className="text-slate-100 font-semibold" htmlFor="socialurl">Url de la Red Social</label>
                      <input ref={SocialMediaUrl} className='w-full rounded shadow hover:drop-shadow-lg transition text-sm p-1' id="socialurl" placeholder="Ingresa el link de la red Social" type="url"  />
                    </div>
                    <button className="p-2 bg-blue-600 text-slate-100 font-semibold rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition " onClick={addSocialMedia}>Añadir</button>
                  </div>
                  }
              </div>
              <input type="submit" className="p-4 bg-[#E15D12] text-slate-100 font-semibold rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition " value='Actualizar Perfil'/>
              <button onClick={cancelProfileEdition} type="button" className="p-4 flex items-center justify-center gap-3 bg-red-600 text-slate-100 font-semibold rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition ">Cancelar <ImCancelCircle className="w-5 h-5" /></button>
          </form>
         
          </section>

    </>
  )
}

export default EditMusician
