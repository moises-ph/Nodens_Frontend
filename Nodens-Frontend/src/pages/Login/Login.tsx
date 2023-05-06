import axios from "axios";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Link, useNavigate } from "react-router-dom";
import {changeAppRouter} from "../../store/RouterSlice"
import Swal from 'sweetalert2'
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import { BsFillKeyFill, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {wrapper} from 'axios-cookiejar-support'
import {CookieJar} from 'tough-cookie'
import Cookies from "js-cookie";

const Login = () => {
  const jar = new CookieJar();
  const client = wrapper(axios.create({jar}))
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
      timer: 2000,
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
    // fetch('http://4.157.130.212/api/auth/login', {
    //   body: JSON.stringify(data),
    //   method: 'POST',
    // })
    client.post('http://nodensauth.gqdjevebebg0aba3.eastus.azurecontainer.io/api/auth/login', data)
      .then(res =>{
        console.log(res.headers);
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Sesión iniciada',
          showConfirmButton: false,
          timer: 1500})
         //redirectApp(); 
         localStorage.setItem('authTokenForTheUser', res.data.token)
        })
        .then(e=> console.log(localStorage.getItem('authTokenForTheUser')))
      .catch(err => {console.log(err)
        console.log(err);
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
      <main className="min-h-[100vh] pt-16 flex justify-center items-center flex-col bg-gradient-to-br from-[#E79A77] to-[#B701F7] ">
        <section className="none"> 
        </section>
        <section className="w-10/12 md:w-2/3 px-10 flex flex-col gap-4 py-8 shadow-xl bg-slate-50 rounded-md">
          <h1 className="w-full text-4xl text-start mb-2 drop-shadow-lg">Login</h1>
          <div className="w-full flex flex-col items-center gap-3">
            <button className="flex flex-row w-full items-center justify-center gap-4 border-none rounded-xl h-12 bg-[#bfe5f6] font-bold"><FcGoogle className="ml-2"/> Continúe con Google</button>
            <button className="flex flex-row w-full items-center justify-center gap-4 border-none rounded-xl h-12 bg-[#bfe5f6] font-bold"><BsLinkedin className="ml-2"/> Continúe con Linkedin</button>
          </div>
          <p className="w-full before:content-[''] before:block before:w-[28%] before:h-[1px] before:bg-black md:before:w-[30%] after:content-[''] after:block after:w-[28%] after:h-[1px] after:bg-black md:after:w-[30%] text-center flex justify-center items-center gap-8 h-min">o</p>
          <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col mt-0 gap-4">        
            <label htmlFor="emailIn" className="w-full items-center flex flex-row gap-2 text-lg"><AiOutlineUser /> <span className="text-sm">Email</span></label>
            <input type="email" name="email" placeholder="Email" id="emailIn" className="w-full h-10 bg-slate-200 placeholder:text-slate-700 pl-4 "/>
            <label htmlFor="emailIn" className="w-full items-center flex flex-row gap-2 text-lg"><BsFillKeyFill /> <span className="text-sm">Contraseña</span></label>
            <input type="password" name="password" placeholder="Contraseña"  className="h-10 bg-slate-200 placeholder:text-slate-700 pl-4 "/>
            <div className="flex flex-row justify-between items-center my-1">
              <div className="flex flex-row items-center w-min">
                <input name="remember" type="checkbox" id="checkIn" className="mr-1 w-4 h-4 hover:cursor-pointer" />
                <label htmlFor="checkIn" className="text-xs">Recordarme</label>
              </div>
              <Link to="/recovery" className="text-xs underline text-slate-500">Olvidaste tu contraseña?</Link>
            </div>
            <button type="submit" className="w-full h-10 bg-red-500 text-slate-50">Iniciar Sesion</button>
            <p className="my-2 text-center">No tienes cuenta? <Link to='/registro' className="text-green-500 underline">Registrate</Link></p>
          </form>
        </section>
      </main>
    </>
  )
}

export default Login