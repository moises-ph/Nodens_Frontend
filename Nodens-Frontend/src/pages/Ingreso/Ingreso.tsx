import React, { useState } from 'react'
import { BsFacebook, BsGoogle, BsLinkedin } from 'react-icons/bs';

function Ingreso() {

    return (
        <>
            <main className="h-[80vh] pt-16 flex justify-center items-center flex-col border-solid border-2 border-black bg-gradient-to-br from-[#E79A77] to-[#B701F7] ">
                <div className="fixed h-screen w-full blur-[2px]">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[-10%] ml-4" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop><stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[80%] ml-[-20%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop><stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-[100%] ml-[80%]" viewBox="0 0 500 500" width="60%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop><stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" className="absolute z-0 mt-32 ml-[70%]" viewBox="0 0 500 500" width="30%" id="blobSvg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style={{stopColor: "rgb(238, 205, 163)"}}></stop><stop offset="100%" style={{stopColor: "rgb(239, 98, 159)"}}></stop></linearGradient></defs><path id="blob" fill="url(#gradient)"><animate attributeName="d" dur="10000ms" repeatCount="indefinite" values="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"></animate></path></svg>        
                </div>  
                <section className='bg-white rounded-[10px] shadow' id="container">
                    <div className="form-container sign-up-container">
                        <form className='bg-white flex flex-col items-center justify-center px-0 y-[50px] h-full text-center' action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><BsFacebook/></a>
                                <a href="#" className="social"><BsGoogle/></a>
                                <a href="#" className="social"><BsLinkedin /></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input className='bg-[#eee] border-none px-[12x] py-[15px] mx-[8px] my-0 w-full' type="text" placeholder="Name" />
                            <input className='bg-[#eee] border-none px-[12x] py-[15px] mx-[8px] my-0 w-full' type="email" placeholder="Email" />
                            <input className='bg-[#eee] border-none px-[12x] py-[15px] mx-[8px] my-0 w-full' type="password" placeholder="Password" />
                            <button className='border-none rounded-[20px] bg-[#3F2EFF] text-[#FFFFFF] text-[12px] font-bold px-[12px] y-[45px] tracking-[1px] uppercase transition-transform ease-in duration-[80ms] active:scale-[0.95] focus:outline-none'>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container log-in-container">
                        <form className='bg-white flex flex-col items-center justify-center px-0 y-[50px] h-full text-center' action="#">
                            <h1>Log in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><BsFacebook/></a>
                                <a href="#" className="social"><BsGoogle/></a>
                                <a href="#" className="social"><BsLinkedin /></a>
                            </div>
                            <span>or use your account</span>
                            <input className='bg-[#eee] border-none px-[12x] py-[15px] mx-[8px] my-0 w-full' type="email" placeholder="Email" />
                            <input className='bg-[#eee] border-none px-[12x] py-[15px] mx-[8px] my-0 w-full' type="password" placeholder="Password" />
                            <a className='text-[#333] text-[14px] mx-[15px] my-[0]' href="#">Forgot your password?</a>
                            <button className='border-none rounded-[20px] bg-[#3F2EFF] text-[#FFFFFF] text-[12px] font-bold px-[12px] y-[45px] tracking-[1px] uppercase transition-transform ease-in duration-[80ms] active:scale-[0.95] focus:outline-none'>Log In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>Already have an account? Log In</p>
                                <button className="hover:bg-white hover:text-[#0E1119] hover:cursor-pointer border-solid border-[1px] rounded-[20px] bg-transparent text-[#FFFFFF] text-[12px] font-bold px-[12px] y-[45px] tracking-[1px] uppercase duration-500 ease-in active:scale-[0.95] focus:outline-none" >Log In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, There!</h1>
                                <p>Don't have an account? Sign Up Free</p>
                                <button className="hover:bg-white hover:text-[#0E1119] hover:cursor-pointer border-solid border-[1px] rounded-[20px] bg-transparent text-[#FFFFFF] text-[12px] font-bold px-[12px] y-[45px] tracking-[1px] uppercase duration-500 ease-in active:scale-[0.95] focus:outline-none" >Sign Up</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Ingreso