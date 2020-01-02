export class User {
    constructor(
        private docid: number,
        private nombres: string,
        private apellidos: string,
        private email: string,
        private clave: string,
        private celular: string,
        private tel_fijo: string,
        private fecha_nacimiento: Date,
        private direccion: string,
        private contacto: string,
        private negocio: number
    ){}
}