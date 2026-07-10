const prompt = require("prompt-sync")();

function Vehiculo(marca, color, energia, cilindraje, modelo){
this.marca = marca;
this.color = color;
this.energia = energia;
this.cilindraje = cilindraje;
this.modelo = modelo;

this.encendido = false; 

    this.encenderCarro = function () {
        if (!this.encendido) {
        this.encendido = true;
        console.log("Carro encendido");
    } else {
               console.log("el carro está encendido");
    }
}
this.frenar = function () {
    console.log("El carro está frenado.");
}
this.recargar = function () {
    console.log("El vehículo ha sido recargado.");
}
}

function crearVehiculo(){
const marca = prompt("Ingrese la marca: ");
const color = prompt("Ingrese el color: ");
const energia = prompt("Ingrese el tipo de energía: ");
const cilindraje = prompt("Ingrese el cilindraje: ");
const modelo = prompt("Ingrese el modelo: ");

return new Vehiculo (
marca,
color,
energia,
cilindraje,
modelo
);

}

const carro1 = crearVehiculo();
carro1.encenderCarro();
carro1.frenar();
carro1.recargar();
console.log(carro1);

const carro2 = crearVehiculo();
carro2.encenderCarro();
carro2.frenar();
carro2.recargar();
console.log(carro2);

const carro3 = crearVehiculo();
carro3.encenderCarro();
carro3.frenar();
carro3.recargar();
console.log(carro3);

