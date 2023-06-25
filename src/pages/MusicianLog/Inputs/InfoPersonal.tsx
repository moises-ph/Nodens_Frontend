import React, { useRef, useState } from 'react'
import CloudinaryWidget from '../../../components/CloudinarySnipet/CloudinaryWidget';
import RegisterInfo from '../../../images/RegisterInfo.webp';
import { MusicianT } from '../../../types';
import { useEffect } from 'react';

function InfoPersonal({handlerInfo, alreadyMusician } : { handlerInfo : (name : string, lastname : string, description : string, genero : string, pais : string, ciudad : string, foto_perfil : string, telefono : string, fecha_nacimiento : string) => void, alreadyMusician : MusicianT }) {
  const [isValue, setIsValue] = useState<boolean>(false);
  const fecha_nacimiento = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);
  const Lastname = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const genero = useRef<HTMLSelectElement>(null);
  const pais = useRef<HTMLSelectElement>(null);
  const ciudad = useRef<HTMLSelectElement>(null);
  const telefono = useRef<HTMLInputElement>(null);

  const [foto, setFoto] = useState<string>('https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png');

  const paises = [
    'Colombia',
  ];

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handlerInfo(name.current!.value, Lastname.current!.value, description.current!.value, genero.current!.value, pais.current!.value, ciudad.current!.value, foto, telefono.current!.value, fecha_nacimiento.current!.value);
  }

  useEffect(() => {
    name.current!.value  = alreadyMusician.Name.length > 0 ? alreadyMusician.Name : "" ;
    Lastname.current!.value  = alreadyMusician.Lastname.length > 0 ? alreadyMusician.Lastname : "" ;
    description.current!.value  = alreadyMusician.descripcion.length > 0 ? alreadyMusician.descripcion : "" ;
    genero.current!.value  = alreadyMusician.genero.length > 0 ? alreadyMusician.genero : "" ;
    pais.current!.value  = alreadyMusician.pais.length > 0 ? alreadyMusician.pais : "" ;
    ciudad.current!.value  = alreadyMusician.ciudad.length > 0 ? alreadyMusician.ciudad : "" ;
    telefono.current!.value = alreadyMusician.telefono.length > 0 ? alreadyMusician.telefono[0] : "";
    setFoto(alreadyMusician.url_foto_perfil.length > 0 ? alreadyMusician.url_foto_perfil : foto);
    if(alreadyMusician.fecha_nacimiento.length > 0) fecha_nacimiento.current!.value = new Date(alreadyMusician.fecha_nacimiento).toISOString().slice(0,10);
  },[])

  return (
    <div className='bg-white transition-all bg-opacity-100 md:h-full rounded-lg w-full lg:w-10/12 flex flex-col md:flex-row items-center gap-8 py-10 md:py-16 px-24 text-black/90 shadow-xl'>
      <form onSubmit={handleSubmit} className='lg:w-1/2 w-full flex flex-col gap-5'>
        <h1 className='text-3xl'>Hablemos de ti...</h1>
        <div className='flex w-fit gap-4'>
          <div className="flex flex-col gap-1 w-fit">
            <label htmlFor='genero' className='flex flex-col text-lg gap-3'>Cual es tu nombre?</label>
            <div className='flex md:flex-row flex-col gap-4 h-fit'>
              <input required type="text" name="telefono" placeholder='Nombre' ref={name} onChange={() => setIsValue(name.current!.value.length > 3 && Lastname.current!.value.length > 3)} className='min-w-36 w-fit bg-transparent border-solid border-b-2 border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
              <input required type="text" name="telefono" placeholder='Apelllido' ref={Lastname} onChange={() => setIsValue(name.current!.value.length > 3 && Lastname.current!.value.length > 3)} className='bg-transparent border-solid border-b-2 min-w-36 w-fit border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className="flex flex-col gap-1 justify-between">
            <label htmlFor='genero' className='flex flex-col text-lg gap-3'>Sube una imagen tuya</label>
            <div className='flex items-center gap-3'>
              <CloudinaryWidget className='bg-orange-400 rounded-2xl w-fit px-3' sendInfo={setFoto} />
              <img src={foto} width='70' className='rounded object-cover'/>
            </div>
          </div>
          <div className='flex flex-col text-2xl h-2/4 gap-[20%]'>
            <label className='text-lg'>Telefono</label>
            <input type="number" placeholder='Tu telefono va aquí' name="telefono" ref={telefono} className='min-w-36 w-fit bg-transparent border-solid border-b-2 border-slate-300 text-black/70 text-xl placeholder:text-base placeholder:italic font-thin outline-none focus:border-slate-500'/>
          </div>
        </div>
        <div className='flex gap-10'>
          <div className='flex gap-1 flex-col'>
            <label htmlFor='fecha_nacimiento' className='text-lg'>Fecha de tu nacimiento</label>
            <input required type="date" onChange={() => setIsValue(fecha_nacimiento.current!.value ? true : false)} name="fecha_nacimiento" ref={fecha_nacimiento} className='h-7 bg-transparent border-solid border-0 border-b-2 border-slate-400 text-black/70 font-thin'/>
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor='genero' className='text-lg'>Genero</label>
            <select required name="" id="" ref={genero} className='bg-slate-100 bg-opacity-20 h-7 w-fit border-solid border-b-2 border-slate-300 text-black/70 font-thin outline-none'>
              <optgroup className='backdrop-blur-md rounded-none'>
                <option className='selection:bg-orange-500' value="" selected>Selecciona...</option>
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
          <textarea required name="telefono" ref={description} placeholder='Describete aquí...' className='bg-transparent placeholder:font-thin placeholder:italic w-1/3 min-w-[336px] border-solid border-b-2 border-slate-300 text-black/70 font-thin outline-none focus:border-slate-500'/>
        </div>
        <div className='flex gap-10'>
          <div className='flex flex-col'>
            <label htmlFor="pais" className='text-lg'>Pais:</label>
            <select required name="" id="" ref={pais} className="bg-slate-100 font-thin bg-opacity-20 h-7 w-fit border-solid border-b-2 border-slate-300 text-black/70 outline-none">
              <optgroup className="backdrop-blur-md rounded-none">
                <option className='font-thin' value="" selected>Selecciona...</option>
                {paises.map((p, i) => {
                  return (
                    <option className='font-thin' value={p} key={i}>{p}</option>
                  );
                })}
              </optgroup>
            </select>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="Ciudad" className='text-lg'>Ciudad</label>
            <select required name="" id="" ref={ciudad} className="bg-slate-100 bg-opacity-20 font-thin h-7 w-fit border-solid border-b-2 border-slate-300 text-black/70 outline-none">
                <optgroup className='backdrop-blur-md'>
                  <option className='font-thin' value="" selected>Selecciona...</option>
                  <option className='font-thin' value="Arauca">Arauca</option>
                  <option className='font-thin' value="Armenia">Armenia</option>
                  <option className='font-thin' value="Barranquilla">Barranquilla</option>
                  <option className='font-thin' value="Bogotá">Bogotá</option>
                  <option className='font-thin' value="Bucaramanga">Bucaramanga</option>
                  <option className='font-thin' value="Cali">Cali</option>
                  <option className='font-thin' value="Cartagena">Cartagena</option>
                  <option className='font-thin' value="Cúcuta">Cúcuta</option>
                  <option className='font-thin' value="Florencia">Florencia</option>
                  <option className='font-thin' value="Ibagué">Ibagué</option>
                  <option className='font-thin' value="Leticia">Leticia</option>
                  <option className='font-thin' value="Manizales">Manizales</option>
                  <option className='font-thin' value="Medellín">Medellín</option>
                  <option className='font-thin' value="Mitú">Mitú</option>
                  <option className='font-thin' value="Mocoa">Mocoa</option>
                  <option className='font-thin' value="Montería">Montería</option>
                  <option className='font-thin' value="Neiva">Neiva</option>
                  <option className='font-thin' value="Pasto">Pasto</option>
                  <option className='font-thin' value="Pereira">Pereira</option>
                  <option className='font-thin' value="Popayán">Popayán</option>
                  <option className='font-thin' value="Puerto Carreño">Puerto Carreño</option>
                  <option className='font-thin' value="Puerto Inírida">Puerto Inírida</option>
                  <option className='font-thin' value="Quibdó">Quibdó</option>
                  <option className='font-thin' value="Riohacha">Riohacha</option>
                  <option className='font-thin' value="San Andrés">San Andrés</option>
                  <option className='font-thin' value="San José del Guaviare">San José del Guaviare</option>
                  <option className='font-thin' value="Santa Marta">Santa Marta</option>
                  <option className='font-thin' value="Sincelejo">Sincelejo</option>
                  <option className='font-thin' value="Tunja">Tunja</option>
                  <option className='font-thin' value="Valledupar">Valledupar</option>
                  <option className='font-thin' value="Villavicencio">Villavicencio</option>
                  <option className='font-thin' value="Yopal">Yopal</option>
                </optgroup>
              </select>
          </div>
        </div>
        <button className='bg-orange-500 w-fit self-center px-4 py-1 rounded-lg text-white/80 hover:scale-105 transition'>Listo</button>
      </form>
      <img src={RegisterInfo} className='md:block hidden md:w-2/4' />
    </div>
  )
}

export default InfoPersonal