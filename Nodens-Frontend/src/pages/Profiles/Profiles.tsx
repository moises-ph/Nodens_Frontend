import { ProfileT } from "../../types";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { IndexLink, Loading, ModalProfile, SingleProfile } from "../../components";
import { BsSearch } from "react-icons/bs";
import { clientHttp } from "../../services/client";
import { renewToken } from "../../services";
import { GoSettings } from "react-icons/go";

const Profile = () => {
  const [modal, setOpen] = useState(false);
	const [profile, setProfile] = useState<ProfileT | undefined>()
	const [pfps,setPfps] = useState<ProfileT[]>([]);
  const [showFilterOptions, setFilter] = useState<boolean>(false);

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
      <main className="h-screen overflow-y-hidden bg-[#003F5A]">
        <div className="pt-8 md:p-8 pb-3 h-fit w-full flex flex-col  md:flex-row ls gap-4 border-b-[1px] z-10 bg-[#003F5A] border-solid border-slate-500">
					<div className="flex flex-row items-center gap-4 m-0 h-min left-0">
						<IndexLink />
            {/* <button className="h-fit w-fit"><GoSettings className="w-8 h-8" /></button> */}
						<label htmlFor="" className="md:w-[85vw] w-[80%] flex items-center justify-between gap-2 h-12 bg-slate-100 text-slate-50 placeholder:text-slate-300 rounded-3xl px-4 shadow-xl">
							<input ref={searchInput} type="text" onChange={()=>{searchOffer(searchInput)}} placeholder="Buscar" className="bg-transparent md:w-full outline-none text-slate-900" />
							<button>
								<BsSearch onClick={()=>{searchOffer(searchInput)}} className="text-slate-400" />
							</button>
						</label>
					</div>
					<p className="text-slate-100 pl-6"><span className="text-slate-100 font-bold">{pfps.length}</span> Perfiles</p>
				</div>
        <section className="flex flex-col py-5 w-full md:h-full overflow-y-scroll p-2">
          <div className="md:w-2/5 w-full md:px-3 gap-2 flex flex-col">
            {
              pfps.map((prof, i)=>{
                return <SingleProfile showModal={showModal} redirect={null} profile={prof} key={i} Key={i} isHomePage={false}/>
              })
            }
          </div>
        </section>
        <AnimatePresence>
					  {modal ? <ModalProfile canPostulate={false} open={modal} closeModal={closeModal} profile={profile}/> : 
              <div className="top-96 hidden">
                <h2>Selcciona un músico para visualizar su perfil aquí</h2>
              </div> 
            }
				  </AnimatePresence>
      </main>
    </>
  );
};

export default Profile;
