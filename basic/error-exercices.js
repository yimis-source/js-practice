function div(a, b) {
  if (b == 0) {
    throw new Error("puro numero negativo mano nose puede");
  }
  return a / b;
}
try {
  console.log(div(2, 0));
} catch (err) {
  console.log("error hp:" + err);
}
