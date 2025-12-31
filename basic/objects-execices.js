let car1={
  brand : 'toyota',
  model : 'Prado',
  year:  2016
}

console.log(car1.year);
car1.damage = 40;
console.log(car1);

delete car1.year;
car1.run = () => console.log('esta funcionando');

car1.run();

for( i in car1){
  console.log(i + ': ' + car1[i]);
}

