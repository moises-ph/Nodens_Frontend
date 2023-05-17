export type InstrumentoT = {
    Nombre: String;
    Nivel: String;
  };
  
  export type ProfileT = {
    IdAuth ?: string;
    Fecha_Nacimiento: Date;
    Instrumentos: InstrumentoT[];
    GenerosMusicales: String;
    Pais: String;
    Ciudad: String;
    Experiencia: String;
    Educacion: [
      {
        Nombre: String;
        Institucion: String;
        Fecha_Inicio: Date;
        Fecha_Fin: Date;
      }
    ];
    Url_Foto_Perfil: String;
    Url_Video_Presentacion: String;
    Redes_Sociales: [
      {
        Nombre: String;
        Url: String;
      }
    ];
  };