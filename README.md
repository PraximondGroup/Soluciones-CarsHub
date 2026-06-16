# CarsHub 🚗

Plataforma peruana de **subastas de vehículos** — desde económicos hasta deportivos y alta gama, con un servicio premium **CarsHub Deluxe**. Construida con un foco en diseño de alto impacto, modo oscuro impecable y rendimiento.

## Stack

- **Astro 5** (static / Jamstack, SPA con View Transitions)
- **TypeScript** (strict)
- **Tailwind CSS v4** (vía `@tailwindcss/vite`, tema en CSS con `@theme`)
- **Nanostores** + `@nanostores/persistent` (watchlist reactiva persistida)

## Scripts

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:4321)
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
```

## Estructura

```
src/
├─ components/        Header, Footer, AuctionCard, CountdownTimer, ThemeToggle…
│  └─ home/           Secciones del home (Hero, CategoryGrid, AuctionCarousel…)
├─ data/              auctions.ts (20 lotes mock), site.ts (nav, categorías, testimonios)
├─ layouts/           BaseLayout.astro (head, SEO, fonts, theme, transitions)
├─ lib/               types.ts, format.ts
├─ stores/            watchlist.ts (nanostores)
├─ styles/            global.css (paleta, modo oscuro, utilidades)
└─ pages/             index (Home) + stubs: auctions, deluxe, about, contact, profile, auction/[slug]
```

## Sistema de diseño

Paleta liderada por el naranja `#ff9800`, con acentos dorados para Deluxe.
Tokens semánticos (`bg-surface`, `text-content`, `text-muted`, `border-border`)
cambian automáticamente en modo oscuro mediante la clase `.dark` en `<html>`,
con preferencia del sistema por defecto y persistencia en `localStorage`.

## Estado actual

✅ **Entrega 1 — Fundación + Home**: scaffold, sistema de diseño, modo oscuro,
datos mock, Header/Footer, y el Home completo (Hero, categorías, carruseles de
subastas con cuenta regresiva en vivo, promo Deluxe, testimonios, newsletter).

🔜 **Siguiente**: catálogo `/auctions` con filtros, ficha de subasta con galería
y panel de pujas, página Deluxe (precios + FAQ), y panel de usuario.

## Despliegue

Genera estático en `dist/`. Para Vercel/Netlify funciona out-of-the-box; si se
necesita SSR (endpoints de subasta en vivo), añadir el adaptador correspondiente.
