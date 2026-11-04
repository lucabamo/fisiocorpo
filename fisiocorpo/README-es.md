# FisioCorpo — Landing page (fisiocorpo.com)

Sitio estático (HTML + CSS + JS, sin build). Listo para Netlify.

## Archivos
| Archivo | Qué es |
|---|---|
| `index.html` | Página principal (todas las secciones) |
| `styles.css` | Estilos (paleta morada/lavanda/blanco al inicio en `:root`) |
| `script.js` | Menú móvil, animaciones y **número de WhatsApp** (línea `WHATSAPP_NUMBER`) |
| `favicon.svg` | Ícono del sitio |
| `assets/` | Imágenes (ver tabla de nombres abajo); `og-image.svg` es la fuente editable de `og-image.jpg` |
| `gracias.html` | Página que se muestra después de enviar el formulario |
| `netlify.toml` | Configuración simple de Netlify (encabezados y redirección www opcional) |
| `robots.txt`, `sitemap.xml` | SEO básico |

## Datos reales ya incluidos (confirmados)
- Marca: **FISIOCORPO by Andrea Lara** · Instagram [@fisiocorpoal](https://www.instagram.com/fisiocorpoal/)
- Dirección: **Calle San Juan Bosco 1332, Col. Jardín de San Ignacio (Las Flores), C.P. 45040, Zapopan, Jalisco** (Zapopan confirmado por la propia agenda de Google Calendar de Andrea)
- Teléfono y WhatsApp: **33 2834 2890** (`wa.me/523328342890`, en `script.js` → `WHATSAPP_NUMBER` y en todos los enlaces de respaldo)
- Horarios: Lun 4:00–8:00 pm · Mar 11:00 am–5:00 pm · Mié cerrado · Jue 3:00–8:00 pm · Vie 9:00 am–3:00 pm · Sáb 10:00 am–2:00 pm · Dom cerrado
- Mapa de Google Maps (iframe) y botón "Cómo llegar" con esa dirección
- Datos estructurados (SEO local) con dirección, coordenadas, teléfono y horarios

## Cómo llenar lo que falta

### 1) Imágenes: solo suelta los archivos en `assets/` con estos nombres
Si un archivo no existe, el sitio muestra un recuadro morado con el nombre del archivo que va ahí. En cuanto lo subes, aparece la foto (no hay que tocar código).

| Archivo | Dónde aparece | Tamaño recomendado |
|---|---|---|
| `assets/logo.png` ✅ | Logo del encabezado (versión horizontal, ya incluida: extraída del folleto PDF con fondo transparente). Si falta, se muestra el texto "FISIOCORPO by Andrea Lara" | PNG transparente, horizontal, ~600×150 px o más |
| `assets/logo-blanco.png` ✅ | Logo del footer (versión blanca, ya incluida) | Igual que el logo, en blanco |
| `assets/logo-vertical.png`, `logo-vertical-blanco.png` | Versiones verticales (no se usan; por si las necesitas) | — |
| `assets/andrea.jpg` | Sección "Sobre mí" | 800×1000 px (vertical 4:5) |
| `assets/consultorio.jpg` | Círculo del inicio (hero) | 1200×1200 px (cuadrada; se recorta en círculo) |
| `assets/galeria-1.jpg` · `galeria-2.jpg` · `galeria-3.jpg` | Sección "El consultorio" | 1200×900 px (horizontal 4:3) |
| `assets/og-image.jpg` | Vista previa al compartir el link en WhatsApp/Facebook | 1200×630 px (ya incluí una versión morada; reemplázala si quieres) |
| `favicon.svg` | Ícono de la pestaña del navegador | Reemplaza el archivo (SVG cuadrado) |
| `assets/apple-touch-icon.png` *(opcional)* | Ícono al guardar en iPhone | 180×180 px |

Consejo: comprime las fotos (p. ej. en squoosh.app) a menos de ~300 KB cada una.

### 2) Textos pendientes en `index.html` (busca `[` con Ctrl+F)
- **Cédula profesional:** `[CÉDULA PROFESIONAL]` (insignia del inicio) y `[NÚMERO DE CÉDULA]` (Sobre mí y footer)
- **Bio corta (Sobre mí):** `[BIO BREVE …]` (incluye `[UNIVERSIDAD]` y `[X]` años), `[FRASE PERSONAL / FILOSOFÍA DE TRABAJO …]`, `[LICENCIATURA EN FISIOTERAPIA — UNIVERSIDAD]`, `[ESPECIALIDADES, CERTIFICACIONES]`, `[AÑOS]`
- **Servicios:** las tarjetas 1–4 son reales (Recuperación deportiva, Masaje terapéutico, Presoterapia, Electroterapia). Las tarjetas 5–6 (Ejercicio terapéutico y prevención; Rehabilitación de lesiones y dolor) son genéricas: confirmar, editar o quitar. Para agregar uno, copia un bloque `<article class="card">`.
- **Formas de pago:** `[EFECTIVO / TRANSFERENCIA / TARJETA]` (FAQ)
- **FAQ:** `[SÍ / NO — DETALLES DE ATENCIÓN A DOMICILIO]`
- **Testimonios:** `[TESTIMONIO 1/2/3 …]`, `[NOMBRE]`, `[MOTIVO DE CONSULTA]`, iniciales `[A] [B] [C]`; borra la línea `[EJEMPLOS — …]` al final. Idea: usar reseñas reales de Google (tiene 5.0★) con permiso.
- **Correo:** `[CORREO@fisiocorpo.com]` (sección Agendar y footer, incluido el `mailto:`)



### Paquetes de recuperación (ya llenos, del folleto de Andrea)
- Sección `#paquetes` en `index.html`: tipos de sesión (Base $500 · 30 min, Intermedia $700 · 1 h, Avanzada $850 · 1.5 h) y paquetes **Amateur**, **Profesional** y **Elite** con precios y ahorros.
- Para cambiar un precio, busca el monto (p. ej. `$1,370`) en `index.html` y edítalo. Recuerda actualizar también el "Ahorras $…" y, si cambian los precios individuales, la respuesta de la FAQ "¿Cuál es el costo de una sesión?".
- Cada botón "Quiero este paquete" abre WhatsApp con el mensaje del paquete (atributo `data-wa-msg`).

### 3) Agenda de Google Calendar (método principal de citas)
- La sección **Agendar** muestra la agenda de citas de Google Calendar incrustada y el botón **"Agendar en Google Calendar"** (abre en pestaña nueva). Los botones "Agendar cita" del menú y del inicio llevan a esa sección.
- WhatsApp y el formulario de Netlify quedan como opciones secundarias debajo.
- **Para cambiar la agenda:** en Google Calendar → tu *Agenda de citas* → *Compartir* → copia el enlace. En `index.html` busca `appointments/schedules/` y reemplaza el ID en **2 lugares**:
  1. `iframe class="calendar__frame"` → `src="https://calendar.google.com/calendar/appointments/schedules/TU_ID?gv=true"` (el `?gv=true` es necesario para incrustar)
  2. botón `class="... js-cal"` → `href="https://calendar.google.com/calendar/u/0/appointments/schedules/TU_ID"`
- La agenda debe estar publicada como pública (cualquiera con el enlace) para que se vea a los pacientes.

## Publicar en Netlify
**Opción A — arrastrar y soltar (lo más rápido)**
1. Entra a https://app.netlify.com → *Add new site* → *Deploy manually*.
2. Arrastra la carpeta `fisiocorpo` (o el zip descomprimido).
3. Listo: te da una URL tipo `algo.netlify.app`.

**Opción B — con Git (recomendado para editar después)**
1. Sube la carpeta a un repo de GitHub.
2. Netlify → *Add new site* → *Import from Git* → elige el repo.
3. Build command: vacío · Publish directory: `.` (ya viene en `netlify.toml`).
4. Cada cambio que subas se publica solo.

**Formulario**
- Netlify detecta el formulario automáticamente (`data-netlify="true"`). Las solicitudes llegan en *Site → Forms*.
- En *Forms → Notifications* agrega un correo para recibir aviso de cada solicitud.

## Conectar el dominio fisiocorpo.com
1. Netlify → *Domain management* → *Add a domain* → `fisiocorpo.com`.
2. Elige **una** opción:
   - **Netlify DNS (más fácil):** Netlify te da 4 nameservers (`dns1.p0X.nsone.net`…). En tu registrador (donde compraste el dominio) cambia los *nameservers* por esos.
   - **Registros en tu registrador:** crea
     - `A` para `@` → `75.2.60.5`
     - `CNAME` para `www` → `TU-SITIO.netlify.app`
     (Confirma los valores que Netlify te muestre en pantalla.)
3. Espera la propagación (minutos a 24 h). Netlify activa HTTPS (Let's Encrypt) automáticamente.
4. Opcional: descomenta la redirección www → raíz en `netlify.toml`.
