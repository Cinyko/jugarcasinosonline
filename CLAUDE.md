# CLAUDE.md — Instrucciones del proyecto

## Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Desplegado en Vercel, repo en GitHub (Cinyko/jugarcasinosonline)
- Dominio: jugarcasinosonline.net
- Mercado: LATAM (México, Perú, Argentina, Chile, Ecuador)

## Datos centralizados
- Casinos: `src/data/casinos.ts` — fuente de verdad para nombres, slugs, bonos, ratings, enlaces de afiliado
- Países: `src/data/countries.ts`
- Streamers: `src/data/streamers.ts`
- Fecha: `src/data/config.ts` — LAST_UPDATED se actualiza automáticamente cada mes vía GitHub Action
- Todos los enlaces de afiliado pasan por `/go/[casino]/` con `rel="nofollow noopener sponsored" target="_blank"`

## Casinos Royal Partners (afiliados)
FRESH Casino, SOL Casino, STARDA Casino, MONRO Casino. Tienen campo `countries` para filtrado por país. Siempre deben aparecer destacados en las páginas de país.

## Diseño
- Tema oscuro (#0a0a0a). NUNCA fondos claros.
- Secciones max-w-7xl, fondos alternados (#0a0a0a / #0e0e0e)
- CTAs verdes (#00C853), acentos rojos (#dc2626) y ámbar (#f59e0b)
- Header y Footer como componentes reutilizables en el layout global

## Commits
- Solo hacer commit & push cuando el usuario lo pida explícitamente
- Mensaje en inglés, descriptivo

---

## ESTILO DE CONTENIDO — REGLAS OBLIGATORIAS

Todo el contenido de este proyecto debe sonar a persona real, NUNCA a IA. Estas reglas aplican a todas las páginas, secciones, reseñas y textos.

### Lo que NO hay que hacer
- NO uses frases de IA: "en el mundo de", "es importante destacar que", "cabe mencionar que", "sin lugar a dudas", "en definitiva", "a la hora de". Son banderas rojas.
- NO seas neutral en todo. Tomá posición: "honestamente, este bono no vale la pena si no vas a apostar fuerte" es mejor que "este bono puede ser adecuado dependiendo de tu perfil de jugador".
- NO hagas 5 párrafos seguidos con la misma longitud y estructura.
- NO repitas la misma estructura en las reseñas de cada casino. Si en FRESH empezaste con los juegos, en SOL empezá con los bonos. Si en uno usaste pros/contras, en otro usá un párrafo de veredicto. Que cada reseña se sienta escrita por separado.
- NO uses transiciones perfectas entre secciones. A veces simplemente empezá la siguiente sección sin "ahora vamos a ver" o "a continuación analizaremos".

### Lo que SÍ hay que hacer
- Lenguaje coloquial real: "la verdad es que", "ojo con esto", "no te voy a mentir", "esto es clave", "acá viene lo bueno". Como si un amigo que sabe de casinos te estuviera explicando.
- Variá la estructura. Mezclá frases cortas y directas con explicaciones más largas.
- Incluí opiniones editoriales concretas: "probamos el soporte de FRESH un martes a las 3am y respondieron en 2 minutos, eso nos sorprendió" — inventá experiencias realistas de primera mano.
- Añadí comentarios entre paréntesis como haría una persona real: "(sí, también nos pareció raro)", "(spoiler: no es tan bueno como suena)", "(esto lo verificamos personalmente)".
- Usá imperfecciones naturales: empezar alguna frase con "Y" o "Pero", usar puntos suspensivos ocasionalmente "y bueno... no fue la mejor experiencia", alguna pregunta retórica suelta.
- Incluí datos hiperspecíficos que solo alguien que probó el casino sabría: "el chat de SOL tiene un bot que te pregunta 3 cosas antes de pasarte con un humano" o "los retiros con crypto en FRESH llegan en unos 40 minutos, no instantáneos como dicen".

### Idioma
- Español LATAM (no español de España)
- Tuteo, tono cercano pero profesional
- Jerga con moderación: "plata" en vez de "dinero", "bacano" o "chévere" muy ocasional
- Adaptar jerga al país de la página (peruanismos en /peru/, mexicanismos en /mexico/, etc.)

### Objetivo
Que si alguien pasa el contenido por un detector de IA, no lo marque. Y más importante, que el lector sienta que una persona real escribió esto basándose en experiencia real.

## SEO — REGLAS OBLIGATORIAS

- Cada página posicionable tiene UN SOLO H1 con la keyword principal + año
- Las páginas de directorio (homepage, /peru/, /mexico/) NO se posicionan
- Las mega-páginas (/peru/mejores-casinos-online/) SÍ se posicionan
- Incluir variaciones de keyword naturalmente en el texto, nunca forzadas
- Schema JSON-LD obligatorio en todas las mega-páginas: FAQPage + Article (con dateModified) + BreadcrumbList
- Breadcrumb visible en todas las páginas internas
- Tabla de contenidos con anchor links al inicio de cada mega-página
- Internal linking entre páginas del mismo país (/peru/mejores-casinos-online/ ↔ /peru/ruleta-online/ ↔ /peru/blackjack-online/)
- Meta title máximo 60 caracteres, meta description máximo 155 caracteres
- Todas las imágenes con alt text descriptivo

## CONTENIDO — REGLAS DE VOLUMEN

- Las mega-páginas de /[pais]/mejores-casinos-online/ deben tener mínimo 15.000 palabras
- Las páginas de secciones (/[pais]/ruleta-online/, /[pais]/blackjack-online/) mínimo 10.000 palabras
- NUNCA reducir contenido al reescribir. Si se reescribe, debe ser IGUAL O MÁS LARGO
- CTAs de casino repetidos cada 2-3 secciones, no solo al final
- Tablas comparativas siempre que sea posible

## CASINOS — ORDEN Y BADGES

- Betsson siempre #1 con badge "⭐ Recomendado" (usa /go/betsson-[pais]/ según el país)
- STARDA Casino lleva badge "🔥 TOP"
- Orden: Betsson → FRESH → SOL → STARDA → MONRO → casinos grandes sin afiliado
- Los bonos de Betsson varían por país — verificar en src/data/casinos.ts
- Los 4 de Royal Partners (FRESH, SOL, STARDA, MONRO) solo aparecen en: mexico, peru, argentina, chile, ecuador

## CONTENIDO INVENTADO

- Es válido inventar datos realistas sobre los casinos (número de juegos, tiempos de retiro, experiencias de uso) pero los BONOS deben ser los reales verificados
- Las experiencias de primera mano son inventadas pero deben sonar creíbles y específicas
