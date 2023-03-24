import React from 'react'

export type InstrumentoT = {
  Nombre: String,
  Nivel : String
  
}
  export type postPro = {
    IdAuth: String,
    Fecha_Nacimiento: Date,
    Instrumentos: InstrumentoT[],
  GenerosMusicales : String,
  Pais : String,
  Ciudad: String,
  Experiencia: String,
  Educacion: [
    {
      Nombre: String,
      Institucion: String,
      Fecha_Inicio: Date,
      Fecha_Fin: Date
    } 
],
  Url_Foto_Perfil: String,
  Url_Video_Presentacion: String,
  Redes_Sociales: [
    {
      Nombre: String,
      Url: String
    }
  ]
}

const profile :  postPro[] =[
  {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos:[
       {
          Nombre: "Guitarra",
          Nivel: "Avanzado"
       },
       {
        Nombre: "piano",
        Nivel: "Avanzado"
     }
     ],
     GenerosMusicales: "De todo",
     Pais: "Colombia",
     Ciudad: "Armenia",
     Experiencia: "10 Años",
     Educacion: [
        {
          Nombre: "Sebastián",
          Institucion: "Fundanza",
          Fecha_Inicio: new Date(),
          Fecha_Fin: new Date()
        }
      ],
      Url_Foto_Perfil: "ichbineinmann.24",
      Url_Video_Presentacion: "wirbieneinemanner.77",
      Redes_Sociales: [
        {
          Nombre: "ichwilleinehundin",
          Url: "pwihrefiugf"
          
        }
      ]
   },
   {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos:[
       {
          Nombre: "Guitarra",
          Nivel: "Avanzado"
       }
     ],
     GenerosMusicales: "De todo",
     Pais: "Colombia",
     Ciudad: "Armenia",
     Experiencia: "10 Años",
     Educacion: [
        {
          Nombre: "Sebastián",
          Institucion: "Fundanza",
          Fecha_Inicio: new Date(),
          Fecha_Fin: new Date()
        }
      ],
      Url_Foto_Perfil: "ichbineinmann.24",
      Url_Video_Presentacion: "wirbieneinemanner.77",
      Redes_Sociales: [
        {
          Nombre: "ichwilleinehundin",
          Url: "pwihrefiugf"
          
        }
      ]
   },
   {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos:[
       {
          Nombre: "Guitarra",
          Nivel: "Avanzado"
       },
       {
        Nombre: "piano",
        Nivel: "Avanzado"
     }
     ],
     GenerosMusicales: "De todo",
     Pais: "Colombia",
     Ciudad: "Armenia",
     Experiencia: "10 Años",
     Educacion: [
        {
          Nombre: "Sebastián",
          Institucion: "Fundanza",
          Fecha_Inicio: new Date(),
          Fecha_Fin: new Date()
        }
      ],
      Url_Foto_Perfil: "ichbineinmann.24",
      Url_Video_Presentacion: "wirbieneinemanner.77",
      Redes_Sociales: [
        {
          Nombre: "ichwilleinehundin",
          Url: "pwihrefiugf"
          
        }
      ]
   },
   {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos:[
       {
          Nombre: "Guitarra",
          Nivel: "Avanzado"
       }
     ],
     GenerosMusicales: "De todo",
     Pais: "Colombia",
     Ciudad: "Armenia",
     Experiencia: "10 Años",
     Educacion: [
        {
          Nombre: "Sebastián",
          Institucion: "Fundanza",
          Fecha_Inicio: new Date(),
          Fecha_Fin: new Date()
        }
      ],
      Url_Foto_Perfil: "ichbineinmann.24",
      Url_Video_Presentacion: "wirbieneinemanner.77",
      Redes_Sociales: [
        {
          Nombre: "ichwilleinehundin",
          Url: "pwihrefiugf"
          
        }
      ]
   }, {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos:[
       {
          Nombre: "Guitarra",
          Nivel: "Avanzado"
       },
       {
        Nombre: "piano",
        Nivel: "Avanzado"
     }
     ],
     GenerosMusicales: "De todo",
     Pais: "Colombia",
     Ciudad: "Armenia",
     Experiencia: "10 Años",
     Educacion: [
        {
          Nombre: "Sebastián",
          Institucion: "Fundanza",
          Fecha_Inicio: new Date(),
          Fecha_Fin: new Date()
        }
      ],
      Url_Foto_Perfil: "ichbineinmann.24",
      Url_Video_Presentacion: "wirbieneinemanner.77",
      Redes_Sociales: [
        {
          Nombre: "ichwilleinehundin",
          Url: "pwihrefiugf"
          
        }
      ]
   }, {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos:[
       {
          Nombre: "Guitarra",
          Nivel: "Avanzado"
       }
     ],
     GenerosMusicales: "De todo",
     Pais: "Colombia",
     Ciudad: "Armenia",
     Experiencia: "10 Años",
     Educacion: [
        {
          Nombre: "Sebastián",
          Institucion: "Fundanza",
          Fecha_Inicio: new Date(),
          Fecha_Fin: new Date()
        }
      ],
      Url_Foto_Perfil: "ichbineinmann.24",
      Url_Video_Presentacion: "wirbieneinemanner.77",
      Redes_Sociales: [
        {
          Nombre: "ichwilleinehundin",
          Url: "pwihrefiugf"
          
        }
      ]
   }, {
    IdAuth: "1",
    Fecha_Nacimiento: new Date(),
    Instrumentos:[
       {
          Nombre: "Guitarra",
          Nivel: "Avanzado"
       },
       {
        Nombre: "piano",
        Nivel: "Avanzado"
     }
     ],
     GenerosMusicales: "De todo",
     Pais: "Colombia",
     Ciudad: "Armenia",
     Experiencia: "10 Años",
     Educacion: [
        {
          Nombre: "Sebastián",
          Institucion: "Fundanza",
          Fecha_Inicio: new Date(),
          Fecha_Fin: new Date()
        }
      ],
      Url_Foto_Perfil: "ichbineinmann.24",
      Url_Video_Presentacion: "wirbieneinemanner.77",
      Redes_Sociales: [
        {
          Nombre: "ichwilleinehundin",
          Url: "pwihrefiugf"
          
        }
      ]
   }
]


const Profile = () => {
  return (
    <>
    <div>Profile</div>

    {profile.map((profile1 , index)=>{
    return(
      <div key={index}>
      <p>{profile1.Educacion.map((name, index2)=>{
        return(
          <span key={index2}>
            <p>{name.Nombre}</p>
          </span>
        )
      })}</p>
      <p>{profile1.Experiencia}</p>
      <p className='flex'>{profile1.Instrumentos.map((instrumentos, inst)=>{
          return(
            <span key={inst}>
              <p>{instrumentos.Nombre},</p>
            </span>
        ) 
      }
    )
  }</p>
      </div>
     )
    }
  )
}
    </>
  )
}

export default Profile