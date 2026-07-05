# Utilería.js

### Librería JavaScript funcional para validaciones de formularios

**¿Qué problema resuelve?**
Cada vez que se construye un formulario web hay que repetir el mismo código una y otra vez: validar que un correo tenga formato correcto, que un nombre no lleve números, que una contraseña sea segura, o calcular la edad a partir de una fecha de nacimiento. **Utilería.js** junta todas esas validaciones comunes en un solo archivo, sin frameworks ni dependencias, listo para usarse con una sola línea de `<script>`.

Incluye además dos utilidades extra para generar contraseñas seguras automáticamente y formatear cantidades como moneda.

---

## 📦 Instalación

```html
<script src="js/utileria.js"></script>
```

---

## 🚀 Uso

### `validarCorreo(correo)`
```js
validarCorreo("ana@mail.com");   // true
validarCorreo("ana@mail");       // false
```

### `soloLetras(texto)`
```js
soloLetras("María José"); // true
soloLetras("Juan123");    // false
```

### `validarLongitud(numero, maxLongitud)`
```js
validarLongitud(5512345678, 10); // true
```

### `calcularEdad(fechaNacimiento)`
```js
calcularEdad("2000-06-15"); // 26
```

### `esMayorDeEdad(fechaNacimiento)`
```js
esMayorDeEdad("2010-01-01"); // false
```

### `validarPassword(password)`
```js
validarPassword("Abcdef1!"); // true
```

### `generarPasswordSegura(longitud)` — función libre
```js
const pass = generarPasswordSegura(12);
validarPassword(pass); // true
```

### `formatearMoneda(numero, moneda)` — función libre
```js
formatearMoneda(1234.5); // "$1,234.50"
```

---

## 🖥️ Integración

- `index.html`: formulario con validaciones en vivo + modal de edad
- `login.html`: usa `validarCorreo()` y `validarPassword()`

---

## 🌐 Demo en vivo

🔗 [GitHub Pages](AQUI_VA_EL_LINK_DE_GITHUB_PAGES)
🔗 [Repositorio](AQUI_VA_EL_LINK_DEL_REPOSITORIO)

---

## ✍️ Autor
(Tu nombre aquí)