import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Link, useNavigate } from "react-router-dom";
import {changeAppRouter} from "../../store/RouterSlice"
import Swal from 'sweetalert2'
import { AiOutlineArrowLeft, AiOutlineUser } from "react-icons/ai"
import { BsFillKeyFill, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { clientHttp } from "../../services/client";
import { Logo } from "../../components";
import { FiMail } from "react-icons/fi";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const redirectApp = () : void =>{
    window.setTimeout(()=>{
      dispatch(changeAppRouter())
      navigate("/", {replace:true})
      window.clearTimeout(1);
    }, 1000)
  } 

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const form: FormData = new FormData(e.target);
    const data = Object.fromEntries(form);
    console.log(data);
      
    let timerInterval: number
    Swal.fire({
      title: 'Iniciando sesión.',
      html: 'Iniciando sesión, danos un momento :).',
      background: "#C3EEFF",
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
    
    clientHttp().post('https://nodensgapi.azure-api.net/auth/api/auth/login', data)
      .then(res =>{
        console.log(res);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Sesión iniciada',
          showConfirmButton: false,
          timer: 1500})
         redirectApp(); 
         localStorage.setItem('authTokenForTheUser', res.data.token)
         localStorage.setItem('renewToken', res.data.renewToken)
        })
        .then(e=> console.log(localStorage.getItem('authTokenForTheUser')))
      .catch(err => {console.log(err)
        console.log(err);
        if(err.code === "ERR_NETWORK") return Swal.fire({icon : 'error', title :'Hubo un error, intente de nuevo más tarde', timer : 2000});
        if(err.response.status===401){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Correo o contraseña incorrecto',
            timer: 3000  
          })
        }
         else if(err.response.status===400){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El usuario no existe.',
            timer: 3000  
          })
        }
        else if (!err){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error desconocido.',
            timer: 3000  
          })
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ooh! Algo anda mal.. Intentalo de nuevo',
            timer: 3000  
          })
        }
      })
  }

  return (
    <>
      <main className="min-h-[100vh] flex justify-center bg-slate-200 items-center flex-col">
        <Link to='/' className="absolute top-0 h-20 w-20 p-8 text-2xl text-slate-800 left-0 z-[10000]"><AiOutlineArrowLeft /></Link>
        <section className="w-10/12 h-screen md:w-1/4 px-10 flex flex-col items-center justify-evenly gap-4 py-8 shadow-xl bg-white/50 z-30">
          <Logo dimensions="w-32 h-32" />
          <form onSubmit={handleSubmit} className="w-11/12 flex justify-center items-center flex-col mt-0 gap-4 z-30">        
            <div className="w-full bg-white/80 shadow-lg py-3 px-4 rounded-3xl">
              <label htmlFor="emailIn" className="w-full text-zinc-700 font-medium items-center flex flex-row gap-2 text-lg">Email</label>
              <div className="flex items-center">
                <FiMail className="text-zinc-500" />
                <input className="w-full h-10 border-none border-transparent focus:border-transparent focus:ring-0 focus:outline-none placeholder:text-zinc-500 placeholder:font-semibold pl-4 " type="email" name="email" placeholder="user@addres.com" id="emailIn"/>
              </div>
            </div>
            <div className="w-full bg-white/80 shadow-lg py-3 px-4 rounded-3xl">
              <label htmlFor="passIn" className="w-full text-zinc-700 font-medium items-center flex flex-row gap-2 text-lg ">Contraseña</label>
              <div className="flex items-center">
                <BsFillKeyFill className="text-zinc-500" /> 
                <input id="passIn" className="h-10 w-full border-transparent focus:border-transparent focus:ring-0 focus:outline-none placeholder:text-zinc-500 placeholder:font-semibold pl-4 " type="password" name="password" placeholder="Contraseña"/>
              </div>
            </div>
            <button type="submit" className="w-full py-4 font-bold text-lg bg-orange-500 rounded-3xl text-slate-50">Iniciar Sesion</button>
            <div className="flex items-center justify-between w-full">
              <Link to="/recovery" className="text-sm w-fit hover:underline text-zinc-500">Olvidaste tu contraseña?</Link>
              <Link to='/registro' className="text-zinc-500 text-sm hover:underline">Registrate</Link>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}

export default Login

