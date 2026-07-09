function Libro(nombreLibro, seccion, estudianteNombre){
this.nombreLibro = nombreLibro;
this.seccion = seccion;
this.estudianteNombre = estudianteNombre;
this.prestado = false;

this.prestar = function (){
if (!this.prestado) {
    this.prestado = true;
} else {
    console.log("El libro ya está prestado");
}

this.devolver = function (){
if (!this.prestado){ 
    console.log("prestar libro");
    }
    else {
        console.log("Este libro NO está disponible");
    }


const libro = new Libro();