import { useEffect, useState } from 'react';
import { Logo } from '../../components';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

function PasswordRecovery() {

    const [isQuery, setIsQuery] = useState(false);
    const [token, setToken]  = useState("");
    const [alreadySubmit, setAlreadySubmit] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const gdusr : string | null = searchParams.get("gdusr");
    const mn : string | null = searchParams.get("mn");

    const verifyRecovery = (gdusr : string, mn : string) => {
        console.log(gdusr);
        console.log(mn);
        Swal.fire({
            title : "Validando información...",
            allowEscapeKey : false,
            showCancelButton : false,
            showConfirmButton : false
        });
        fetch(`http://20.242.223.125/api/auth/recovery/request?gdusr=${gdusr}&mn=${mn}`, {
            method : "POST"
        }).then(async res => {
            if(res.status != 200){
                let data = await res.json();
                throw new Error(data.msg);
            }
            else{
                return res.json();
            }
        }).then((data : any) =>{
            Swal.close();
            setToken(data.token);
        }).catch(err => {
            setTimeout(() => location.replace("/") , 4000);
            Swal.fire({
                title : "Hubo un error :(",
                text : err + " Será redirigido en 4 segundos",
                icon : 'error',
                allowEscapeKey : false,
                showCancelButton : false,
                showConfirmButton : false
            });
        });
    }
    
    const changePass = (e : any) => {
        e.preventDefault();
        const form: FormData = new FormData(e.target);
        const data : any = Object.fromEntries(form);
        Swal.fire({
            title : 'Cambiando contraseña',
            text : 'Espere un momento por favor...',
            allowEscapeKey : false,
            showCancelButton : false,
            showConfirmButton : false
        });
        if(data.pass1 != data.pass2) Swal.fire({
            title : "Cuidado!",
            text : "Las contraseñas deben coincidir",
            icon : 'info',
            showConfirmButton : true
        });
        else{
            setAlreadySubmit(true);
            let body  = {
                Password : data.pass1
            }
            console.log( JSON.stringify(body));
            axios.put('https://nodensapim.azure-api.net/auth/api/auth/recovery/reset',body, {
                headers : {
                    Authorization : `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json' 
                }
            })
            .then(res => {
                console.log(res);
                Swal.fire({
                    title : res.data.message,
                    text : "Será redirigido en unos instantes",
                    icon : 'success',
                    allowEscapeKey : false,
                    allowOutsideClick : false,
                    showCancelButton : false,
                    showConfirmButton : false,
                    showCloseButton : false,
                    showDenyButton : false
                });
                setTimeout(()=> location.replace("/login"), 4500)
            })
            .catch(err => {
                console.log(err);
                if(err.response.data.title.includes("validation")){  
                    setAlreadySubmit(false);
                    Swal.fire({
                        title : err.response.data.errors.Password[0],
                        icon : 'error'
                    });
                }
                else{
                    Swal.fire({
                        title : err,
                        icon : 'error'
                    });
                    setTimeout(()=> location.replace('/'), 4500)
                }
            });
        }
    }
    
    useEffect(() => {
        if(gdusr != null && mn != null){
            setIsQuery(true);
            verifyRecovery(gdusr, mn);
        }
    },[])
    
    
    return (
        isQuery ? <>
            <main className='bg-gradient-to-br flex flex-col from-[#B701F7] to-[#E79A77] min-h-screen min-w-full justify-center items-center gap-2'>
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
            </main>
        </>
        :
        <>
            <main className='bg-gradient-to-br flex flex-col from-[#B701F7] to-[#E79A77] min-h-screen min-w-full justify-center items-center gap-2'>
                <h1 className='text-2xl font-semibold text-slate-100'>You lost? Bitch</h1>
            </main>
        </>
    )
}

export default PasswordRecovery