

//===========================================================
// CLASE PACIENTE
//===========================================================
class Paciente {
    private nombre: string
    private apellido: string
    private CI: string
    private sala: number
    private numero_cama: number
    private edad: number
    private municipio: string
    private sexo: string

    //Constructor 
    constructor(nombre: string, apellido: string, carne_identidad: string, sala: number,
        numero_cama: number, edad: number, municipio: string, sexo: string) {
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
    //===========================================================   

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

    public setCI(ci: string) {
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

//===========================================================
// CLASE HOSPITAL
//===========================================================

class Hospital {
    list_pacientes: Paciente[]
    constructor(list_paciente: Paciente[]) {
        this.list_pacientes = list_paciente
    }

    // ===============================================================
    // Un listado ordenado alfabéticamente de los pacientes ingresados en la sala que se solicite (método sort()).
    // ===============================================================
    public ListaOrdenada_X_Sala(sala: number): string[] {
        let lista: string[] = [];
        for (let i = 0; i < this.list_pacientes.length; i++) {
            if (this.list_pacientes[i].getSala() == sala) {
                lista.push(this.list_pacientes[i].getNombre())
            }
        }
        return lista.sort();
    }
    // ===============================================================
    // El total, por sexo, de los ingresados.
    // ===============================================================

    public Total_PacienteXsexo(sexo: string) {
        let cant: number = 0;
        for (let i = 0; i < this.list_pacientes.length; i++) {
            if (this.list_pacientes[i].getSexo() == sexo) {
                cant++;
            }
        }
        return cant;
    }

    // ===============================================================
    // Listado con los pacientes con edad superior a la media de los ingresados.
    // ===============================================================
    public Promedio_pacientes() {
        let suma: number = 0.0;
        for (let i = 0; i < this.list_pacientes.length; i++) {
            suma = suma + this.list_pacientes[i].getEdad();
        }
        return suma / this.list_pacientes.length;
    }

    public Paciente_Edad_Superior(): string[] {
        let listNom: string[] = [];
        for (let i = 0; i < this.list_pacientes.length; i++) {
            if (this.list_pacientes[i].getEdad() > this.Promedio_pacientes()) {
                listNom.push(this.list_pacientes[i].getNombre())
            }
        }
        return listNom.sort();
    }


    // ===============================================================
    // Determinar si un paciente está ingresado, conocido el número de su carné de identidad.
    // ===============================================================
    public Paciente_Ingresado(carneI: string) {
        for (let i = 0; i < this.list_pacientes.length; i++) {
            if (this.list_pacientes[i].getCI() == carneI) {
                return true;
            }
        }
        return false;
    }

    // ===============================================================
    // El o los  municipios de donde proceden la mayor cantidad de ingresos.
    // ===============================================================
    public Municipio_X_Ingreso() {
        let aux: string[] = [];
        let contador: number = 0;
        let contadores: number[] = [];
        let mayor: number = 0;
        let municipios: string[] = [];

        for (let i = 0; i < this.list_pacientes.length; i++) {
            // lista.add(this.list_pacientes[i].getMunicipio())
            municipios[i] = this.list_pacientes[i].getMunicipio();
        }

        let l1 = new Set(municipios);
        const lista = Array.from(l1.values())

        for (let i = 0; i < lista.length; i++) { // recorro el tamaño de la lista de los municipios
            contador = 0;
            for (let j = 0; j < this.list_pacientes.length; j++) {
                if (lista[i] == this.list_pacientes[j].getMunicipio()) {
                    contador++;
                }
            }
            contadores[i] = contador;
        }
        for (let i: number = 0; i < lista.length; i++) {
            if (contadores[i] > mayor) {
                mayor = contadores[i];

            }

        }
        for (let i: number = 0; i < lista.length; i++) {
           
            if (contadores[i] == mayor) {
                aux.push(lista[i]) ;
              
            }
        }
        return aux;
        //return contadores;
         //console.log(lista[2])
    }



}

let paciente1 = new Paciente("Karlos", "Hernandez", "88051236547", 8, 45, 35, "Palma", "M");
let paciente2 = new Paciente("María", "Soto", "53051236524", 1, 10, 70, "Santiago de Cuba", "F");
let paciente3 = new Paciente("Bernardo", "Pérez", "91051232547", 8, 11, 80, "Contramaestre", "M");
let paciente4 = new Paciente("Mariano", "Pereira", "60051236547", 1, 12, 70, "Contramaestre", "M");

let pacientes: Paciente[] = [paciente1, paciente2, paciente3, paciente4];

let hospital: Hospital = new Hospital(pacientes)

console.log(hospital.ListaOrdenada_X_Sala(8))

console.log("La cantidad de pacientes femenino es: " + hospital.Total_PacienteXsexo("F"))
console.log("La cantidad de pacientes masculino es: " + hospital.Total_PacienteXsexo("M"))

console.log(hospital.Paciente_Edad_Superior())

if (hospital.Paciente_Ingresado("88051236545") == true) {
    console.log("El paciente esta ingesado")
} else
    console.log("El paciente no esta ingesado")


console.log("Los municipios con la mayor cantidad de pacientes son: " + hospital.Municipio_X_Ingreso())
//hospital.Municipio_X_Ingreso();

