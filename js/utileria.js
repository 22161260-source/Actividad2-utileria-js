
function validarCorreo(correo) {
  if (typeof correo !== "string") return false;

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(correo.trim());
}


function soloLetras(texto) {
  if (typeof texto !== "string" || texto.trim() === "") return false;

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

  return regex.test(texto);
}


function validarLongitud(numero, maxLongitud) {
  if (numero === null || numero === undefined) return false;
  if (typeof maxLongitud !== "number" || maxLongitud <= 0) return false;

  const soloDigitos = String(numero).replace(/\D/g, "");

  if (soloDigitos === "") return false;

  return soloDigitos.length <= maxLongitud;
}


function calcularEdad(fechaNacimiento) {
  const nacimiento = new Date(fechaNacimiento);

  if (isNaN(nacimiento.getTime())) return NaN;

  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  const noHaCumplidoAnios =
    hoy.getMonth() < nacimiento.getMonth() ||
    (hoy.getMonth() === nacimiento.getMonth() &&
      hoy.getDate() < nacimiento.getDate());

  if (noHaCumplidoAnios) edad--;

  return edad;
}


function esMayorDeEdad(fechaNacimiento) {
  const edad = calcularEdad(fechaNacimiento);
  if (isNaN(edad)) return false;
  return edad >= 18;
}


function validarPassword(password) {
  if (typeof password !== "string") return false;

  const tieneMinimo8 = password.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneMinuscula = /[a-z]/.test(password);
  const tieneNumero = /[0-9]/.test(password);
  const tieneEspecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

  return (
    tieneMinimo8 && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial
  );
}


function generarPasswordSegura(longitud = 12) {
  const longitudFinal = longitud < 8 ? 8 : longitud;

  const mayusculas = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const minusculas = "abcdefghijkmnpqrstuvwxyz";
  const numeros = "0123456789";
  const especiales = "!@#$%^&*()_+-=";

  const todos = mayusculas + minusculas + numeros + especiales;

  let password = [
    mayusculas[Math.floor(Math.random() * mayusculas.length)],
    minusculas[Math.floor(Math.random() * minusculas.length)],
    numeros[Math.floor(Math.random() * numeros.length)],
    especiales[Math.floor(Math.random() * especiales.length)],
  ];

  for (let i = password.length; i < longitudFinal; i++) {
    password.push(todos[Math.floor(Math.random() * todos.length)]);
  }

  for (let i = password.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [password[i], password[j]] = [password[j], password[i]];
  }

  return password.join("");
}


function formatearMoneda(numero, moneda = "MXN") {
  const valor = Number(numero);
  if (isNaN(valor)) return "";

  try {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: moneda,
    }).format(valor);
  } catch (error) {
    return `$${valor.toFixed(2)}`;
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    validarCorreo,
    soloLetras,
    validarLongitud,
    calcularEdad,
    esMayorDeEdad,
    validarPassword,
    generarPasswordSegura,
    formatearMoneda,
  };
}
