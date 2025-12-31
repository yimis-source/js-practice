for (let i = 1; i <= 20;i++){
  console.log(i);
}


let a =  0 ;
for (let i = 1; i <= 100;i++){
  a+=i
}
console.log(a);

for (let i = 2; i<= 50; i+=2 ){
  console.log(i)
}

let names = ["Juan", "María", "Carlos", "Ana", "Luis"];

for(i of names){
  console.log(i);
}

let word = "viva la vida buena"
let b = 0;
for (i of word){
  if (i=="a"||i=="e"||i=="i"||i=="o"||i=="u"){
    b++;
  }
}
console.log(b);


const nums = [1, 5, 10, 23, 42];
a=1
for(i of nums){
  a*=i
}
console.log(a);


for (let i = 1; i <= 10;i++){
  console.log(5 * i);
}

c=""
for (let i = word.length-1; i >= 0; i--){
  c += word[i];
}

console.log(c);
let fbn=[0,1]
for (let i = 1; i <= 9; i++){
  fbn.push(fbn[i]+fbn[i-1])
}

for ( i of fbn){
  console.log(i);
}

const numeros = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
d = [];
for(i of numeros){
  if (i>10){
    d.push(i);
  }
}

console.log(d)
