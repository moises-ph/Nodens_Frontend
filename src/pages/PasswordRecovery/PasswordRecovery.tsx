import { useEffect, useState } from 'react';
import { Logo, RequestPassReset } from '../../components';
import { useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ResetPassword } from '../../components/ResetPassword';

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
    
    const changePass = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form: FormData = new FormData(e.target as HTMLFormElement);
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
            axios.put('http://20.242.223.125/api/auth/recovery/reset',body, {
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
        <main className='bg-gradient-to-br flex flex-col from-[#B701F7] to-[#E79A77] min-h-screen min-w-full justify-center items-center gap-2'>
            {
                isQuery ? 
                <ResetPassword alreadySubmit={alreadySubmit} changePass={changePass} />
                :
                <RequestPassReset />
            }
        </main>
    )
}

export default PasswordRecovery