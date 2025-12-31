function operation(...num) {
  return function () {
    let a = 0;
    for (i of num) {
      a += i;
    }
    console.log(a);
  };
}

let suma= operation(23,4,2,3,3)
suma()

function multiply(a){
  return function(b){
    return function(c){
      return a * b* c
    }
  }
}

let a=multiply(3)(5)(1)

console.log(a)


function power(a,b){
  if (b==0){
    return 1
  }
  return a*power(a,b-1)
}

console.log(power(2,3))


function counter(){
  let count = 0
  return {
    increment : function(){
      return ++count
    },
    decrement : function() {
      return --count
    },
    getValue : function() {
      return count
    }
    
    }
}

let count1 = counter();
console.log(count1.getValue())

console.log(count1.increment())
console.log(count1.increment())


function sumManyTimes(multiplier,...nums){
 let a=0
  for( i of nums){
    a+=i
  }
  
  return a*multiplier
}

console.log(sumManyTimes(3,54,35,345,345,34535))

function sum(...a){
  let b=0
  for (i of a){
    b+=i
  }
  return b
}
function processResult(result){
  console.log(result)
}
function sumCallback(callback,data) {
  const result = sum(...data)
  callback(result)
}


function partialSum(a){
  return function(b,c){
    return sum(a,b,c)
  }
}

let sumWith = partialSum(5)

console.log(sumWith(6,1))

const idk = (...a)=> a.map( a=>a+1)


console.log(idk(1,2))



function hola(name){

  function chao(){
    console.log(`chao ${this.name}`)
  }
  chao()
}


hola('mano')