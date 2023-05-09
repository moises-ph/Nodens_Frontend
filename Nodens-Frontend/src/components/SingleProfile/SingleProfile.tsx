import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleProfile = (props: any) => {
  const classDiv = `w-full min-h-full flex flex-col p-4 border-2 border-solid border-slate-300 gap-1 rounded-lg transition-colors hover:bg-slate-100 hover:cursor-pointer ${props.isHomePage ? "backdrop-blur-md shadow-md" : null}`
    return (
      <div onClick={()=> props.showModal(props.profile)} key={parseInt(props.Key)} className={classDiv}>
        <Link to=""><FaUserCircle className="text-[3rem] ml-2 mt-6"/></Link>
         <div className="pl-4">
         <p>
          {props.profile.Educacion.map((name: any, index: any) => {
            return (
              <span className="" key={index}>
                <p className="text-2xl ">{name.Nombre}</p>
              </span>
            );
          })}
        </p>
        <p className="text-lg">{props.profile.Experiencia}</p>
        <p className="flex">
          {props.profile.Instrumentos.map((instrumentos: any, inst: any) => {
            return (
              <span className="flex align-center justify-center" key={inst}>
                <p>{instrumentos.Nombre},</p>
              </span>
            );
          })}
        </p>
         </div>
      </div>
    );
}

export default SingleProfile;