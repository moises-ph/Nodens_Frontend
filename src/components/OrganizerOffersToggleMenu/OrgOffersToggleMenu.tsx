import { AxiosResponse, AxiosError } from 'axios'
import { useState } from 'react'
import { MdOutbond } from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { renewToken } from '../../services'
import { clientHttp } from '../../services/client'

function OrgOffersToggleMenu({id, isAvailable, setLoad} : { id: string, isAvailable : boolean, setLoad :(state : boolean) => void }) {

    const [isVisible, setVisible] = useState<boolean>(false);
    
    const sendDeleteOffer = (id : string) => {
        clientHttp().delete(`/offers/offers/${id}`).then((res : AxiosResponse<{message : string}>)  => {
          Swal.fire({
            title: res.data.message,
            icon: "success",
            showCancelButton: true,
            timer: 1000,
          });
          setLoad(false);
        })
        .catch(async (err : AxiosError) => {
          if(err.response && err.response?.status === 401){
            await renewToken();
            sendDeleteOffer(id);
          }
        })
      }
      
      const sendChangeOffer = (id : string) => {
        clientHttp().patch(`/offers/offers/${id}`)
          .then((res : AxiosResponse<{message : string}>) => {
            Swal.fire({
              title: res.data.message,
              icon: "success",
              showCancelButton: true,
              timer: 1000,
            });
            setLoad(false);
          })
          .catch(async (err : AxiosError) => {
            if(err.response){
              if(err.response?.status === 401){
                await renewToken();
                sendDeleteOffer(id);
              }
              console.log(err);
            }
          })
      }

      const handleDecision = (del : boolean ,id:string ) => {
        Swal.fire({
          title : `Estás seguro que quieres ${del ? "eliminar" :
           isAvailable ? "Deshabilitar" : "Habilitar"} la oferta?`,
          text : del ? 'Esta acción no se puede revertir': '...',
          icon : 'warning',
          showCancelButton : true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Si'
        }).then((result) => {
          if(result.isConfirmed){
            setLoad(true);
            del ? sendDeleteOffer(id) : sendChangeOffer(id);
          }
        })
      }


  return (
    <div className="visible w-full flex justify-evenly h-full items-start gap-2">
            <button onClick={(e) => setVisible(!isVisible)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Opciones <svg className="w-3 h-3 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" className={`z-50 ${ isVisible ? '' :'hidden'} absolute bg-white divide-y left-36 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="p-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  <li>
                    <Link to={`/offers/${id}`} className="transition-all delay-100 text-blue-500 w-full gap-1 flex items-center px-1">Ir a la Oferta <MdOutbond /></Link>
                  </li>
                  <li>
                    <button onClick={(e) => handleDecision(false, id)} className="transition-all delay-100 text-yellow-300 hover:bg-yellow-300 hover:text-white rounded w-fit px-1 gap-1 flex items-center">{isAvailable ? "Deshabilitar" : "Habilitar"} oferta <MdOutbond /></button>
                  </li>
                  <li>
                    <button onClick={(e) => handleDecision(true, id)} className="w-fit h-fit flex items-center gap-1 transition-colors hover:text-white text-red-400 hover:bg-red-600 rounded px-1 bg-transparent" value={id}>Eliminar Oferta<RiDeleteBin6Line /></button>
                  </li>
                </ul>
            </div>
          </div>
  )
}

export default OrgOffersToggleMenu
