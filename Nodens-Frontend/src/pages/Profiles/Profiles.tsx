import { ProfileT } from "../../types";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IndexLink, Loading, ModalProfile, SingleProfile } from "../../components";
import { BsSearch } from "react-icons/bs";
import { clientHttp } from "../../services/client";
import { renewToken } from "../../services";

const Profile = () => {
  const [modal, setOpen] = useState(false);
	const [profile, setProfile] = useState<ProfileT | undefined>()
	const [pfps,setPfps] = useState<ProfileT[]>([]);

  const searchInput = useRef(null)

  useEffect(()=> {
    renewToken();
    clientHttp().get("/musicians/musician/all")
      .then(res => {console.log(res); setPfps(res.data)}).
      catch(err=> console.log(err));
  }, [])

  const showModal = (perfil: ProfileT) => {
    console.log(modal);
    
		modal ? null : setOpen(true);
		setProfile(perfil)
	}

  const closeModal = () => {
		setOpen(false);
	}

  const searchOffer = (e:any)=>{
		console.log(e.current.value);
		if(e.current.value.length === 0){
			setPfps(pfps);
		}
		else{
			setPfps(pfps.filter(value => value.instrumentos[0].nombre.includes(e.current.value)));
		}
	}

  if(!pfps) return <Loading />
  return (
    <>
      <main className="h-full overflow-y-hidden">
        <div className="pt-8 pb-3 fixed h-min md:h-1/6 w-full flex flex-col  items-center md:flex-row ls gap-4 border-b-[1px] z-10 bg-slate-50 border-solid border-slate-500">
					<div className="flex flex-row gap-4 m-0 h-min left-0">
						<IndexLink />
						<label htmlFor="" className="md:w-[85vw] w-[80%] flex items-center justify-between gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl">
							<input ref={searchInput} type="text" onChange={()=>{searchOffer(searchInput)}} placeholder="Buscar" className="bg-transparent md:w-full outline-none text-slate-900" />
							<button>
								<BsSearch onClick={()=>{searchOffer(searchInput)}} className="text-slate-400" />
							</button>
						</label>
					</div>
					<p className="text-slate-600 pl-6"><span className="text-slate-800 font-bold">{pfps.length}</span> Perfiles</p>
				</div>
        <section className="flex flex-col top-[29%] md:top-[19.666667%] pt-7 absolute w-full md:w-2/5 overflow-y-scroll gap-6 p-2">
          <div>
            {
              pfps.map((prof, i)=>{
                return <SingleProfile showModal={showModal} redirect={null} profile={prof} key={i} isHomePage={false}/>
              })
            }
          </div>
        </section>
        <AnimatePresence>
					  {modal && <ModalProfile open={modal} closeModal={closeModal} profile={profile}/>}
				  </AnimatePresence>
      </main>
    </>
  );
};

export default Profile;
