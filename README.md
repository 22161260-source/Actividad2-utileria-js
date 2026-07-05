# Utilería.js

### Librería JavaScript funcional para validaciones de formularios

**¿Qué problema resuelve?**
Cada vez que se construye un formulario web hay que repetir el mismo código una y otra vez: validar que un correo tenga formato correcto, que un nombre no lleve números, que una contraseña sea segura, o calcular la edad a partir de una fecha de nacimiento. **Utilería.js** junta todas esas validaciones comunes en un solo archivo, sin frameworks ni dependencias, listo para usarse con una sola línea de `<script>`.

Incluye además dos utilidades extra para generar contraseñas seguras automáticamente y formatear cantidades como moneda.

---

## 📦 Instalación

No requiere instalación de paquetes ni build. Solo copia el archivo `js/utileria.js` a tu proyecto y agrégalo antes de tu propio script:

```html
<script src="utileria.js"></script>
```

Todas las funciones quedan disponibles globalmente (`validarCorreo`, `soloLetras`, etc.) listas para usarse en cualquier archivo `.js` de tu proyecto o directamente en un `<script>` dentro del HTML.

---

## 🚀 Uso

### 1. `validarCorreo(correo)`
Valida el formato de un correo electrónico.

```js
validarCorreo("ana@mail.com");   // true
validarCorreo("ana@mail");       // false
validarCorreo("ana.mail.com");   // false
```

### 2. `soloLetras(texto)`
Verifica que un texto solo tenga letras (incluye acentos, ñ y espacios).

```js
soloLetras("María José"); // true
soloLetras("Peña");       // true
soloLetras("Juan123");    // false
```

### 3. `validarLongitud(numero, maxLongitud)`
Valida que un número no exceda una cantidad máxima de dígitos.

```js
validarLongitud(5512345678, 10); // true
validarLongitud("123456789012", 10); // false
```

### 4. `calcularEdad(fechaNacimiento)`
Calcula la edad en años cumplidos a partir de una fecha.

```js
calcularEdad("2000-06-15"); // 26 (depende de la fecha actual)
```

### 5. `esMayorDeEdad(fechaNacimiento)`
Indica si una persona es mayor de edad (18+).

```js
esMayorDeEdad("2010-01-01"); // false
esMayorDeEdad("1990-05-20"); // true
```

### 6. `validarPassword(password)`
Exige mayúscula, minúscula, número, carácter especial y 8+ caracteres.

```js
validarPassword("Abcdef1!"); // true
validarPassword("abcdefgh"); // false
```

### 7. `generarPasswordSegura(longitud)` — función libre
Genera automáticamente una contraseña aleatoria que siempre cumple `validarPassword()`. Resuelve el problema de que a los usuarios les cuesta inventar una contraseña segura.

```js
const pass = generarPasswordSegura(12); // ej. "jCNemqr(5M2x"
validarPassword(pass); // true
```

### 8. `formatearMoneda(numero, moneda)` — función libre
Da formato de moneda legible (separador de miles, 2 decimales, símbolo).

```js
formatearMoneda(1234.5);        // "$1,234.50"
formatearMoneda(999, "USD");    // "$999.00"
```

---

## 🖥️ Integración en vivo

| Página | Qué hace |
|---|---|
| `index.html` | Formulario completo con validación en vivo de nombre, correo, teléfono, contraseña y fecha de nacimiento. Al elegir la fecha se abre un **modal** mostrando la edad calculada y si es mayor de edad. Al enviar el formulario, se muestra el resultado de cada validación en pantalla y en la consola del navegador (F12). |
| `login.html` | Formulario de acceso que usa `validarCorreo()` y `validarPassword()` en vivo y al enviar el formulario. |

---

## 📸 Capturas de pantalla

**Formulario con validaciones en vivo**

![Formulario](img/screenshot-form.png)

**Modal mostrando la edad calculada**

![Modal de edad](img/screenshot-modal.png)

**Consola del navegador mostrando el resultado de las validaciones**

![Consola de resultados](img/screenshot-consola.png)

**Login usando `validarCorreo()` y `validarPassword()`**

![Login](img/screenshot-login.png)

---

## 🎥 Video demo

📺 [Ver video demo (máx. 1 min)](AQUI_VA_EL_LINK_DEL_VIDEO)

---

## 🌐 Demo en vivo (GitHub Pages)

🔗 [Ver formulario, modal y login funcionando](AQUI_VA_EL_LINK_DE_GITHUB_PAGES)

🔗 [Repositorio en GitHub](AQUI_VA_EL_LINK_DEL_REPOSITORIO)

---

## 📁 Estructura del proyecto

```
/utileria
 ├── README.md
 ├── index.html
 ├── login.html
 ├── /css
 │    └── styles.css
 ├── /js
 │    └── utileria.js
 └── /img
      └── (capturas de pantalla)
```

---

## ✍️ Autor

(Tu nombre aquí) — Proyecto individual.
