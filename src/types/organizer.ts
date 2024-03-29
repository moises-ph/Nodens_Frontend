export type OrganizerT = {
    IdAuth?: number,
    Name: string,
    Lastname: string,
    fecha_nacimiento : string,
    telefono: string | number,
    _id?: {$oid: string},
    nombre_empresa : string,
    descripcion_empresa: string,
    pais: string,
    ciudad: string,
    url_logo ?: string,
    url_foto_perfil: string,
	genero: string,
    redes_sociales: {nombre:string, url: string}[]
}