import { InstrumentoT } from "./profile";

export type MusicianT = {
  fecha_nacimiento: Date;
  instrumentos: InstrumentoT[];
  generosMusicales: String[];
  pais: String;
  ciudad: String;
  experiencia: String;
  educacion: {
    nombre: String;
    institucion: String;
    fecha_Inicio: Date;
    fecha_Fin: Date;
  }[];
  url_foto_perfil: String;
  url_video_presentacion: String;
  redes_rociales: {nombre: String;url: String}[];
};