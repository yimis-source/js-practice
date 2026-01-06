function greet(name,callback){
 setTimeout(callback,2000,name)}

function sayHi(name) {
console.log(`Hola,${ name }`) }

greet('yimis',sayHi)