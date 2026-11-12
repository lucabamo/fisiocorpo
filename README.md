# FisioCorpo: sitio web (fisiocorpo.com)

Sitio estático (HTML + CSS + JS, sin build), publicado en GitHub Pages. La raíz del repositorio es la raíz del sitio.

## Estructura

```
(raíz del repo)
├── index.html                              # Inicio: "Fisioterapia en Zapopan, Guadalajara"
├── fisioterapia-deportiva/index.html       # /fisioterapia-deportiva/
├── masaje-terapeutico/index.html           # /masaje-terapeutico/
├── presoterapia-y-electroterapia/index.html
├── precios/index.html                      # Sesiones + paquetes Amateur / Profesional / Elite
├── dolor-de-espalda/index.html             # ⚠ OCULTA a Google hasta confirmar (ver abajo)
├── rehabilitacion-de-lesiones/index.html   # ⚠ OCULTA a Google hasta confirmar (ver abajo)
├── 404.html · gracias.html
├── styles.css · script.js · favicon.svg
├── robots.txt · sitemap.xml · site.webmanifest
├── CNAME · .nojekyll                       # dominio para GitHub Pages / no procesar con Jekyll
└── assets/                                 # logos (.webp para el sitio, .png para Google), íconos, og-image
```

**¿Por qué varias páginas?** Google posiciona *páginas*, no sitios. Una página por servicio permite salir en
búsquedas como "fisioterapia deportiva Zapopan" o "masaje terapéutico Guadalajara", además de la búsqueda general.

**Importante al editar:** el encabezado (menú) y el pie de página se repiten en cada `index.html`. Si cambias
el teléfono, el menú o el footer, cámbialo en **todas** las páginas (Ctrl+Shift+F en VS Code).

**Ver el sitio en tu computadora:** como las rutas empiezan con `/`, abrir el archivo con doble clic no carga
estilos. Usa un servidor local: `npx serve .` (o la extensión Live Server de VS Code) dentro de esta carpeta.

## Pendientes (busca `PENDIENTE` con Ctrl+Shift+F)

Se quitó todo el texto de ejemplo visible (`[CÉDULA]`, `[BIO]`, testimonios falsos, etc.): Google y los
pacientes lo veían. Lo que falta quedó como comentario HTML, invisible en la página:

1. **Datos de Andrea** (`index.html`, sección Sobre mí): universidad, cédula, especialidades, años de
   experiencia. Descomenta la lista `creds`. Agrega también la cédula en el inicio (insignias) y en el footer de cada página.
   En los datos estructurados de `index.html`, al objeto `"@type": "Person"` agrégale:
   `"hasCredential": {"@type": "EducationalOccupationalCredential", "credentialCategory": "Cédula profesional", "identifier": "0000000"}`
   y `"alumniOf": {"@type": "CollegeOrUniversity", "name": "UNIVERSIDAD"}`.
   👉 En salud esto es lo que más confianza da (a Google y a los pacientes).
2. **Confirmar servicios** `dolor-de-espalda` y `rehabilitacion-de-lesiones`. Hoy tienen
   `<meta name="robots" content="noindex, follow">` para que Google no las muestre. Si Andrea confirma que sí
   ofrece esos tratamientos:
   - borra esa línea `noindex` y el comentario PENDIENTE de cada una,
   - agrégalas a `sitemap.xml`,
   - agrégalas a la lista "Servicios" del footer en todas las páginas.
   Si **no** los ofrece: borra las dos carpetas y sus tarjetas en la sección Servicios de `index.html`.
   Son las búsquedas con más volumen, así que vale la pena confirmarlo pronto.
3. **Correo de contacto:** comentado en `index.html` (Agendar) y en el footer.
4. **Formas de pago y atención a domicilio:** agrega las preguntas al FAQ de `index.html` (y al bloque `FAQPage` del JSON-LD).
5. **Fotos** (WebP, < 300 KB, con `width`/`height`):
   - `assets/consultorio.webp` 1200×1200: hero del inicio (hay un comentario con el `<img>` listo).
   - `assets/andrea.webp` 800×1000: Sobre mí (comentario listo).
   - Galería: crea una sección con 3 fotos reales del consultorio (`alt` descriptivo, p. ej. "Camilla de fisioterapia en FisioCorpo, Zapopan").
6. **Testimonios:** usa reseñas reales (de Google) con permiso. No inventes reseñas ni agregues `aggregateRating`:
   Google lo considera spam en negocios locales.

## Fuera del sitio (pesa más que el sitio para salir en el mapa de Google)

- **Perfil de Google Business:** categoría principal "Fisioterapeuta"; nombre, dirección y teléfono idénticos a los del sitio;
  enlace a https://fisiocorpo.com; horarios; fotos reales; servicios con precios; pedir reseñas a cada paciente
  (que mencionen el tratamiento y la zona) y responderlas todas.
- **Google Search Console:** verifica el dominio y envía `https://fisiocorpo.com/sitemap.xml`.
- **Directorios:** Doctoralia, TopDoctors, Sección Amarilla, con exactamente los mismos datos.
- **Instagram:** pon el enlace al sitio en la bio.

## Agenda de Google Calendar

En `index.html` busca `appointments/schedules/` y reemplaza el ID en **2 lugares**: el `iframe` (con `?gv=true`)
y el botón `js-cal`. La agenda debe estar publicada como pública.

## WhatsApp

Número en `script.js` → `WHATSAPP_NUMBER`. Cada botón puede tener su propio mensaje con `data-wa-msg`.

## Precios

Los precios aparecen en `index.html` (resumen y FAQ), `precios/index.html` (paquetes completos), las páginas de
servicio (bloque "Tipos de sesión") y los datos estructurados (`"price"`). Si cambian, búscalos con Ctrl+Shift+F.

## Formulario de contacto

GitHub Pages no procesa formularios. El formulario "Déjame tus datos" arma un mensaje con nombre, teléfono y
motivo y abre WhatsApp al número de `WHATSAPP_NUMBER` (en `script.js`); el paciente solo toca "Enviar".
`gracias.html` ya no se usa (se conserva por si algún día se cambia a un servicio de formularios como Formspree).

## Publicar / dominio

- **Hosting:** GitHub Pages (repo `lucabamo/fisiocorpo` → Settings → Pages → rama `main`, carpeta `/ (root)`).
  Cada push a `main` se publica solo en 1–2 minutos.
- **Dominio:** `fisiocorpo.com`. El archivo `CNAME` le dice a GitHub cuál es el dominio.
- **DNS** (hoy en Netlify DNS, porque ahí se compró el dominio; después en Cloudflare), todos en "DNS only" si es Cloudflare:
  - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `CNAME` `www` → `lucabamo.github.io`
- En Settings → Pages, cuando el DNS esté listo, activar **Enforce HTTPS**.
- `netlify.toml` ya no se usa en GitHub Pages; se conserva por si se regresa a Netlify.
- **Pasar el dominio a Cloudflare:** ICANN no permite transferir un dominio en sus primeros 60 días. Después de eso,
  pide a soporte de Netlify el código de transferencia (Netlify revende dominios de Name.com) y sigue
  "Transfer Domains" en Cloudflare. Cloudflare exige que el dominio ya use sus nameservers antes de transferir.
