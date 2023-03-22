import axios from "axios";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Link, useNavigate } from "react-router-dom";
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
    
    axios.post('http://nodens-auth.somee.com/api/auth/login', data)
      .then((res: any) => {console.log(res); redirectApp(); })
      .catch((err: any)=> console.log(err))
  }

  return (
    <>
      <main className="h-[79.8vh] pt-16 flex justify-center items-center flex-col border-solid border-2 border-black bg-slate-200">
        <section className="none"> 

        </section>
        <section className="h-[50vh] w-10/12 px-4 flex flex-col gap-6 pt-6 shadow-xl bg-slate-50 rounded-md">
          <h1 className="w-full text-4xl text-start mb-6">Login</h1>
          <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col pt-8 gap-8">
            <input type="email" name="email" id="" className="bg-"/>
            <input type="password" name="password" id="" />
            <input type="submit" value="Log" />
            <p>No tienes cuenta? <Link to='/registro' className="">Registrate</Link></p>
          </form>
        </section>
      </main>
    </>
  )
}

export default Login