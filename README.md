# Utilería.js Vargas Vicente Ivonee Montserrat 

### Librería JavaScript funcional para validaciones de formularios

**¿Qué problema resuelve?**
Cada vez que se construye un formulario web hay que repetir el mismo código una y otra vez: validar que un correo tenga formato correcto, que un nombre no lleve números, que una contraseña sea segura, o calcular la edad a partir de una fecha de nacimiento. **Utilería.js** junta todas esas validaciones comunes en un solo archivo, sin frameworks ni dependencias, listo para usarse con una sola línea de `<script>`.

Todas las funciones quedan disponibles globalmente (`validarCorreo`, `soloLetras`, etc.) listas para usarse en cualquier archivo `.js` de tu proyecto o directamente en un `<script>` dentro del HTML.

---

## Uso

### 1. `validarCorreo(correo)`
Valida el formato de un correo electrónico.

```js
validarCorreo("ana@mail.com");   
validarCorreo("ana@mail");       
validarCorreo("ana.mail.com");   
```

### 2. `soloLetras(texto)`
Verifica que un texto solo tenga letras (incluye acentos, ñ y espacios).

```js
soloLetras("María José"); 
soloLetras("Peña");       
soloLetras("Juan123");    
```

### 3. `validarLongitud(numero, maxLongitud)`
Valida que un número no exceda una cantidad máxima de dígitos.

```js
validarLongitud(5512345678, 10); 
validarLongitud("123456789012", 10);
```

### 4. `calcularEdad(fechaNacimiento)`
Calcula la edad en años cumplidos a partir de una fecha.

```js
calcularEdad("2000-06-15"); 
```

### 5. `esMayorDeEdad(fechaNacimiento)`
Indica si una persona es mayor de edad (18+).

```js
esMayorDeEdad("2010-01-01"); 
esMayorDeEdad("1990-05-20"); 
```

### 6. `validarPassword(password)`
Exige mayúscula, minúscula, número, carácter especial y 8+ caracteres.

```js
validarPassword("Abcdef1!"); 
validarPassword("abcdefgh"); 
```

### 7. `generarPasswordSegura(longitud)` — función libre
Genera automáticamente una contraseña aleatoria que siempre cumple `validarPassword()`. Resuelve el problema de que a los usuarios les cuesta inventar una contraseña segura.

```js
const pass = generarPasswordSegura(12); 
validarPassword(pass); 
```

### 8. `formatearMoneda(numero, moneda)` — función libre
Da formato de moneda legible (separador de miles, 2 decimales, símbolo).

```js
formatearMoneda(1234.5);        
formatearMoneda(999, "USD");    
```

---

## Integración en vivo

| Página | Qué hace |
|---|---|
| `index.html` | Formulario completo con validación en vivo de nombre, correo, teléfono, contraseña y fecha de nacimiento. Al elegir la fecha se abre un **modal** mostrando la edad calculada y si es mayor de edad. Al enviar el formulario, se muestra el resultado de cada validación en pantalla y en la consola del navegador (F12). |
| `login.html` | Formulario de acceso que usa `validarCorreo()` y `validarPassword()` en vivo y al enviar el formulario. |

---

## 📸 Capturas de pantalla

**Formulario con validaciones en vivo**

<img width="710" height="625" alt="Captura de pantalla 2026-07-04 171750" src="https://github.com/user-attachments/assets/c9665f3d-ad70-4e2b-8b43-41b539cd04c8" />


**Modal mostrando la edad calculada**

<img width="777" height="531" alt="Captura de pantalla 2026-07-04 172020" src="https://github.com/user-attachments/assets/cba257a6-3b6a-4ddc-b311-dcc9c8b1658b" />


**Login usando `validarCorreo()` y `validarPassword()`**

<img width="1332" height="683" alt="Captura de pantalla 2026-07-04 171235" src="https://github.com/user-attachments/assets/03fb2384-5093-45ff-a161-02886a2c564d" />


---

## Video demo

 [Ver video demo (máx. 1 min)](AQUI_VA_EL_LINK_DEL_VIDEO)

---

## Demo en vivo (GitHub Pages)

[Ver formulario, modal y login funcionando](https://22161260-source.github.io/Actividad2-utileria-js/)

[Repositorio en GitHub](AQUI_VA_EL_LINK_DEL_REPOSITORIO)

---

##  Estructura del proyecto

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
