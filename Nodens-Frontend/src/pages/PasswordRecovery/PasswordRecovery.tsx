import { useEffect, useState } from 'react'
import { Logo } from '../../components'
import { useSearchParams } from 'react-router-dom'
import Swal from 'sweetalert2';

interface Response200 {
    token : string,
    upResult : Object
}

function PasswordRecovery() {

    const [isQuery, setIsQuery] = useState(false);
    const [token, setToken]  = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const gdusr : string | null = searchParams.get("gdusr");
    const mn : string | null = searchParams.get("mn");
    
    const verifyRecovery = (gdusr : string, mn : string) => {
        console.log(gdusr);
        console.log(mn);
        
        fetch(`http://20.253.63.70/api/auth/recovery/request?gdusr=${gdusr}&mn=${mn}`, {
            method : "POST"
        }).then(res => {
            console.log(res);
            if(res.status != 200){
                throw new Error();
            }
            res.json();
        }).then((data : any) =>{
            console.log(data);
        }).catch(err => {
            console.log(err);
            
            Swal.fire({
                title : "Hubo un error :(",
                text : err,
                icon : 'error',
                allowEscapeKey : false
            })
        })
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
                <Logo dimensions='h-28 w-28' />
                <h1 className='text-2xl font-semibold text-slate-100'>Restablece tu contraseña</h1>
                <form className='flex flex-col items-center gap-3 p-4'>
                    <input />
                    <input />
                    <button type='submit'>Cambiar Contraseña</button>
                </form>
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