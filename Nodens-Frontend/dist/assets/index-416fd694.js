import{r as l,j as e,F as f,c as t,S as i}from"./index-fc255b8f.js";import{L as C,S as D,u as y,a as S,b as N}from"./index-f331c43d.js";import{A as B,g as M,j as _,C as z,E as Z,c as j,M as R,e as L,O as F,f as V,i as U,h as k,P as K,d as G,R as H,k as $,l as J,V as Y}from"./index-f331c43d.js";const q=[{Title:"Titulo mas largo para ver que onda",Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!",Creation_Date:new Date,Event_Date:new Date,Payment:15e4,OrganizerId:"1",Event_Ubication:{City:"Cali",Street:"15",Career:"23b",SiteNumber:"#15-48",Town:"Colon"},Applicant:[{ApplicantId:"1",PostulationDate:new Date}],Img:"si",Requeriments:[{Description:"descripcion de los requerimientos 1"},{Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!"},{Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!"},{Description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatem exercitationem recusandae accusantium praesentium quisquam commodi explicabo quas possimus nam expedita inventore vel, tempora deserunt impedit numquam provident dolore totam!"}],Vacants:15,isAvailable:!0,tags:[]},{Title:"Músico con experiencia",Description:"Importante grupo musical requiere para su equipo un Músico con conocimientos avanzados en percusión ",Creation_Date:new Date,Event_Date:new Date,Payment:15e4,OrganizerId:"2",Event_Ubication:{City:"Cali",Street:"15",Career:"23b",SiteNumber:"#15-48",Town:"Colon"},Applicant:[{ApplicantId:"2",PostulationDate:new Date}],Img:"si",Requeriments:[{Description:"Saber tocar varios instrumentos de percusión"}],Vacants:15,isAvailable:!0,tags:[]},{Title:"Oferta 3",Description:"descripcion de la oferta 3",Creation_Date:new Date,Event_Date:new Date,Payment:15e4,OrganizerId:"3",Event_Ubication:{City:"Cali",Street:"15",Career:"23b",SiteNumber:"#15-48",Town:"Colon"},Applicant:[{ApplicantId:"3",PostulationDate:new Date}],Img:"si",Requeriments:[{Description:"descripcion de los requerimientos 3"}],Vacants:15,isAvailable:!0,tags:[]},{Title:"Oferta 4",Description:"descripcion de la oferta 4",Creation_Date:new Date,Event_Date:new Date,Payment:15e4,OrganizerId:"4",Event_Ubication:{City:"Cali",Street:"15",Career:"23b",SiteNumber:"#15-48",Town:"Colon"},Applicant:[{ApplicantId:"4",PostulationDate:new Date}],Img:"si",Requeriments:[{Description:"descripcion de los requerimientos 4"}],Vacants:15,isAvailable:!0,tags:[]},{Title:"Oferta 5",Description:"descripcion de la oferta 5",Creation_Date:new Date,Event_Date:new Date,Payment:15e4,OrganizerId:"5",Event_Ubication:{City:"Cali",Street:"15",Career:"23b",SiteNumber:"#15-48",Town:"Colon"},Applicant:[{ApplicantId:"5",PostulationDate:new Date}],Img:"si",Requeriments:[{Description:"descripcion de los requerimientos 5"}],Vacants:15,isAvailable:!0,tags:[]},{Title:"Oferta 6",Description:"descripcion de la oferta 6",Creation_Date:new Date,Event_Date:new Date,Payment:15e4,OrganizerId:"6",Event_Ubication:{City:"Cali",Street:"15",Career:"23b",SiteNumber:"#15-48",Town:"Colon"},Applicant:[{ApplicantId:"6",PostulationDate:new Date}],Img:"si",Requeriments:[{Description:"descripcion de los requerimientos 6"}],Vacants:15,isAvailable:!0,tags:[]},{Title:"Oferta 7",Description:"descripcion de la oferta 7",Creation_Date:new Date,Event_Date:new Date,Payment:15e4,OrganizerId:"7",Event_Ubication:{City:"Cali",Street:"15",Career:"23b",SiteNumber:"#15-48",Town:"Colon"},Applicant:[{ApplicantId:"7",PostulationDate:new Date}],Img:"si",Requeriments:[{Description:"descripcion de los requerimientos 7"}],Vacants:15,isAvailable:!0,tags:[]}];function O(){l.useState();const[d,Q]=l.useState([]),b=r=>{r.preventDefault();const s=new FormData(r.target),n=Object.fromEntries(s);Q(q.filter(h=>n.ubication.toString().length>0?h.Event_Ubication.City.includes(n.ubication.toString()):n.instrument.toString().length>0?h.Requeriments.filter(u=>u.Description.includes(n.instrument.toString())):!0))},g=()=>{};return e(f,{children:t("main",{className:"flex flex-col w-full  min-h-[100vh] pt-16",children:[t("div",{className:"fixed h-full w-full blur-[2px]",children:[t("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"absolute z-0 mt-[-10%] ml-4",viewBox:"0 0 500 500",width:"30%",id:"blobSvg",children:[e("defs",{children:t("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e("stop",{offset:"0%",style:{stopColor:"rgb(238, 205, 163)"}}),e("stop",{offset:"100%",style:{stopColor:"rgb(239, 98, 159)"}})]})}),e("path",{id:"blob",fill:"url(#gradient)",children:e("animate",{attributeName:"d",dur:"10000ms",repeatCount:"indefinite",values:"M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"})})]}),t("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"absolute z-0 mt-[80%] ml-[-20%]",viewBox:"0 0 500 500",width:"30%",id:"blobSvg",children:[e("defs",{children:t("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e("stop",{offset:"0%",style:{stopColor:"rgb(238, 205, 163)"}}),e("stop",{offset:"100%",style:{stopColor:"rgb(239, 98, 159)"}})]})}),e("path",{id:"blob",fill:"url(#gradient)",children:e("animate",{attributeName:"d",dur:"10000ms",repeatCount:"indefinite",values:"M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"})})]}),t("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"absolute z-0 mt-[100%] ml-[80%]",viewBox:"0 0 500 500",width:"60%",id:"blobSvg",children:[e("defs",{children:t("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e("stop",{offset:"0%",style:{stopColor:"rgb(238, 205, 163)"}}),e("stop",{offset:"100%",style:{stopColor:"rgb(239, 98, 159)"}})]})}),e("path",{id:"blob",fill:"url(#gradient)",children:e("animate",{attributeName:"d",dur:"10000ms",repeatCount:"indefinite",values:"M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"})})]}),t("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",className:"absolute z-0 mt-32 ml-[70%]",viewBox:"0 0 500 500",width:"30%",id:"blobSvg",children:[e("defs",{children:t("linearGradient",{id:"gradient",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[e("stop",{offset:"0%",style:{stopColor:"rgb(238, 205, 163)"}}),e("stop",{offset:"100%",style:{stopColor:"rgb(239, 98, 159)"}})]})}),e("path",{id:"blob",fill:"url(#gradient)",children:e("animate",{attributeName:"d",dur:"10000ms",repeatCount:"indefinite",values:"M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;"})})]})]}),t("section",{className:"flex flex-col items-center w-full gap-4 p-4 mt-10 z-10",children:[e("p",{className:"text-xl text-slate-200",children:"Encuentra tu oportunidad aquí!"}),t("form",{onSubmit:b,className:"flex flex-col items-center w-full gap-5",children:[t("div",{className:"flex md:flex-row flex-col justify-center items-center w-full gap-5",children:[e("input",{name:"instrument",className:"bg-slate-200 rounded-md w-10/12 md:w-1/3 h-9 p-3 border-solid border-2 border-slate-500",placeholder:"Qué interpretas?"}),e("input",{name:"ubication",className:"bg-slate-200 rounded-md w-10/12 md:w-1/3 h-9 p-3 border-solid border-2 border-slate-500",placeholder:"Dónde?"})]}),e("button",{type:"submit",className:"bg-[#B701F7] py-2 w-10/12 md:w-[68%] rounded-lg text-slate-200 font-semibold hover:bg-[#a10bd8] transition",children:"Buscar Trabajos"})]})]}),e("div",{className:"flex flex-col self-center top-[16.666667%] md:w-5/6 w-full gap-2 p-2 z-10",children:d.length>0?d.map((r,s)=>e(C,{to:"/login",children:e(D,{showModal:null,redirect:g,offer:r,Key:s.toString(),isHomePage:!0},s)})):e(f,{children:e("div",{className:"text-center self-center",children:e("p",{className:"text-base text-slate-300",children:"Realiza una Búsqueda para que encuentres tus oportunidades"})})})})]})})}function P(){const[d,Q]=l.useState(!1),[b,g]=l.useState(""),[r,s]=l.useState(!1),[n,h]=y(),u=n.get("gdusr"),w=n.get("mn"),v=(c,m)=>{console.log(c),console.log(m),i.fire({title:"Validando información...",allowEscapeKey:!1,showCancelButton:!1,showConfirmButton:!1}),fetch(`http://20.242.223.125/api/auth/recovery/request?gdusr=${c}&mn=${m}`,{method:"POST"}).then(async a=>{if(a.status!=200){let p=await a.json();throw new Error(p.msg)}else return a.json()}).then(a=>{i.close(),g(a.token)}).catch(a=>{setTimeout(()=>location.replace("/"),4e3),i.fire({title:"Hubo un error :(",text:a+" Será redirigido en 4 segundos",icon:"error",allowEscapeKey:!1,showCancelButton:!1,showConfirmButton:!1})})},x=c=>{c.preventDefault();const m=new FormData(c.target),a=Object.fromEntries(m);if(i.fire({title:"Cambiando contraseña",text:"Espere un momento por favor...",allowEscapeKey:!1,showCancelButton:!1,showConfirmButton:!1}),a.pass1!=a.pass2)i.fire({title:"Cuidado!",text:"Las contraseñas deben coincidir",icon:"info",showConfirmButton:!0});else{s(!0);let p={Password:a.pass1};console.log(JSON.stringify(p)),N.put("http://20.242.223.125/api/auth/recovery/reset",p,{headers:{Authorization:`Bearer ${b}`,Accept:"application/json","Content-Type":"application/json"}}).then(o=>{console.log(o),i.fire({title:o.data.message,text:"Será redirigido en unos instantes",icon:"success",allowEscapeKey:!1,allowOutsideClick:!1,showCancelButton:!1,showConfirmButton:!1,showCloseButton:!1,showDenyButton:!1}),setTimeout(()=>location.replace("/login"),4500)}).catch(o=>{console.log(o),o.response.data.title.includes("validation")?(s(!1),i.fire({title:o.response.data.errors.Password[0],icon:"error"})):(i.fire({title:o,icon:"error"}),setTimeout(()=>location.replace("/"),4500))})}};return l.useEffect(()=>{u!=null&&w!=null&&(Q(!0),v(u,w))},[]),d?e(f,{children:e("main",{className:"bg-gradient-to-br flex flex-col from-[#B701F7] to-[#E79A77] min-h-screen min-w-full justify-center items-center gap-2",children:t("div",{className:"flex flex-col items-center justify-center bg-slate-100 rounded-lg w-1/4 min-h-[70vh] gap-5 p-3 shadow-2xl",children:[e(S,{dimensions:"h-28 w-28"}),e("h1",{className:"text-2xl font-semibold pt-2",children:"Restablece tu contraseña"}),t("form",{onSubmit:x,className:"flex flex-col gap-3 p-4 w-full",children:[e("label",{htmlFor:"pass1",children:"Introduce tu nueva contraseña"}),e("input",{name:"pass1",id:"pass1",className:"bg-slate-200 transition ease-in-out focus:scale-105 p-1 border-solid border-slate-800 border",type:"password"}),e("label",{htmlFor:"pass2",className:"pt-4",children:"Confirma tu nueva contraseña"}),e("input",{name:"pass2",id:"pass2",className:"bg-slate-200 transition ease-in-out focus:scale-105 p-1 border-solid border-slate-800 border",type:"password"}),e("button",{disabled:r,id:"btnSubmit",type:"submit",className:"rounded bg-[#B701F7] w-1/2 h-9 text-slate-200 font-semibold transition ease-in-out self-center hover:bg-[#bc4ae5] hover:scale-105 disabled:bg-[#e3bbf2] disabled:hover:bg-[#e3bbf2] disabled:hover:scale-100",children:"Cambiar Contraseña"})]})]})})}):e(f,{children:e("main",{className:"bg-gradient-to-br flex flex-col from-[#B701F7] to-[#E79A77] min-h-screen min-w-full justify-center items-center gap-2",children:e("h1",{className:"text-2xl font-semibold text-slate-100",children:"You lost? Bitch"})})})}export{B as App,M as AppOrganizer,_ as ApplicantsOffers,z as CreateOffer,Z as Error,O as Home,j as Login,R as MusicianLog,L as MusiciansProfile,F as Offers,V as OrganizerLog,U as OrganizerOffers,k as OrganizerProfile,P as PasswordRecovery,K as Posts,G as Profiles,H as Registro,$ as SingleOffer,J as SingleOfferApplicant,Y as VerifyUser};
