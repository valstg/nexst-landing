# NEXST Landing V2

Landing Next.js para desplegar en Vercel. Usa el logo **original proporcionado por el propietario** en `public/nexst-logo-original.jpg`, sin redibujarlo.

## Despliegue

1. Subí el contenido de esta carpeta a la raíz de un repositorio de GitHub.
2. Importá el repositorio en Vercel. Framework: Next.js.
3. En Environment Variables configurá `NEXT_PUBLIC_WHATSAPP_URL` con la URL comercial real, por ejemplo `https://wa.me/549XXXXXXXXXX`.
4. Deploy. Si no se configura la variable, los CTA abren un email a `contacto@nexst.com.ar` (dirección de ejemplo: reemplazar antes de publicar).

## Desarrollo local

`npm install`
`npm run dev`

## Notas

- El panel del hero es **conceptual** y usa datos ilustrativos. Reemplazalo por capturas reales cuando estén disponibles.
- El logo original se muestra como imagen en la navegación y pie de página; no se recrea con IA.
- Se incluyen animaciones, menú móvil y soporte para `prefers-reduced-motion`.
