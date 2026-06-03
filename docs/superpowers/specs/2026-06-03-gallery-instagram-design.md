# Gallery con imágenes reales — Design Spec
Date: 2026-06-03

## Contexto

Fan site de Hamke Tours. No hay acceso a la cuenta de Instagram oficial. La solución es curaduría manual: el usuario descarga fotos de Instagram, las agrega al repo, y la galería las muestra automáticamente.

## Objetivo

Reemplazar los `ImagePlaceholder` de `Gallery.tsx` con imágenes reales leídas de `public/images/gallery/`, con lightbox al clickar.

## Arquitectura

### Piezas

| Archivo | Tipo | Rol |
|---|---|---|
| `src/lib/gallery.ts` | Server utility | Lee carpeta, retorna lista de filenames |
| `src/components/Gallery.tsx` | Server Component | Orquesta: llama lib, pasa data a cliente |
| `src/components/GalleryClient.tsx` | Client Component | Grid + lightbox con estado |

### Flujo de datos

```
public/images/gallery/*.jpg
        ↓
src/lib/gallery.ts  →  getGalleryImages(): string[]
        ↓
Gallery.tsx (Server)  →  pasa props a GalleryClient
        ↓
GalleryClient.tsx (Client)  →  grid + lightbox
```

## lib/gallery.ts

- `fs.readdirSync('public/images/gallery')`
- Filtra: `.jpg | .jpeg | .png | .webp | .avif`
- Retorna array de filenames ordenados alfabéticamente
- Path público para `<Image>`: `/images/gallery/${filename}`

## Gallery.tsx (Server Component)

- Sin `"use client"`
- Llama `getGalleryImages()`
- Si array vacío → no renderiza sección (o renderiza placeholder vacío)
- Pasa `images: string[]` a `GalleryClient`
- Mantiene estructura de sección existente: `.section > .container > .section-head + grid`

## GalleryClient.tsx (Client Component)

### Grid
- Usa clase CSS existente `.grid-gallery` (4 cols, `grid-auto-rows: 230px`, gap 14px)
- Patrón de spans determinístico: `index % 5 === 0` → `gridColumn: "span 2"`
- Cada imagen: `<Image>` con `fill`, `object-fit: cover`, `border-radius: 16px`, cursor pointer
- Wrapper div con `position: relative`, `overflow: hidden`, `border-radius: 16px`

### Lightbox
- Estado: `selectedIndex: number | null` (null = cerrado)
- Overlay: `position: fixed`, `inset: 0`, `z-index: 100`, fondo `rgba(0,0,0,0.92)`
- Imagen centrada: `object-fit: contain`, max 90vw × 90vh
- Controles:
  - Botón X (top-right)
  - Flechas ← → (prev/next, wrapping circular)
  - Click en backdrop cierra
- Teclado: `Escape` cierra, `ArrowLeft` prev, `ArrowRight` next
- `useEffect` para event listener de teclado, cleanup al cerrar

## Flujo de actualización de fotos

1. Descargar fotos: `gallery-dl https://www.instagram.com/hamketours/`
2. Mover imágenes a `public/images/gallery/`
3. `git add public/images/gallery/ && git commit -m "chore: add gallery photos"`
4. Push → Vercel redeploy automático → galería actualizada

## Cambios a archivos existentes

- `src/components/Gallery.tsx` — reescribir como Server Component
- `src/lib/data.ts` — eliminar `GALLERY` array (ya no necesario)

## Archivos nuevos

- `src/lib/gallery.ts`
- `src/components/GalleryClient.tsx`
- `public/images/gallery/` (carpeta, agregar `.gitkeep`)

## Out of scope

- Captions / metadata por imagen
- Ordenamiento manual
- Paginación
- Animaciones de entrada en lightbox
