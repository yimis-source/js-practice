let numeros = [1, 4, 7, 10, 15, 21, 30];

let divide = numeros.map((Element) => Element / 2);
let primeNumber = numeros.filter(
  (n) =>
    n > 1 &&
    !Array.from({ length: n - 2 }, (_, i) => i + 2).some((i) => n % i == 0),
);

let multiply = numeros.reduce((result, actual) => actual * result);
console.log(divide);
console.log(primeNumber);
console.log(multiply);

let evenNumberSquered = numeros.map((n) => n ** 2).filter((n) => n % 2 == 0);

console.log(evenNumberSquered);

const inventarios = [["espada", "escudo"], ["poción"], ["arco", "flechas"]];

console.log(inventarios.flat());

const estudiantes = [
  { nombre: "Ana", materias: ["Mate", "Fisica"] },
  { nombre: "Luis", materias: ["Historia"] },
  { nombre: "Sofia", materias: ["Quimica", "Biologia"] },
];

const materias = estudiantes.flatMap((e) => e.materias);

console.log(materias);

let numeros1 = [42, 7, 19, 3, 88, 14, 56, 1, 73, 9];

console.log(numeros1.sort((a, b) => b - a));

const setA = new Set([1, 2, 3, 4, 5, 6]);
const setB = new Set([4, 5, 6, 7, 8, 9]);

let setC = new Set([...setA, ...setB]);
console.log(setC);

let setD = new Set([...setA].filter((n) => setB.has(n)));
console.log(setD);
let setE = new Set([...setA].filter((n) => !setB.has(n)));
console.log(setE);

setD.forEach((n) => console.log(n));
setE.forEach((n) => console.log(n));

const usuarios = new Map();

usuarios.set(1, {
  nombre: "Juan",
  edad: 25,
  email: "juan@email.com",
});

usuarios.set(2, {
  nombre: "Maria",
  edad: 30,
  email: "maria@email.com",
});

usuarios.set(3, {
  nombre: "Carlos",
  edad: 22,
  email: "carlos@email.com",
});

console.log(usuarios);

usuarios.forEach((n) => console.log(n));

console.log(usuarios.values());

let nombres = Array.from(usuarios.values()).map((u) => u.nombre);
console.log(nombres);

const emailsMayores = new Set(
  [...usuarios.values()].filter((u) => u.edad >= 18).map((u) => u.email),
);

console.log(emailsMayores);