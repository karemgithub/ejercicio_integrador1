class Paciente {
    private nombre: string
    private apellido: string
    private CI: number
    private sala: number
    private numero_cama: number
    private edad: number
    private municipio: string
    private sexo: string

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



}