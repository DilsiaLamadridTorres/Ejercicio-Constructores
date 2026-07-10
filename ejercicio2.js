function Mascota(nombre, especie, edad, peso) {
  this.nombre = nombre;
  this.especie = especie;
  this.edad = edad;
  this.peso = peso;

  this.presentarse = function () {
    return `El nombre de la mascota es ${this.nombre} 
    su especie es ${this.especie} 
    que tiene ${this.edad} de edad 
    y su peso es ${this.peso} `

  }

}

const mascota1 = new Mascota("Pinky", "Hanster", "1 año", "200gr");
console.log(mascota1.presentarse());

const mascota2 = new Mascota("Orejas", "Conejo", "2 año", "1 kg");
console.log(mascota2.presentarse());

const mascota3 = new Mascota("Grace", "Gato", "5 año", "3 kg");
console.log(mascota3.presentarse());