import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Registro = () => {
  const MySwal = withReactContent(Swal)

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
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  
    axios.post("https://localhost:44384/api/User/Register", object)
      .then(res=>{
        console.log(res);
        MySwal.fire({
        position: 'top',
        icon: 'success',
        title: 'Usuario Registrado',
        showConfirmButton: false,

        timer: 1500
      }
      )})
      .catch(err=>{console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Ooh! Algo anda mal..',

          timer: 3000  
        })
      });
  };
  

  return  (
    <main className='flex flex-col items-center pt-7 bg-slate-100 text-slate-100 gap-4 py-6 sm:py-4'>    
      <h1 className="text-6xl text-zinc-900">Registro</h1>
      <form onSubmit={handleSubmit} className="w-5/6 sm:w-[400px] h-auto rounded-lg shadow-xl shadow-slate-900 flex flex-col justify-center items-start bg-zinc-900 pl-6 py-4 gap-4">
        <label htmlFor="Email" className="w-full flex flex-col gap-2">
         <h2>Email</h2> 
          <input type="email" name="email" id="" className="placeholder:text-slate-600 w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="Email" required />
        </label>
        <label htmlFor="name" className="w-full flex flex-col gap-2">
          <h2>Name</h2>
          <input type="text" minLength={3} name="name" id="" className="placeholder:text-slate-600 w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="First Name" required/>
        </label>
        <label htmlFor="lastname" className="w-full flex flex-col gap-2">
          <h2>Lastname</h2>
          <input type="text" minLength={3} name="lastname" id="" className="placeholder:text-slate-600 w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="First Lastname" required/>
        </label>
        <label htmlFor="rol" className="w-full flex flex-col gap-2">
          <h2>Rol</h2>
          <select name="rol" id="" className="w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" required>
            <option className="w-11/12 bg-zinc-900 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400" selected>Rol</option>
            <option className="w-11/12 bg-zinc-900 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400" value="Musician">Musician</option>
            <option className="w-11/12 bg-zinc-900 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400" value="Organizer">Organizer</option>
          </select>
        </label>
        <label htmlFor="password" className="w-full flex flex-col gap-2">
          <h2>Password</h2>
          <input type="password" name="password" minLength={8} id="" className="placeholder:text-slate-600 w-11/12 text-slate-100 bg-transparent border-solid border-b-2 border-b-slate-400 transition-colors duration-300 ease-linear focus:border-b-slate-100 focus:border-solid focus:border-b-2 outline-none leading-7" placeholder="Password" required/>
        </label>
        <input type="submit" value="Submit" className="place-self-center py-2 px-4 bg-transparent text-red-600 font-semibold border border-red-600 rounded hover:bg-red-600 hover:text-white hover:border-transparent transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0" />
      </form>
    </main>
  );
};

export default Registro;
