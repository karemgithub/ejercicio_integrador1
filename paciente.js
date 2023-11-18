//===========================================================
// CLASE PACIENTE
//===========================================================
var Paciente = /** @class */ (function () {
    //Constructor 
    function Paciente(nombre, apellido, carne_identidad, sala, numero_cama, edad, municipio, sexo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.CI = carne_identidad;
        this.sala = sala;
        this.numero_cama = numero_cama;
        this.edad = edad;
        this.municipio = municipio;
        this.sexo = sexo;
    }
    //===========================================================
    // metodos de acceso y modificación
    //===========================================================   
    // Get y Set Nombre
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.setNombre = function (n) {
        this.nombre = n;
    };
    //===============================================================
    // Get y Set Apellido
    Paciente.prototype.getApellido = function () {
        return this.apellido;
    };
    Paciente.prototype.setApellidos = function (a) {
        this.apellido = a;
    };
    //===============================================================
    // Get y Set Carne_Identidad
    Paciente.prototype.getCI = function () {
        return this.CI;
    };
    Paciente.prototype.setCI = function (ci) {
        this.CI = ci;
    };
    //===============================================================
    // Get y Set Sala
    Paciente.prototype.getSala = function () {
        return this.sala;
    };
    Paciente.prototype.setSala = function (s) {
        this.sala = s;
    };
    //===============================================================
    // Get y Set Numero de cama
    Paciente.prototype.getNumeroCama = function () {
        return this.numero_cama;
    };
    Paciente.prototype.setNumeroCama = function (nc) {
        this.numero_cama = nc;
    };
    //===============================================================
    // Get y Set Edad
    Paciente.prototype.getEdad = function () {
        return this.edad;
    };
    Paciente.prototype.setEdad = function (e) {
        this.edad = e;
    };
    //===============================================================
    // Get y Set Municipio
    Paciente.prototype.getMunicipio = function () {
        return this.municipio;
    };
    Paciente.prototype.setMunicipio = function (m) {
        this.municipio = m;
    };
    //===============================================================
    // Get y Set Sexo
    Paciente.prototype.getSexo = function () {
        return this.sexo;
    };
    Paciente.prototype.setSexo = function (sex) {
        this.sexo = sex;
    };
    return Paciente;
}());
//===========================================================
// CLASE HOSPITAL
//===========================================================
var Hospital = /** @class */ (function () {
    function Hospital(list_paciente) {
        this.list_pacientes = list_paciente;
    }
    // ===============================================================
    // Un listado ordenado alfabéticamente de los pacientes ingresados en la sala que se solicite (método sort()).
    // ===============================================================
    Hospital.prototype.ListaOrdenada_X_Sala = function (sala) {
        var lista = [];
        for (var i = 0; i < this.list_pacientes.length; i++) {
            if (this.list_pacientes[i].getSala() == sala) {
                lista.push(this.list_pacientes[i].getNombre());
            }
        }
        return lista.sort();
    };
    // ===============================================================
    // El total, por sexo, de los ingresados.
    // ===============================================================
    Hospital.prototype.Total_PacienteXsexo = function (sexo) {
        var cant = 0;
        for (var i = 0; i < this.list_pacientes.length; i++) {
            if (this.list_pacientes[i].getSexo() == sexo) {
                cant++;
            }
        }
        return cant;
    };
    // ===============================================================
    // Listado con los pacientes con edad superior a la media de los ingresados.
    // ===============================================================
    Hospital.prototype.Promedio_pacientes = function () {
        var suma = 0.0;
        for (var i = 0; i < this.list_pacientes.length; i++) {
            suma = suma + this.list_pacientes[i].getEdad();
        }
        return suma / this.list_pacientes.length;
    };
    Hospital.prototype.Paciente_Edad_Superior = function () {
        var listNom = [];
        for (var i = 0; i < this.list_pacientes.length; i++) {
            if (this.list_pacientes[i].getEdad() > this.Promedio_pacientes()) {
                listNom.push(this.list_pacientes[i].getNombre());
            }
        }
        return listNom.sort();
    };
    // ===============================================================
    // Determinar si un paciente está ingresado, conocido el número de su carné de identidad.
    // ===============================================================
    Hospital.prototype.Paciente_Ingresado = function (carneI) {
        for (var i = 0; i < this.list_pacientes.length; i++) {
            if (this.list_pacientes[i].getCI() == carneI) {
                return true;
            }
        }
        return false;
    };
    // ===============================================================
    // El o los  municipios de donde proceden la mayor cantidad de ingresos.
    // ===============================================================
    Hospital.prototype.Municipio_X_Ingreso = function () {
        var aux = [];
        var contador = 0;
        var contadores = [];
        var mayor = 0;
        var municipios = [];
        for (var i = 0; i < this.list_pacientes.length; i++) {
            // lista.add(this.list_pacientes[i].getMunicipio())
            municipios[i] = this.list_pacientes[i].getMunicipio();
        }
        var l1 = new Set(municipios);
        var lista = Array.from(l1.values());
        for (var i = 0; i < lista.length; i++) { // recorro el tamaño de la lista de los municipios
            contador = 0;
            for (var j = 0; j < this.list_pacientes.length; j++) {
                if (lista[i] == this.list_pacientes[j].getMunicipio()) {
                    contador++;
                }
            }
            contadores[i] = contador;
        }
        for (var i = 0; i < lista.length; i++) {
            if (contadores[i] > mayor) {
                mayor = contadores[i];
            }
        }
        for (var i = 0; i < lista.length; i++) {
            if (contadores[i] == mayor) {
                aux.push(lista[i]);
            }
        }
        return aux;
        //return contadores;
        //console.log(lista[2])
    };
    return Hospital;
}());
var paciente1 = new Paciente("Karlos", "Hernandez", "88051236547", 8, 45, 35, "Palma", "M");
var paciente2 = new Paciente("María", "Soto", "53051236524", 1, 10, 70, "Santiago de Cuba", "F");
var paciente3 = new Paciente("Bernardo", "Pérez", "91051232547", 8, 11, 80, "Contramaestre", "M");
var paciente4 = new Paciente("Mariano", "Pereira", "60051236547", 1, 12, 70, "Contramaestre", "M");
var pacientes = [paciente1, paciente2, paciente3, paciente4];
var hospital = new Hospital(pacientes);
console.log(hospital.ListaOrdenada_X_Sala(8));
console.log("La cantidad de pacientes femenino es: " + hospital.Total_PacienteXsexo("F"));
console.log("La cantidad de pacientes masculino es: " + hospital.Total_PacienteXsexo("M"));
console.log(hospital.Paciente_Edad_Superior());
if (hospital.Paciente_Ingresado("88051236545") == true) {
    console.log("El paciente esta ingesado");
}
else
    console.log("El paciente no esta ingesado");
console.log("Los municipios con la mayor cantidad de pacientes son: " + hospital.Municipio_X_Ingreso());
//hospital.Municipio_X_Ingreso();
