function Libro(nombreLibro, seccion, estudianteNombre) {
    this.nombreLibro = nombreLibro;
    this.seccion = seccion;
    this.estudianteNombre = estudianteNombre;
    this.prestado = false;

    this.prestar = function () {
        if (!this.prestado) {
            this.prestado = true;
            console.log("Libro prestado");
        } else {
            console.log("El libro ya está prestado");
        }
    }
    this.devolver = function () {
        if (this.prestado) {
            this.prestado = false;
             console.log("Libro devuelto");
        }
        else {
            console.log("Este libro ya fue devuelto");
        }
    }
}
const libro = new Libro("Las mil y ua noche", "literatura", "Juan");

libro.prestar();
console.log(libro);
libro.devolver();
