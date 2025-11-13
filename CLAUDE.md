# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lab-Introduction** is a medical laboratory showcase website built with Vue 3, TypeScript, and Tailwind CSS. It displays lab information, team members, publications, software tools, news, and photos. The site features smooth scroll animations using GSAP and Lenis.

**Key Technologies**:
- Vue 3 (Composition API)
- TypeScript
- Vite (build tool)
- Vue Router 4 (hash-based routing)
- Tailwind CSS 4
- GSAP (animations with ScrollTrigger)
- Lenis (smooth scrolling)
- Bootstrap Icons

**Node.js requirement**: ^20.19.0 or >=22.12.0

## Development Commands

```bash
# Development server
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Build only (without type-check)
npm run build-only

# Preview production build locally
npm run preview

# Format code with Prettier
npm run format

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── views/                      # Page components (content goes here)
│   ├── Home.vue               # Homepage with research directions
│   ├── People.vue             # Team members
│   ├── Publications.vue       # Research papers
│   ├── Software.vue           # Tools/software projects
│   ├── Photos.vue             # Photo galleries
│   ├── News.vue               # News updates
│   ├── Join.vue               # Join the lab
│   └── Contact.vue            # Contact information
├── components/                 # Reusable components
│   ├── Header.vue             # Navigation bar
│   ├── Footer.vue             # Footer
│   ├── Carousel.vue           # Image carousel
│   ├── PersonCard.vue         # Team member card
│   ├── PersonModal.vue        # Member details modal
│   ├── PublicationCard.vue    # Publication display
│   └── SoftwareCard.vue       # Software project card
├── composables/
│   └── useScrollAnimation.ts  # GSAP animation utilities
├── router/
│   └── index.ts               # Route definitions (hash-based routing)
├── assets/
│   ├── images/                # Static images
│   │   ├── avatar/            # Team member avatars
│   │   ├── carousel/          # Homepage carousel images
│   │   └── photos/            # Gallery photos
│   └── main.css               # Global styles
├── App.vue                     # Root component (sets up Lenis smooth scroll)
└── main.ts                     # Application entry point
```

## Path Aliases

Configured in `vite.config.ts`:

- `@` → `src/`
- `@avatar` → `src/assets/images/avatar/`
- `@carousel` → `src/assets/images/carousel/`
- `@images` → `src/assets/images/`
- `@photos` → `src/assets/images/photos/`

**Usage example**:
```typescript
import avatar from '@avatar/profile.jpg'
import photo from '@photos/team-photo.jpg'
```

## Content Modification

Most content changes happen in `/src/views/`:

### Data Structure Patterns

**Team Members** (People.vue):
- Array of `TeamSection[]` with title and members array
- Each member has: name, role, image (local path or URL), bio, links (cv, scholar, email, conference)

**Publications** (Publications.vue):
- Array of `PublicationSection[]` with title and items
- Each item has: authors, year, title, journal, type (preprint/journal/conference), link, correspondingAuthor
- Supports author markers: `*` (co-first), `#` (corresponding)

**Software** (Software.vue):
- Array of `Software[]` with: name, description, language, stars (optional), link, documentation (optional)

**News** (News.vue):
- Array of `NewsItem[]` with: date, title, content, image (optional), link (optional)

**Photos** (Photos.vue):
- Array of `Gallery[]` with: title, description, photos array
- Each photo has: src, alt, caption (optional)

## Architecture Patterns

### Smooth Scrolling & Animations

1. **Lenis** (App.vue): Initialized in root component for smooth wheel/touch scrolling
   - Duration: 1.2s with easing function
   - Auto-cleaned on component unmount

2. **GSAP + ScrollTrigger** (useScrollAnimation.ts composable):
   - `fadeInUp()` - Fade in + slide up on scroll
   - `fadeIn()` - Opacity only
   - `slideInLeft/Right()` - Horizontal slide
   - `staggerFadeInUp()` - Staggered animation for multiple elements
   - All animations use scroll triggers and auto-cleanup on component unmount

**Usage example**:
```typescript
import { useScrollAnimation } from '@/composables/useScrollAnimation'

export default {
  setup() {
    const { fadeInUp, staggerFadeInUp } = useScrollAnimation()

    onMounted(() => {
      fadeInUp('.card-class')
      staggerFadeInUp('.list-item', {}, 4)
    })
  }
}
```

### Routing

- Hash-based routing (`createWebHashHistory`)
- 8 main routes defined in `src/router/index.ts`
- Auto-scrolls to top on navigation (except browser back/forward)

### Styling

- Tailwind CSS 4 with Vite plugin integration
- Global styles in `src/assets/main.css`
- Component scoped styles in `<style>` blocks
- Custom utility classes available for animation and effects

## Deployment

### GitHub Pages

1. Ensure `vite.config.ts` has correct `base: '/Lab-introduction/'`
2. Run: `npm run deploy`
3. Check `Settings > Pages` in GitHub repo for deployment status

### Other Platforms

Build output in `dist/` directory can be deployed to Vercel, Netlify, or self-hosted (Nginx/Caddy).

## Important Notes

- Always run `npm run type-check` before committing to catch TypeScript errors
- Use `npm run format` to maintain consistent code style (Prettier)
- Image paths: Use path aliases for local images, full URLs for CDN/external
- Content is primarily data-driven (arrays in components), making updates easy without touching logic
- Hash routing means URLs include `#` (e.g., `example.com/#/people`)
