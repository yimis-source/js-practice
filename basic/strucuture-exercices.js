let animalArray = ["oso", "tigre", "panda", "caballo", "perro"];
console.log(animalArray);

animalArray.push("gato");
animalArray.unshift("pollo");

console.log(animalArray);

animalArray.splice(2, 1);
console.log(animalArray);

let bookSet = new Set([
  "Elogio de la guerra",
  "Cien añós de soledad",
  "Biblia",
  "Coran",
  "Kamasutra",
]);

console.log(bookSet);

bookSet.add("Biblia");
bookSet.add("El final del tiempo");
console.log(bookSet);

bookSet.delete("Biblia");
console.log(bookSet);

let mounthMap = new Map([
  [1, "enero"],
  [2, "febrero"],
  [3, "marzo"],
  [4, "abril"],
  [5, "mayo"],
  [6, "junio"],
  [7, "julio"],
]);
console.log(mounthMap);

if (mounthMap.has(5)) {
  console.log(mounthMap.get(5));
}

mounthMap.set(13, ["Junio", "Julio", "Agosto"]);
console.log(mounthMap);

let arr = ["pan", "agua", 42, true, "gato"];
console.log(arr);

let sets = new Set(arr);
console.log(sets);

let map = new Map([[1, sets]]);
console.log(map);
