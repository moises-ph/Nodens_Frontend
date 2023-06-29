import { useRef, useState } from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { GrFormClose } from "react-icons/gr";
import { ImCancelCircle } from "react-icons/im";
import { IoIosAddCircleOutline, IoMdAdd } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { InstrumentoT, OrganizerT } from "../../types"
import { AiOutlineArrowLeft } from "react-icons/ai";

interface EditUser {
  organizer: OrganizerT,
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
  editProfileMode: boolean,
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>
}

const EditOrganizer = ({organizer, handleSubmit, editProfileMode, setEditMode}: EditUser) => {
  const SocialMediaName = useRef<HTMLSelectElement>(null);
  const SocialMediaUrl = useRef<HTMLInputElement>(null);
  const EnterpriseName = useRef<HTMLSelectElement>(null);
  const EnterpriseDescription = useRef<HTMLSelectElement>(null);
  const [socialMedias, setSocials] = useState<{nombre:string, url: string}[]>([]);
  const [addingSocial, setAddingSocial] = useState<boolean>(false);

  const SocialMedias : any = {
    instagram : <BsInstagram className="h-10 w-10 text-slate-50 bg-gradient-to-tr via-pink-600 from-indigo-600 to-amber-500 rounded-xl drop-shadow"/>,
    facebook : <BsFacebook className="h-10 w-10 text-blue-600 drop-shadow"/>,
    tiktok : <FaTiktok className="h-10 w-10 drop-shadow"/>,
    twitter : <BsTwitter className="h-10 w-10 text-blue-500 drop-shadow"/>,
    linkedin : <BsLinkedin className="h-10 w-10 text-blue-700 drop-shadow"/>,
    snapchat : <BsSnapchat className="h-10 w-10 text-yellow-400 drop-shadow"/>,
    youtube : <BsYoutube className="h-10 w-10 text-red-700 drop-shadow"/>,
    whatsapp : <BsWhatsapp className="h-10 w-10 text-green-600 drop-shadow" />
  }

  const deleteSocial = (e : any) => {
    e.preventDefault();+
    setSocials(lastSocials => lastSocials.filter((social,i) => i != e.target.parentNode.value))
  }

  const addSocialMedia = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSocials([... socialMedias, {nombre : SocialMediaName.current!.value, url : SocialMediaUrl.current!.value}]);
    setAddingSocial(false);
  }


  const cancelProfileEdition = (e : any) => {
    e.preventDefault();
    setSocials(organizer!.redes_sociales);
    setEditMode(false);
  }
 
  if(!editProfileMode) return <></>
  return (
    <>
          <section className="fixed z-[100] top-0 left-0 backdrop-blur-sm bg-[rgba(36,44,71,0.68)] flex justify-center  h-full overflow-y-scroll w-full pt-12">
          <button className="absolute top-0 right-0 h-20 w-20 p-8 text-2xl text-slate-100 left-0 z-[10000]" onClick={cancelProfileEdition}><AiOutlineArrowLeft /></button>
            <form onSubmit={handleSubmit} className='slide-top h-fit bg-slate-50  w-full md:w-2/5 gap-6 rounded-lg flex flex-col text-start items-center py-4'>
              <h2 className='text-xl my-2 text-slate-800  text-start pl-4 w-full border-b pb-2 border-slate-300'>Edita tu información Personal</h2>
                <div className='flex flex-col w-[90%]'>
                    <label className='text-slate-700 font-light ' htmlFor='name'>Nombre *</label>
                    <input placeholder={organizer?.Name} className='rounded text-sm p-1 border border-slate-600' id='name' type='text' name='Name'/>
                </div>
                <div className='flex flex-col w-[90%]'>
                    <label className='text-slate-700 font-light' htmlFor='lastname'>Apellido *</label>
                    <input placeholder={organizer?.Lastname} className='rounded text-sm p-1 border border-slate-600' id='lastname' type='text' name='Lastname'/>
                </div>
                <div className='flex flex-col w-[90%]'>
                    <label className='text-slate-700 font-light' htmlFor='phone'>Telefono *</label>
                    <input placeholder={organizer?.telefono as string} className='rounded text-sm p-1 border border-slate-600' id='phone' type='number' name='telefono'/>
                </div>
                <div className='flex flex-col w-[90%]'>
                    <label className='text-slate-700 font-light' htmlFor='city'>Ciudad *</label>
                    <input placeholder={organizer?.ciudad} className='rounded text-sm p-1 border border-slate-600' id='city' type='text' name='ciudad'/>
                </div>

              <div className="flex flex-col w-full border-b items-center border-slate-300 pb-4 gap-4">
                <div className='flex flex-col w-[90%]'>
                  <label className='text-slate-700 font-light' htmlFor='nombre_empresa'>Nombre de la Empresa *</label>
                  <input placeholder={organizer?.nombre_empresa} className='rounded text-sm p-1 border border-slate-600' id='nombre_empresa' type='text' name='nombre_empresa'/>
                </div>
                <div className='flex flex-col w-[90%]'>
                  <label className='text-slate-700 font-light' htmlFor='descripcion_empresa'>Descripcion de la Empresa *</label>
                  <input placeholder={organizer?.descripcion_empresa} className='rounded text-sm p-1 border border-slate-600' id='descripcion_empresa' type='text' name='descripcion_empresa'/>
                </div>
              </div>

              <div className="flex flex-col w-full border-b items-center border-slate-300 pb-4 gap-4">
                <div className='flex flex-col w-[90%] gap-4'>
                    <label className='text-slate-700 font-light' htmlFor='birthdate'>Fecha de nacimiento *</label>
                    <input defaultValue={organizer!.fecha_nacimiento.toString()} className='rounded text-sm p-1 border border-slate-600' id='birthdate' type='date' name='fecha_nacimiento'/>
                </div>
                <div className='flex flex-col w-[90%] gap-4'>
                    <label className='text-slate-700 font-light' htmlFor='gender'>Genero *</label>
                    <select name="genero" className='rounded text-sm p-1 border border-slate-600' id='gender'>
                        <option selected={organizer?.genero.toLowerCase() === "mujer"} value="Mujer">Mujer</option>
                        <option selected={organizer?.genero.toLowerCase() === "hombre"} value="Hombre">Hombre</option>
                        <option selected={organizer?.genero.toLowerCase() === "otro"} value="Otro">Otro</option>
                    </select>
                </div>
              </div>
              <div className='flex flex-col w-full border-b items-center border-slate-300 pb-4 gap-4'>
                  <div className="flex flex-col items-center w-[90%] gap-4">
                    <span className='text-slate-700 font-light'>Redes Sociales</span>
                    <button className="h-1/2 w-1/2 flex justify-center rounded-full hover:scale-110 transition" onClick={(e) => {e.preventDefault(); setAddingSocial(!addingSocial)}}>{addingSocial ?  <ImCancelCircle className="text-red-600 text-3xl" /> : <IoIosAddCircleOutline className="text-4xl text-blue-500" />}</button>
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
                    <div className="flex flex-col items-center w-full px-2 gap-2">
                    <div className="flex flex-col w-[93%] gap-4">
                      <label className="text-slate-700 font-light" htmlFor="socialname">Nombre de la Red Social *</label>
                      <select defaultValue={""} ref={SocialMediaName} className='rounded text-sm p-1 border border-slate-600' id="socialname">
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
                    <div className="flex flex-col w-[93%] gap-4">
                      <label className="text-slate-700 font-light" htmlFor="socialurl">Url de la Red Social *</label>
                      <input ref={SocialMediaUrl} className='rounded text-sm p-1 border border-slate-600' id="socialurl" placeholder="Ingresa el link de la red Social" type="url"  />
                    </div>
                    <button className="text-blue-500 font-bold justify-center flex items-center" onClick={addSocialMedia}><IoMdAdd />Añadir</button>
                  </div>
                  }
              </div>
              <div className="flex px-4 justify-end gap-4 w-full">
                <button onClick={cancelProfileEdition} type="button" className="p-2 flex items-center justify-center gap-3 bg-red-600 text-slate-100 font-semibold rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition ">Cancelar </button>
                <input type="submit" className="p-2 bg-blue-500 text-slate-100 font-semibold rounded-xl shadow-xl hover:drop-shadow-xl hover:scale-105 transition " value='Actualizar'/>
              </div>
          </form>
         
      </section>

    </>
  )
}

export default EditOrganizer
