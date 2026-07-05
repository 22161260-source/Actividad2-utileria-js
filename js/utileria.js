/**
 * ============================================================================
 *  UTILERÍA.JS
 *  Librería JavaScript funcional para validaciones y utilidades comunes
 *  en formularios (correo, texto, contraseñas, edad, etc.)
 *
 *  Sin frameworks. Sin dependencias. Sin componentes visuales.
 *  Solo funciones puras que reciben datos y regresan un resultado.
 *
 *  Autor: (tu nombre aquí)
 *  Licencia: MIT
 * ============================================================================
 */

/* ============================================================================
 * SECCIÓN OBLIGATORIA
 * ========================================================================== */

/**
 * validarCorreo
 * --------------------------------------------------------------------------
 * Valida que un texto tenga el formato básico de un correo electrónico:
 * usuario@dominio.extensión
 *
 * @param {string} correo - Cadena de texto a validar como correo.
 * @returns {boolean} true si el formato es válido, false si no lo es.
 *
 * @example
 * validarCorreo("ana@mail.com");   // true
 * validarCorreo("ana@mail");       // false
 * validarCorreo("ana.mail.com");   // false
 */
function validarCorreo(correo) {
  if (typeof correo !== "string") return false;

  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return regex.test(correo.trim());
}

/**
 * soloLetras
 * --------------------------------------------------------------------------
 * Verifica que un texto contenga únicamente letras (mayúsculas y
 * minúsculas), incluyendo vocales acentuadas (á, é, í, ó, ú), la ñ/Ñ,
 * la diéresis (ü/Ü) y espacios entre palabras.
 *
 * @param {string} texto - Cadena de texto a validar.
 * @returns {boolean} true si solo contiene letras (y espacios), false si no.
 *
 * @example
 * soloLetras("María José");   // true
 * soloLetras("Peña");         // true
 * soloLetras("Juan123");      // false
 * soloLetras("Ana_Luisa");    // false
 */
function soloLetras(texto) {
  if (typeof texto !== "string" || texto.trim() === "") return false;

  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/;

  return regex.test(texto);
}

/**
 * validarLongitud
 * --------------------------------------------------------------------------
 * Valida que un número (o cadena numérica) no exceda una cantidad máxima
 * de dígitos. Útil para validar teléfonos, tarjetas, códigos postales, etc.
 *
 * @param {number|string} numero - Número o cadena numérica a validar.
 * @param {number} maxLongitud - Cantidad máxima de dígitos permitidos.
 * @returns {boolean} true si la cantidad de dígitos es <= maxLongitud.
 *
 * @example
 * validarLongitud(5512345678, 10); // true  (10 dígitos)
 * validarLongitud("123456789", 8); // false (9 dígitos, excede el máximo)
 * validarLongitud(12, 5);          // true
 */
function validarLongitud(numero, maxLongitud) {
  if (numero === null || numero === undefined) return false;
  if (typeof maxLongitud !== "number" || maxLongitud <= 0) return false;

  const soloDigitos = String(numero).replace(/\D/g, "");

  if (soloDigitos === "") return false;

  return soloDigitos.length <= maxLongitud;
}

/**
 * calcularEdad
 * --------------------------------------------------------------------------
 * Calcula la edad en años cumplidos a partir de una fecha de nacimiento.
 *
 * @param {string|Date} fechaNacimiento - Fecha de nacimiento (formato
 *        "YYYY-MM-DD" o un objeto Date).
 * @returns {number} Edad en años cumplidos. Regresa NaN si la fecha es inválida.
 *
 * @example
 * calcularEdad("2000-06-15"); // depende de la fecha actual, ej. 26
 */
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

/**
 * esMayorDeEdad
 * --------------------------------------------------------------------------
 * Determina si una persona es mayor de edad (18 años o más) a partir de
 * su fecha de nacimiento. Internamente reutiliza calcularEdad().
 *
 * @param {string|Date} fechaNacimiento - Fecha de nacimiento.
 * @returns {boolean} true si la persona tiene 18 años o más.
 *
 * @example
 * esMayorDeEdad("2010-01-01"); // false (menor de edad)
 * esMayorDeEdad("1990-05-20"); // true
 */
function esMayorDeEdad(fechaNacimiento) {
  const edad = calcularEdad(fechaNacimiento);
  if (isNaN(edad)) return false;
  return edad >= 18;
}

/**
 * validarPassword
 * --------------------------------------------------------------------------
 * Valida que una contraseña cumpla con reglas mínimas de seguridad:
 *  - Al menos una letra mayúscula
 *  - Al menos una letra minúscula
 *  - Al menos un número
 *  - Al menos un carácter especial (!@#$%^&*()_+-=[]{};':"|,.<>/?)
 *  - Longitud mínima de 8 caracteres
 *
 * @param {string} password - Contraseña a validar.
 * @returns {boolean} true si cumple con todas las reglas.
 *
 * @example
 * validarPassword("Abcdef1!");   // true
 * validarPassword("abcdefgh");   // false (sin mayúscula, número ni especial)
 * validarPassword("Ab1!");       // false (menos de 8 caracteres)
 */
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

/* ============================================================================
 * SECCIÓN LIBRE (funciones propias)
 * ========================================================================== */

/**
 * generarPasswordSegura
 * --------------------------------------------------------------------------
 * PROBLEMA QUE RESUELVE: a los usuarios les cuesta trabajo inventar una
 * contraseña que cumpla las reglas de seguridad exigidas por
 * validarPassword(). Esta función genera automáticamente una contraseña
 * aleatoria que SIEMPRE cumple esas reglas (mayúscula, minúscula, número,
 * carácter especial y longitud mínima).
 *
 * @param {number} [longitud=12] - Longitud deseada de la contraseña
 *        (mínimo 8; si se pide menos, se usa 8 automáticamente).
 * @returns {string} Contraseña aleatoria seguro-garantizada.
 *
 * @example
 * generarPasswordSegura();     // ej. "aX9!kLp2Qw#T"
 * generarPasswordSegura(8);    // ej. "bT4$mZaQ"
 */
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

/**
 * formatearMoneda
 * --------------------------------------------------------------------------
 * PROBLEMA QUE RESUELVE: mostrar cantidades numéricas en formularios
 * (precios, totales, montos) de forma legible para el usuario, con
 * separador de miles, dos decimales y símbolo de moneda.
 *
 * @param {number} numero - Cantidad numérica a formatear.
 * @param {string} [moneda="MXN"] - Código de moneda ISO 4217
 *        (ej. "MXN", "USD", "EUR").
 * @returns {string} Cantidad formateada como moneda, o cadena vacía si
 *        el valor recibido no es un número válido.
 *
 * @example
 * formatearMoneda(1234.5);          // "$1,234.50"
 * formatearMoneda(999, "USD");      // "$999.00"
 * formatearMoneda(2500.999, "EUR"); // "2,501.00 €" (depende del navegador)
 */
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

/* ============================================================================
 * EXPORTACIÓN (para que funcione tanto en <script> plano como en módulos)
 * ========================================================================== */
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