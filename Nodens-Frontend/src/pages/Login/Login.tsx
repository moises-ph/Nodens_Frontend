import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { Link, useNavigate } from "react-router-dom";
import {changeAppRouter} from "../../store/RouterSlice"
import Swal from 'sweetalert2'
import { AiOutlineUser } from "react-icons/ai"
import { BsFillKeyFill, BsLinkedin } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { clientHttp } from "../../services/client";
import { AxiosError } from "axios";


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
    
    clientHttp().post('https://nodensapi.azure-api.net/auth/api/auth/login', data)
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
      <main className="min-h-[100vh] pt-16 flex justify-center items-center flex-col">
      <div className="fixed h-full w-full blur-[2px]">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[-10%] ml-4" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[80%] ml-[-20%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[100%] ml-[80%]" viewBox="0 0 500 500" width="60%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-32 ml-[70%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>        
        </div>        
        <section className="none"> 
        </section>
        <section className="w-10/12 md:w-2/3 px-10 flex flex-col gap-4 py-8 shadow-xl bg-zinc-900 rounded-md z-30">
          <h1 className="w-full text-4xl text-start mb-2 drop-shadow-lg text-slate-50">Login</h1>
          <div className="w-full flex flex-col items-center gap-3">
            <button className="flex flex-row w-full items-center justify-center gap-4 border-none rounded-xl h-12 bg-[#bfe5f6] font-bold"><FcGoogle className="ml-2"/> Continúe con Google</button>
            <button className="flex flex-row w-full items-center justify-center gap-4 border-none rounded-xl h-12 bg-[#bfe5f6] font-bold"><BsLinkedin className="ml-2"/> Continúe con Linkedin</button>
          </div>
          <p className="w-full before:content-[''] before:block before:w-[28%] before:h-[1px] before:bg-slate-50 md:before:w-[30%] after:content-[''] after:block after:w-[28%] after:h-[1px] after:bg-slate-50 md:after:w-[30%] text-center flex justify-center items-center gap-8 h-min text-slate-50">o</p>
          <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col mt-0 gap-4 z-30">        
            <label htmlFor="emailIn" className="w-full items-center flex flex-row gap-2 text-lg text-slate-50"><AiOutlineUser /> <span className="text-sm">Email</span></label>
            <input type="email" name="email" placeholder="Email" id="emailIn" className="w-full h-10  bg-slate-200 placeholder:text-slate-700 pl-4 "/>
            <label htmlFor="emailIn" className="w-full items-center flex flex-row gap-2 text-lg text-slate-50"><BsFillKeyFill /> <span className="text-sm">Contraseña</span></label>
            <input type="password" name="password" placeholder="Contraseña"  className="h-10 bg-slate-200 placeholder:text-slate-700 pl-4 "/>
            <div className="flex flex-row justify-between items-center my-1">
              <div className="flex flex-row items-center w-min">
                <input name="remember" type="checkbox" id="checkIn" className="mr-1 w-4 h-4 hover:cursor-pointer" />
                <label htmlFor="checkIn" className="text-xs text-slate-50">Recordarme</label>
              </div>
              <Link to="/recovery" className="text-xs underline text-slate-50">Olvidaste tu contraseña?</Link>
            </div>
            <button type="submit" className="w-full h-10 bg-orange-500 text-slate-50">Iniciar Sesion</button>
            <p className="my-2 text-center text-slate-50">No tienes cuenta? <Link to='/registro' className="text-green-500 underline">Registrate</Link></p>
          </form>
        </section>
      </main>
    </>
  )
}

export default Login