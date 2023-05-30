import { InstrumentoT } from "./profile";

export type MusicianT = {
  IdAuth?: string;
  fecha_nacimiento: Date;
  Name: string;
  Lastname: string;
  descripcion: string;
  instrumentos: InstrumentoT[];
  generosMusicales: string[];
  genero: string;
  telefono: string;
  pais: string;
  ciudad: string;
  experiencia: string;
  educacion: {
    nombre: string;
    institucion: string;
    fecha_Inicio: Date;
    fecha_Fin: Date;
  }[];
  url_foto_perfil: string;
  url_video_presentacion: string[];
  redes_sociales: {nombre: string;url: string}[];
};
