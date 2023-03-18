import axios from "axios";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import {changeAppRouter} from "../../store/RouterSlice"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();

  const redirectApp = () : void =>{
    window.setTimeout(()=>{
      dispatch(changeAppRouter())
      navigate("/", {replace:true})
      window.clearTimeout();
    }, 1000)
  } 
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const form: FormData = new FormData(e.target);
    const data = Object.fromEntries(form);

    console.log(data);
    
    axios.post('https://localhost:44384/api/auth/login', data)
      .then((res: any) => {console.log(res); redirectApp(); })
      .catch((err: any)=> console.log(err))
  }
  return (
    <>
      <main className="h-[79.8vh] pt-16 flex justify-center items-center flex-col border-solid border-2 border-black">
        <section className="h-[65vh] w-10/12 rounded-2xl pt-8 px-8 flex items-center flex-col border-solid border-2 border-black">
        <h1 className="w-full text-4xl text-start">Login</h1>
        <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col pt-8 gap-4">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" placeholder="Email" className="bg-slate-800 p-2 rounded-xl text-slate-50"/>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="" placeholder="Contraseña" className="bg-slate-800 rounded-xl p-2 text-slate-50"/>
          <input type="submit" className="text-slate-50 bg-slate-800 flex justify-center items-center cursor-pointer h-10 w-28 rounded-2xl" value="Iniciar Sesion"/>
        </form>
        </section>
      </main>
    </>
  )
}

export default Login