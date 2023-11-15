class Paciente {
    private nombre: string
    private apellido: string
    private CI: number
    private sala: number
    private numero_cama: number
    private edad: number
    private municipio: string
    private sexo: string

    //Constructor de la clase
    constructor(nombre: string, apellido: string, carne_identidad: number, sala: number, numero_cama: number, edad: number,
        municipio: string, sexo: string) {
        this.nombre = nombre
        this.apellido = apellido
        this.CI = carne_identidad
        this.sala = sala
        this.numero_cama = numero_cama
        this.edad = edad
        this.municipio = municipio
        this.sexo = sexo
    }
    //===========================================================
    // metodos de acceso y modificación
    //===============================================================
    // Get y Set Nombre
    public getNombre() {
        return this.nombre
    }

    public setNombre(n: string) {
        this.nombre = n
    }
    //===============================================================
    // Get y Set Apellido
    public getApellido() {
        return this.apellido
    }

    public setApellidos(a: string) {
        this.apellido = a
    }
    //===============================================================
    // Get y Set Carne_Identidad
    public getCI() {
        return this.CI
    }

    public setCI(ci: number) {
        this.CI = ci
    }

    //===============================================================
    // Get y Set Sala
    public getSala() {
        return this.sala
    }

    public setSala(s: number) {
        this.sala = s
    }
    //===============================================================
    // Get y Set Numero de cama
    public getNumeroCama() {
        return this.numero_cama
    }

    public setNumeroCama(nc: number) {
        this.numero_cama = nc
    }
    //===============================================================
    // Get y Set Edad
    public getEdad() {
        return this.edad
    }

    public setEdad(e: number) {
        this.edad = e
    }

    //===============================================================
    // Get y Set Municipio
    public getMunicipio() {
        return this.municipio
    }

    public setMunicipio(m: string) {
        this.municipio = m
    }
    //===============================================================
    // Get y Set Sexo
    public getSexo() {
        return this.sexo
    }

    public setSexo(sex: string) {
        this.sexo = sex
    }
}