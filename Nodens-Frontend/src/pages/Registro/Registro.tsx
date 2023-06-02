import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Registro = () => {
  const [loading, setLoading] = useState<boolean>();
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
    console.log(object);
    
    let timerInterval: number
    Swal.fire({
      title: 'Registrando.',
      html: 'Te estamos registrando, danos un momento :).',
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
    
    axios.post("https://nodensapi.azure-api.net/auth/api/user/Register", object)
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
    <main className='h-screen flex flex-col items-center bg-[#003F5A]  text-slate-100 gap-4'>    
        <div className="fixed h-full w-full blur-[2px] ">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[-10%] ml-4" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[80%] ml-[-20%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[100%] ml-[80%]" viewBox="0 0 500 500" width="60%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-32 ml-[70%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(225,93,18)"}}></stop><stop offset="100%" style={{stopColor: "rgb(235,217,200)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>        
        </div>        
      {loading && <div className={`absolute right-4 top-[4.25rem] md:top-[4.75rem] flex items-center justify-center`}><div className='w-8 h-8 rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></div>}
      <h1 className="text-6xl text-slate-100 pt-20">Registro</h1>
      <form onSubmit={handleSubmit} className="w-5/6 sm:w-[400px] h-4/6 rounded-lg shadow-xl shadow-slate-900 flex flex-col justify-center items-start bg-zinc-900 z-30 pl-6 py-4 pt-16 gap-4">
        <label htmlFor="Email" className="w-full flex flex-col gap-2">
         <h2>Email</h2> 
          <input type="email" name="email" id="" className="placeholder:text-slate-600 w-full text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="Email" required />
        </label>
        <label htmlFor="userName" className="w-full flex flex-col gap-2">
          <h2>Nombre de usuario</h2>
          <input type="text" minLength={3} name="userName" id="" className="placeholder:text-slate-600 w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="Nombre" required/>
        </label>
        <label htmlFor="rol" className="w-full flex flex-col gap-2">
          <h2>Rol</h2>
          <select name="rol" id="" className="w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" defaultValue='Rol' required>
            <option className="w-11/12 bg-zinc-900 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400" >Rol</option>
            <option className="w-11/12 bg-zinc-900 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400" value="Musician">Musician</option>
            <option className="w-11/12 bg-zinc-900 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400" value="Organizer">Organizer</option>
          </select>
        </label>
        <label htmlFor="password" className="w-full flex flex-col gap-2">
          <h2>Password</h2>
          <input type="password" name="password" minLength={8} id="" className="placeholder:text-slate-600 w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="Password" required/>
        </label>
        <input type="submit" onClick={()=>{setLoading(true)}} value="Registrarse" className="place-self-center py-2 px-4 bg-transparent text-[#E15D12] font-semibold border border-[#E15D12] rounded hover:bg-[#E15D12] hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0" />
      </form>
    </main>
  );
};

export default Registro;

