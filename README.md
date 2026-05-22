# Del Pucho al Cigarrillo Electrónico

Sitio web del ensayo de Julio Ibarra sobre el sector tabacalero argentino, el Fondo Especial del Tabaco y la pivotada hacia el cigarrillo electrónico.

**Estado actual:** vertical slice de la Sección 04 ("La máquina del FET") implementada en producción. El resto de las secciones se construyen sobre el mismo molde en Fase 5.

## Stack

- **Astro 4** — generador de sitios estáticos
- **CSS nativo** con variables (sistema de diseño en `src/styles/global.css`)
- **Chart.js** vía CDN — gráficos de datos
- **Intersection Observer vanilla** — animaciones de scroll
- **SVG inline** — diagramas custom (flujo del FET)

## Estructura

```
sitio-pucho/
├── astro.config.mjs          ← configuración de Astro
├── package.json              ← dependencias y scripts
├── src/
│   ├── pages/
│   │   └── index.astro       ← Sección 04 (FET), página actual del slice
│   ├── layouts/
│   │   └── Layout.astro      ← HTML base con fuentes y meta tags
│   ├── components/
│   │   ├── TopNav.astro
│   │   ├── SectionHeader.astro
│   │   ├── PullQuote.astro
│   │   ├── ContextBox.astro
│   │   ├── FETDiagram.astro          ← diagrama del flujo del dinero
│   │   ├── PriceChart.astro          ← gráfico Argentina vs Brasil
│   │   ├── SplitVisualization.astro  ← reparto 40/60
│   │   ├── NextSectionTease.astro
│   │   └── ScrollReveal.astro
│   ├── styles/
│   │   └── global.css        ← sistema de diseño completo
│   └── data/
│       └── precios-comparativos.json ← datos del gráfico
└── public/                   ← assets estáticos (favicon, etc.)
```

## Cómo correr en local

Necesitás tener instalado [Node.js](https://nodejs.org/) 18 o superior.

```bash
# instalar dependencias (la primera vez)
npm install

# levantar servidor de desarrollo
npm run dev
# se abre en http://localhost:4321

# generar el sitio estático final
npm run build
# salida en ./dist/

# previsualizar el build
npm run preview
```

## Cómo desplegar en Vercel

1. Crear repositorio en GitHub y subir esta carpeta.
2. Entrar a [vercel.com](https://vercel.com), elegir "Add New Project" y conectar el repo.
3. Vercel detecta Astro automáticamente. Click en "Deploy".
4. En 1-2 minutos el sitio queda online en una URL tipo `del-pucho-cigarrillo.vercel.app`.
5. Cada cambio que se suba a GitHub vuelve a desplegar automáticamente.

## Cómo editar el contenido

**Textos:** todos los textos están en `src/pages/index.astro`. Se editan como Markdown / HTML estándar.

**Datos del gráfico:** en `src/data/precios-comparativos.json`. Cambiar los números, guardar, listo.

**Estilos:** todo el sistema de diseño está en `src/styles/global.css` como variables CSS. Para cambiar la paleta entera, modificá las variables al principio del archivo.

## Roadmap

- ✅ **Fase 1** — Guión maestro de contenidos
- ✅ **Fase 2** — Identidad visual y mockups
- ✅ **Fase 3** — Decisiones técnicas
- ✅ **Fase 4** — Vertical slice (FET) en producción
- ⏳ **Fase 5** — Resto de secciones: apertura, recorrido, mapa, crisis, leyes, lobby, cierre
- ⏳ **Fase 6** — Elementos transversales: glosario global, fichas de actores, modo lectura
- ⏳ **Fase 7** — QA, performance, publicación en Vercel

## Licencia y créditos

Contenido: © Julio Ibarra, *Del Pucho al Cigarrillo Electrónico — Tabaco, leyes y poder en Argentina* (Ediciones AgroTabaco, 2026).
