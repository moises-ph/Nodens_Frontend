import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { FcApproval, FcCancel } from 'react-icons/fc';

function VerifyUser() {

    const [isValid, setValid] = useState(false);
    const [isLoad, setLoad] = useState(false);
    const [success, setSuccess] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [message, setMessage] = useState("Verificando...")
    const guid : string | null = searchParams.get("guid");
    const email : string | null = searchParams.get("em");

    const isLoading = () => isLoad;

    const fetchVerifyUser = () => {
        setLoad(true);
        axios.put(`https://nodensapim.azure-api.net/auth/api/auth/verify?em=${email}&guid=${guid}`)
            .then(data => {
                setLoad(false);
                setSuccess(true);
                setMessage(data.data.message);
            })
            .catch(err => {
                setLoad(false);
                console.log(err.response.data.message);
                setMessage(err.response.data.message);
            });
    }

    useEffect(()=>{
        if(guid && email){
            setValid(true);
            fetchVerifyUser();
        };
    }, []);

    return (
        isValid ? 
        <>
            <main className='bg-gradient-to-br flex flex-col from-[#B701F7] to-[#E79A77] min-h-screen min-w-full justify-center items-center gap-2'>
                {isLoad ? 
                    <div className='w-[60px] h-[60px] rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div> 
                    : 
                    success ?
                    <FcApproval className='w-[60px] h-[60px] motion-safe:animate-bounce'></FcApproval>
                    : 
                    <FcCancel className='w-[60px] h-[60px] animate-pulse'></FcCancel>
                }
                <h1 className='text-2xl font-semibold text-slate-100'>{message}</h1>
                {!isLoading() && <Link to="/" className='h-10 text-center text-2xl font-bold rounded-md shadow-md hover:shadow-lg hover:scale-110 transition text-slate-300 p-0 w-48 bg-purple-600 mt-5'>Volver a Inicio</Link>}
            </main>
        </>
        :
        <>
            <main className='bg-gradient-to-br flex flex-col from-[#B701F7] to-[#E79A77] min-h-screen min-w-full justify-center items-center gap-2'>
                <h1 className='text-2xl font-semibold text-slate-100'>You lost? Bitch</h1>
            </main>
        </>
    )
};

export default VerifyUser;