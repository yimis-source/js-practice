// 1. error
function dividir(a, b) {
  if (b === 0) {
    console.error("Error: no se puede dividir por cero");
    return;
  }
  return a / b;
}

// 2. warn
function verificarEdad(edad) {
  if (edad < 18) {
    console.warn("Advertencia: eres menor de edad");
  }
}

// 3. info
function mostrarInfo(usuario) {
  console.info("Información del usuario:", usuario);
}

// 4. table
function mostrarTabla() {
  const personas = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 }
  ];
  console.table(personas);
}

// 5. group
function ejemploGroup() {
  console.group("Grupo principal");
  console.log("Mensaje 1");
  console.log("Mensaje 2");
  console.groupEnd();
}

// 6. time
function medirTiempo() {
  console.time("Proceso");
  for (let i = 0; i < 1e6; i++) {}
  console.timeEnd("Proceso");
}

// 7. assert
function validarPositivo(num) {
  console.assert(num > 0, "El número no es positivo:", num);
}

// 8. count
function contarLlamadas() {
  console.count("Función llamada");
}

// 9. trace
function funcionA() {
  funcionB();
}
function funcionB() {
  console.trace("Seguimiento de ejecución");
}

// 10. clear
function limpiarConsola() {
  console.clear();
}
