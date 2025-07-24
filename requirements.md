# Prompt para Agente Cursor - Aplicación Web de Frases de Fiesta

## Descripción del Proyecto

Crear una aplicación web minimalista para un evento único que recopile y muestre frases de usuarios sobre por qué les gustan las fiestas.

## Funcionalidades Requeridas

### 1. Página Principal - Formulario de Entrada

- **Ruta**: `/`
- **Contenido**:
  - Un formulario simple con un solo campo de texto
  - Pregunta: "¿Por qué te gustan las fiestas?"
  - Un botón de enviar
  - Al enviar, la frase se guarda y se redirige o muestra confirmación

### 2. Página de Visualización en Tiempo Real

- **Ruta**: `/live` o `/display`
- **Funcionalidad**:
  - Mostrar todas las frases enviadas por los usuarios
  - Implementar WebSockets para actualizaciones en tiempo real
  - Cada nueva frase aparece automáticamente sin recargar la página
  - Diseño estético para mostrar las frases de forma atractiva

### 3. Página de Administración

- **Ruta**: `/admin`
- **Funcionalidad**:
  - Listar todas las frases en formato simple
  - Permitir editar cada frase
  - Permitir eliminar frases
  - Interfaz funcional sin tanto estilo decorativo

## Especificaciones Técnicas

### Backend y Frontend Integrado

- **Framework**: Node.js con Express
- **Renderizado**: HTML servido directamente desde Node.js (sin archivos estáticos separados)
- **WebSockets**: Socket.io para actualizaciones en tiempo real
- **Almacenamiento**: Archivo JSON (no base de datos)
- **Estructura del JSON**:

```json
{
	"frases": [
		{
			"id": "uuid",
			"texto": "Me gustan las fiestas porque...",
			"timestamp": "2025-01-01T10:00:00Z"
		}
	]
}
```

### Arquitectura de Renderizado

- Cada ruta devuelve HTML completo con CSS y JavaScript embebido
- No usar archivos estáticos externos
- Todo el código CSS y JS debe ir dentro de las etiquetas `<style>` y `<script>`
- HTML responsivo con CSS moderno embebido

## Diseño y Estilo

### Paleta de Colores Sugerida

- Colores neutros como base (blancos, grises suaves)
- 1-2 colores de acento vibrantes pero elegantes
- Sugerencias: azul marino + coral, verde salvia + dorado, púrpura + amarillo suave

### Estilo Visual

- **Minimalista**: Espacios blancos amplios, tipografía limpia
- **Moderno**: Bordes redondeados, sombras sutiles, transiciones suaves
- **Artístico**: Animaciones sutiles, efectos hover creativos, disposición asimétrica interesante

### Tipografía

- Fuente sans-serif moderna (Inter, Poppins, o similar)
- Jerarquía clara de tamaños
- Buen contraste y legibilidad

## Estructura de Archivos Sugerida

```
proyecto/
├── server.js
├── package.json
└── data/
    └── frases.json
```

## Implementación de las Rutas

### Estructura de Respuesta HTML

Cada ruta debe devolver HTML completo usando `res.send()` con:

- `<!DOCTYPE html>` completo
- CSS embebido en `<style>` tags
- JavaScript embebido en `<script>` tags
- Socket.io CDN para el cliente

### Ejemplo de Estructura de Ruta:

```javascript
app.get("/", (req, res) => {
	const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>¿Por qué te gustan las fiestas?</title>
      <style>
        /* CSS minimalista y moderno aquí */
      </style>
    </head>
    <body>
      <!-- HTML del formulario aquí -->
      <script>
        /* JavaScript para el formulario aquí */
      </script>
    </body>
    </html>
  `;
	res.send(html);
});
```

## Funcionalidades Específicas del Socket

### Implementación en HTML Embebido

- Incluir Socket.io desde CDN: `<script src="/socket.io/socket.io.js"></script>`
- JavaScript del cliente embebido en cada página HTML
- Conectar al socket directamente en el `<script>` tag

### Página `/live` - Ejemplo de Socket:

```javascript
// Dentro del <script> tag de la página HTML
const socket = io();
socket.on("nueva_frase", (frase) => {
	const container = document.getElementById("frases-container");
	const fraseElement = document.createElement("div");
	fraseElement.innerHTML = `<p>${frase.texto}</p>`;
	container.appendChild(fraseElement);
});
```

### Servidor (Backend)

- Emitir 'nueva_frase' cuando se recibe una nueva frase
- Manejar POST del formulario y actualizar JSON
- Broadcast a todos los clientes conectados

## Extras Opcionales

- Validación de frases (longitud mínima/máxima)
- Rate limiting para evitar spam
- Animaciones de entrada para nuevas frases
- Contador de frases totales
- Opción de exportar frases a archivo

## Consideraciones de UX

- Mensajes de confirmación claros
- Estados de carga visibles
- Manejo de errores amigable
- Accesibilidad básica (contraste, navegación por teclado)

## Instrucciones de Implementación

### Configuración Inicial

1. Crear `package.json` con dependencias: express, socket.io, uuid
2. Estructura básica del servidor con las tres rutas
3. Cada ruta debe devolver HTML completo con `res.send(htmlString)`

### Desarrollo por Etapas

1. **Servidor base**: Express + Socket.io configurado
2. **Ruta `/`**: HTML con formulario + CSS + JS embebido
3. **Ruta `/live`**: HTML con contenedor de frases + Socket client
4. **Ruta `/admin`**: HTML con lista editable + funciones CRUD
5. **Sistema JSON**: Funciones para leer/escribir frases.json
6. **Styling**: CSS minimalista embebido en cada página

### Consideraciones Técnicas

- Usar template strings (backticks) para el HTML multi-línea
- Validar y sanitizar input del usuario
- Manejar errores de lectura/escritura del JSON
- Implementar UUID para IDs únicos de frases

**Resultado Final**: Un solo archivo `server.js` que maneja todo, devolviendo HTML completo con estilos y scripts embebidos para cada ruta.
