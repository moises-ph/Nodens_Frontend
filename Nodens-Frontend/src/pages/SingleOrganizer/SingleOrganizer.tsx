import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OrganizerT } from '../../types';
import { clientHttp } from '../../services/client';
import { renewToken } from '../../services';
import { Loading } from '../../components';
import DefaultUserImg from "../../assets/DefaultUser.webp";
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter, BsWhatsapp, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const SingleOrganizer = () => {
  const {id} = useParams();
  const [organizer, setOrganizer] = useState<OrganizerT>();
  const [email, setEmail] = useState<string>();

  const SocialMedias : any = {
    instagram : <BsInstagram className="h-10 w-10 text-slate-50 bg-gradient-to-tr via-pink-600 from-indigo-600 to-amber-500 rounded-xl drop-shadow"/>,
    facebook : <BsFacebook className="h-10 w-10 text-blue-600 drop-shadow"/>,
    tiktok : <FaTiktok className="h-10 w-10 drop-shadow"/>,
    twitter : <BsTwitter className="h-10 w-10 text-blue-500 drop-shadow"/>,
    linkedin : <BsLinkedin className="h-10 w-10 text-blue-700 drop-shadow"/>,
    snapchat : <BsSnapchat className="h-10 w-10 text-yellow-400 drop-shadow"/>,
    youtube : <BsYoutube className="h-10 w-10 text-red-700 drop-shadow"/>,
    whatsapp : <BsWhatsapp className="h-10 w-10 text-green-600 drop-shadow" />
  }
 const getUserEmail = async () => {
    await renewToken();
    clientHttp().get(`/auth/api/user/${organizer?.IdAuth}`)
      .then(res => setEmail(res.data.email))
      .catch(err =>{
        if(err.response.status === 401) return renewToken()
      })
  }
  const getOrganizer = async () => {
    clientHttp().get(`/organizers/Organizer/${id}`)
      .then(res => {
        console.log(res);
        setOrganizer(res.data);
      })
      .catch(err=> console.log(err))
  }

  useEffect(()=> {
    getOrganizer();
    getUserEmail();
  }, [])
  if(!organizer) return <Loading />

  return (
    <div>SingleOrganizer</div>
  )
}

export default SingleOrganizer
