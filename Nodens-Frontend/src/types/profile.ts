export type InstrumentoT = {
    nombre: String;
    nivel: String;
  };
  
  export type ProfileT = {
    IdAuth ?: string;
    fecha_nacimiento: Date;
    Name: string;
    Lastname: string;
    telefono: string;
    descripcion: string;
    instrumentos: InstrumentoT[];
    generosMusicales: String;
    pais: String;
    ciudad: String;
    experiencia: String;
    educacion: [
      {
        nombre: String;
        institucion: String;
        fecha_inicio: Date;
        fecha_fin: Date;
      }
    ];
    url_foto_perfil: String;
    url_video_presentacion: String;
    redes_sociales: [
      {
        nombre: String;
        url: String;
      }
    ];
  };
