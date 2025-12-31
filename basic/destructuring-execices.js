let elementos = ["agua", "fuego", "tierra", "aire", "metal"];

console.log(elementos);

let [element1, , , , element5, elemento6 = "n/a"] = elementos;

console.log(element1);
console.log(element5);
console.log(elemento6);

let persona = {
  nombre: "Juan",
  edad: 25,
  activo: true,
  habilidades: ["JS", "HTML", "CSS"],
  direccion: {
    ciudad: "Bogotá",
    pais: "Colombia",
  },
};

console.log(persona);

let { nombre, edad } = persona;

console.log(nombre);
console.log(edad);

let {
  direccion: { ciudad, pais },
} = persona;

let numeros = [4, 8, 15, 16, 23, 42];
console.log(numeros);

let arrNew = [...numeros, ...elementos];
console.log(arrNew);

let arrDu = [...arrNew];

const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2022,
  encendido: false,
  motor: {
    tipo: "híbrido",
    cilindros: 4,
  },
};

let newObj = { ...coche, ...persona };

console.log(newObj);

let dualObj = { ...newObj };

console.log(dualObj)