import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function VerifyUser() {

    const [isValid, setValid] = useState(false);
    const [isLoad, setLoad] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const [message, setMessage] = useState("Verificado")
    const guid : string | null = searchParams.get("guid");
    const email : string | null = searchParams.get("emailHash");

    const isLoading = () => isLoad;

    const fetchVerifyUser = (guidp : string, emailp : string) => {
        setLoad(true);
        console.log(guidp);
        console.log(emailp);
        setTimeout(()=> setLoad(false), 1000)
    }

    useEffect(()=>{
        if(guid && email){
            setValid(true);
            fetchVerifyUser(guid, email);
        };
    }, []);

    return (
        isValid ? 
        <>
            <main className='bg-gradient-to-br flex flex-col from-[#B701F7] to-[#E79A77] min-h-screen min-w-full justify-center items-center gap-2'>
                {isLoading() && <><div className='w-[56px] h-[56px] rounded-[50%] [border-left-style:solid] border-[11.2px] border-double border-[#474bff] animate-spin'></div></>}
                {!isLoading() && <><h1 className='text-2xl font-semibold text-slate-100'>{message}</h1></>}
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