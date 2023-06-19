import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Cell, Pc } from "./views";

const Registro = () => {
  const [loading, setLoading] = useState<boolean>();
  const [Rol, setRol] = useState<"Musician" | "Organizer">();
  const MySwal = withReactContent(Swal)
  const navigation = useNavigate()

  const redirectLogin = ():void => {
    window.setTimeout(()=>{
      navigation("/login", {replace:true});
      window.clearTimeout(1);
    }, 1000)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form: FormData = new FormData(e.target);
    const object = Object.fromEntries(form)
    const data = {...object, rol: Rol};
    console.log(object);
    
    let timerInterval: number
    Swal.fire({
      title: 'Registrando.',
      html: 'Te estamos registrando, danos un momento :).',
      timer: 100000,
      timerProgressBar: true,
      didOpen: () => {
         Swal.showLoading()
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result:any) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
    
    axios.post("https://nodensgapi.azure-api.net/auth/api/user/Register", data)
      .then(res=>{
        setLoading(false)
        console.log(res);
        MySwal.fire({
        position: 'top',
        icon: 'success',
        title: 'Usuario Registrado',
        showConfirmButton: false,
        timer: 1500
      }); redirectLogin()})
      .catch(err=>{console.log(err)
        setLoading(false)
        if(err.response.status === 400){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos invalidos o el correo ya existe...',
          timer: 3000  
        
      })
    }
      else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Datos invalidos ',
          timer: 3000  
        
      })
      }
    });
  };
  

  return  (
    <main className='h-screen flex flex-col items-center text-slate-100 gap-4'>    
      {window.innerWidth > 768 ? <Pc handleSubmit={handleSubmit} setLoading={setLoading} setRol={setRol}/> : <Cell handleSubmit={handleSubmit} setLoading={setLoading} setRol={setRol}/>} 
      {loading && <div className={`absolute right-4 top-[4.25rem] md:top-[4.75rem] flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>}
    </main>
  );
};

export default Registro;

