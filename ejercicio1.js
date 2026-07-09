function Computador(marca, procesador, ram, precio){
this.marca = marca;
this.procesador = procesador;
this.ram = ram;
this.precio = precio;

}
 
const computador1 = new Computador("Lenovo", "AMD","4 GB","1200000");
console.log(computador1)

const computador2 = new Computador("Mac", "A1","8 GB","8000000");
console.log(computador2)

const computador3 = new Computador("ACER", "Ryzen 5","6 GB","1800000");
console.log(computador3)
