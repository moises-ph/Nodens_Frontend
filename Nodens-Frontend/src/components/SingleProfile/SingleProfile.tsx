import { FaUserCircle } from 'react-icons/fa';

const SingleProfile = (props: any) => {
  const classDiv = `w-full min-h-full flex flex-col p-4 border-2 border-solid border-slate-300 gap-1 rounded-lg transition-colors hover:bg-slate-100 hover:cursor-pointer ${props.isHomePage ? "backdrop-blur-md shadow-md" : null}`
    return (
      <div onClick={()=> props.showModal(props.profile)} key={parseInt(props.Key)} className={classDiv}>
        <div className="flex items-center gap-4">
          {props.profile.url_foto_perfil 
            ? <img src={props.profile.url_foto_perfil} className="w-16 h-16 object-cover rounded-full"/> 
            : <FaUserCircle className="text-[3rem] ml-2 mt-2"/>
          }
          <h2 className="text-2xl">{props.profile.Name} {props.profile.Lastname}</h2>
        </div>
        <div className="pl-4">
          <p>
            {props.profile.educacion.map((name: any, index: any) => {
              return (
                <span className="" key={index}>
                  <p className="text-2xl ">{name.nombre}</p>
                </span>
              );
            })}
          </p>
          <p className="text-lg">{props.profile.experiencia}</p>
          <p className="flex">
            {props.profile.instrumentos.map((instrumentos: any, inst: any) => {
              return (
                <span className="flex align-center justify-center" key={inst}>
                  <p>{instrumentos.nombre}{inst === props.profile.instrumentos.length-1 ? '.' : ','}</p>
                </span>
              );
            })}
          </p>
        </div>
      </div>
    );
}

export default SingleProfile;
