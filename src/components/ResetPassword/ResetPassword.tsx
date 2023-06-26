import { Logo } from '../Logo'

function ResetPassword({changePass, alreadySubmit} : {changePass : (e : any) => void, alreadySubmit : boolean}) {
  return (
    <div className='flex flex-col items-center justify-center bg-slate-100 rounded-lg w-1/4 min-h-[70vh] gap-5 p-3 shadow-2xl'>
        <Logo dimensions='h-28 w-28' />
        <h1 className='text-2xl font-semibold pt-2'>Restablece tu contraseña</h1>
        <form onSubmit={changePass} className='flex flex-col gap-3 p-4 w-full'>
            <label htmlFor="pass1">Introduce tu nueva contraseña</label>
            <input name="pass1" id='pass1' className='bg-slate-200 transition ease-in-out focus:scale-105 p-1 border-solid border-slate-800 border' type='password' />
            <label htmlFor="pass2" className='pt-4' >Confirma tu nueva contraseña</label>
            <input name="pass2" id='pass2' className='bg-slate-200 transition ease-in-out focus:scale-105 p-1 border-solid border-slate-800 border' type='password' />
            <button disabled={alreadySubmit} id="btnSubmit" type='submit' className='rounded bg-[#B701F7] w-1/2 h-9 text-slate-200 font-semibold transition ease-in-out self-center hover:bg-[#bc4ae5] hover:scale-105 disabled:bg-[#e3bbf2] disabled:hover:bg-[#e3bbf2] disabled:hover:scale-100'>Cambiar Contraseña</button>
        </form>
    </div>
  )
}

export default ResetPassword