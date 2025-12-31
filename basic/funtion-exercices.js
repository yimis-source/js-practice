suma = (a, b) => console.log(a + b);
suma(3, 4);

const numeros = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 100) + 1,
);

function mayor(arr) {
  let mayor = -99999999999;
  for (i of arr) {
    if (i > mayor) {
      mayor = i;
    }
  }
  return mayor;
}

console.log(mayor(numeros));

let str = "mano ayudame porfavor uwu";
function vocalCount(str) {
  let b = 0;
  for (i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      b++;
    }
  }
  return b;
}

console.log(vocalCount(str));

const strings = ["hola", "mundo", "javascript", "programación", "arrays"];

function upperArr(strArr) {
  let a = [];
  for (i of strArr) {
    a.push(i.toUpperCase());
  }
  return a;
}
console.log(upperArr(strings));

function primo(n) {
  if (n <= 1) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primo(434));

const arr1 = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 100) + 1,
);
const arr2 = Array.from(
  { length: 100 },
  () => Math.floor(Math.random() * 100) + 1,
);
function comun(arr1, arr2) {
  let a = [];
  for (i of arr1) {
    if (arr2.includes(i)) {
      a.push(i);
    }
  }
  return a;
}

console.log(comun(arr1, arr2));

function sumArr(arrn) {
  let a = 0;
  for (i of arrn) {
    if (i % 2 == 0) {
      a += i;
    }
  }
  return a;
}

console.log(
  sumArr(
    Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1),
  ),
);

function squareNum(arrn) {
  let a = [];
  for (i of arrn) {
    a.push(i ** 2);
  }
  return a;
}

console.log(squareNum(arr1));

function invStr(str) {
  let a = [];
  for (i of str.split(" ")) {
    a.unshift(i);
  }
  return a;
}

console.log(invStr(str).join(" "));

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}
console.log(factorial(6));
