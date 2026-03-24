# 📄 CV Profesional – Valentina Paz Llantén Robles
> Análisis técnico de los elementos utilizados para construir esta página

---

## 🧱 Tecnologías Utilizadas

| Tecnología | Versión | Uso en el proyecto |
|---|---|---|
| HTML5 | Semántico | Estructura y contenido del CV |
| CSS3 | Embebido (`<style>`) | Diseño visual, colores y layout |

---

## 📐 HTML – Etiquetas Semánticas

### Estructura base
```html
<!DOCTYPE html>       <!-- Declara que es un documento HTML5 -->
<html lang="es">      <!-- Idioma español (SEO + accesibilidad) -->
<head>                <!-- Metadatos: charset, viewport, título -->
<body>                <!-- Todo el contenido visible -->
```

### Etiquetas de contenido usadas

| Etiqueta | Para qué se usó |
|---|---|
| `<header>` | Encabezado con nombre, título y contacto |
| `<section>` | Cada bloque del CV (perfil, experiencia…) |
| `<div>` | Contenedores de layout (`.job`, `.skills-grid`) |
| `<h1>` | Nombre completo |
| `<h2>` | Títulos de sección (EXPERIENCIA, FORMACIÓN…) |
| `<h3>` | Cargos y títulos académicos |
| `<h4>` | Subcategorías de habilidades |
| `<p>` | Párrafos de texto |
| `<ul>` / `<li>` | Listas de logros y habilidades |
| `<dl>` / `<dt>` / `<dd>` | Lista de definición (idiomas e info) |
| `<a>` | Links a email, teléfono, LinkedIn, GitHub |
| `<strong>` | Texto importante con negrita semántica |
| `<em>` | Énfasis en cursiva (nombres de empresas) |
| `<hr>` | Separador visual entre secciones |
| `<span>` | Fechas dentro del header de cada cargo |
| `<footer>` | Pie de página con nombre y año |
| `<small>` | Texto reducido en el footer |

### Meta tags del `<head>`
```html
<meta charset="UTF-8" />
<!-- Permite tildes, ñ y caracteres especiales -->

<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<!-- Hace la página responsive en móviles -->
```

---

## 🎨 CSS – Propiedades y Técnicas

### Reset y base
```css
* { box-sizing: border-box; margin: 0; padding: 0; }
/* Elimina estilos por defecto del navegador */
```

### Layout principal
| Propiedad CSS | Para qué se usó |
|---|---|
| `max-width: 860px` + `margin: 0 auto` | Centrar el CV en pantalla |
| `display: flex` + `flex-wrap: wrap` | Alinear links de contacto y grid de idiomas |
| `display: grid` | Grid de habilidades técnicas (5 columnas) |
| `justify-content: space-between` | Separar cargo y fecha en el mismo renglón |
| `gap` | Espaciado entre elementos flex/grid |

### Estilos visuales
| Propiedad CSS | Para qué se usó |
|---|---|
| `box-shadow` | Sombra suave del contenedor del CV |
| `border-radius: 8px` | Bordes redondeados del card |
| `border-bottom: 2px solid #4f46e5` | Línea decorativa del header |
| `text-transform: uppercase` | Títulos de sección en mayúsculas |
| `letter-spacing` | Espaciado entre letras en títulos |
| `line-height: 1.7` | Interlineado cómodo para leer |
| `white-space: nowrap` | Las fechas no se parten en dos líneas |

### Paleta de colores
| Variable visual | Color | Hex |
|---|---|---|
| Acento principal | Índigo/Violeta | `#4f46e5` |
| Títulos oscuros | Azul noche | `#1e1b4b` |
| Texto base | Casi negro | `#222` |
| Texto secundario | Gris | `#555` / `#666` |
| Fondo página | Gris claro | `#f5f5f5` |
| Fondo card | Blanco | `#fff` |

### Pseudo-clase usada
```css
.contact-info a:hover { text-decoration: underline; }
/* Subraya el link al pasar el cursor por encima */
```

---

## 🗂️ Clases CSS creadas (BEM-inspired)
