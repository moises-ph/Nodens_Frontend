import axios from "axios";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Link, useNavigate } from "react-router-dom";
import {changeAppRouter} from "../../store/RouterSlice"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { AiOutlineMail } from "react-icons/ai"

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
      <main className="h-[80vh] pt-16 flex justify-center items-center flex-col border-solid border-2 border-black bg-gradient-to-br from-[#E79A77] to-[#B701F7] ">
        <section className="none"> 
        </section>
        <section className="h-[50vh] w-10/12 px-4 flex flex-col gap-6 pt-6 shadow-xl bg-slate-50 rounded-md">
          <h1 className="w-full text-4xl text-start mb-2 drop-shadow-lg">Login</h1>
          <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col pt-8 gap-8">        
            <input type="email" name="email" placeholder="Email" className="w-[72vw] h-10 bg-slate-200 placeholder:text-slate-700 pl-4 "/>
            <input type="password" name="password" placeholder="Contraseña"  className="h-10 bg-slate-200 placeholder:text-slate-700 pl-4 "/>
            <input type="submit" value="Iniciar Sesion" className="w-full h-10 bg-red-500 text-slate-50"/>
            <p>No tienes cuenta? <Link to='/registro' className="text-green-500 underline">Registrate</Link></p>
            <Link to="/" className="text-sm underline text-slate-200">Olvidaste tu contraseña?</Link>
          </form>
        </section>
      </main>
    </>
  )
}

export default Login