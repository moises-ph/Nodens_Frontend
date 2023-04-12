import axios from "axios";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Link, useNavigate } from "react-router-dom";
import {changeAppRouter} from "../../store/RouterSlice"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai"
import { BsFillKeyFill, BsGoogle, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal)
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
    
    axios.post('http://127.0.0.1:8000/api/auth/login', data)
      .then(res =>
        {console.log(res);
        MySwal.fire({
          position: 'top',
          icon: 'success',
          title: 'Sesión iniciada',
          showConfirmButton: false,
          timer: 1500})
         redirectApp(); 
         localStorage.setItem('authTokenForTheUser', res.data.token)
        })
        .then(e=> console.log(localStorage.getItem('authTokenForTheUser')))
      .catch(err => {console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ooh! Algo anda mal..',
          timer: 3000  
        })
      })
      
  }

  return (
    <>
      <main className="min-h-[100vh] pt-16 flex justify-center items-center flex-col border-solid border-2 border-black bg-gradient-to-br from-[#E79A77] to-[#B701F7] ">
        <section className="none"> 
        </section>
        <section className="w-10/12 md:w-1/3 px-10 flex flex-col gap-4 py-8 shadow-xl bg-slate-50 rounded-md">
          <h1 className="w-full text-4xl text-start mb-2 drop-shadow-lg">Login</h1>
          <div className="w-full flex flex-col items-center gap-3">
            <button className="flex flex-row w-full items-center justify-center gap-4 border-none rounded-xl h-12 bg-[#bfe5f6] font-bold"><FcGoogle/> Continúe con Google</button>
            <button className="flex flex-row w-full items-center justify-center gap-4 border-none rounded-xl h-12 bg-[#bfe5f6] font-bold"><BsLinkedin/> Continúe con Linkedin</button>
          </div>
          <p className="w-full before:content-[''] before:block before:w-[28%] before:h-[1px] before:absolute before:bg-black before:top-[44.5%] before:left-[19%] md:before:w-[13%] md:before:top-[44.62%] md:before:left-[36%] after:right-[19%] after:content-[''] after:block after:w-[28%] after:h-[1px] after:absolute after:bg-black after:top-[44.5%] md:after:w-[13%] md:after:top-[44.62%] md:after:right-[36%] text-center justify-center h-min">o</p>
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
              <Link to="/" className="text-xs underline text-slate-500">Olvidaste tu contraseña?</Link>
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