import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Login = () => {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();

  const redirectApp = () : void =>{
    window.setTimeout(()=>{
      navigate("/", {replace:true})
      window.clearTimeout;
    }, 1000)
  } 
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    const form: FormData = new FormData(e.target);
    const data = Object.fromEntries(form);

    console.log(data);
    
    axios.post('https://localhost:44384/api/auth/login', data)
      .then(res => console.log(res))
      .then(res => redirectApp())
      .catch(err=> console.log(err))
  }
  return (
    <>
      <main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" placeholder="Email"/>
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="" placeholder="Contraseña"/>
          <input type="submit" className="cursor-pointer
          " value="Iniciar Sesion" />
        </form>
      </main>
    </>
  )
}

export default Login