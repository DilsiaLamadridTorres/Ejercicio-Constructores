function Estudiante(nombre, grado, materia, nota){
this.nombre = nombre;
this.grado = grado;
this.materia = materia;
this.nota = nota;

if (nota >= 3 ) {
    this.aprobado = true;
} else {
    this.aprobado = false;
}

this.mostrarResultado = function (){
if (this.aprobado){ 
    console.log("aprobado");
    }
    else {
        console.log("No aprobado");
    }
}
}
const estudiante1 = new Estudiante("Pedro", "6°","Español", 4);


const estudiante2 = new Estudiante("Julian", "5°","Matematicas", 2);


const estudiante3 = new Estudiante("Maria", "7°","Inglés", 5);


const estudiante4 = new Estudiante("Sofia", "8°","Física",3);


estudiante1.mostrarResultado();
estudiante2.mostrarResultado();
estudiante3.mostrarResultado();
estudiante4.mostrarResultado();