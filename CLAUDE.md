# Claude Code Guidelines for Web Game Dev

## Project Overview

Web Game Dev (webgamedev.com) is a resource website for JavaScript game developers. Built with Next.js and Nextra, it features:
- Documentation and guides for web game development
- A curated newsletter (MDX-based)
- Interviews with game developers
- Engine/library comparisons

## Tech Stack

- **Framework**: Next.js 15 with Nextra 3.2 (documentation theme)
- **Styling**: Tailwind CSS 3.4
- **Package Manager**: Bun (bun.lockb)
- **Language**: TypeScript

## Project Structure

```
src/
├── pages/           # MDX content pages
│   ├── newsletter/  # Newsletter issues (001.mdx - 029.mdx)
│   ├── blog/        # Blog articles
│   ├── interviews/  # Developer interviews
│   └── *.mdx        # Topic pages
├── components/      # React components
├── lib/             # Utilities, logos, data
└── styles/          # CSS and style components
public/              # Static assets
```

## Newsletter Format

Newsletter issues are in `src/pages/newsletter/XXX.mdx`. Standard sections:
1. **Headlines** - Major news with inline logo components
2. **Sponsors** - Sponsor blocks with logos and CTAs
3. **Engines** - Engine release updates
4. **Tools** - Tool updates
5. **Videos** - Tutorial/showcase videos
6. **Articles** - Blog posts and guides
7. **Games** - Featured games using `<GameRelease>` component
8. **Demos** - Technical demos

### Link Format for Newsletter Entries

```markdown
- 🎬 [**Video Title**](https://url.com) by [Author Name](https://x.com/handle)
- 🎓 [**Article Title**](https://url.com) by [Author Name](https://x.com/handle)
- <ThreeLogo /> [**Tool/Engine Update**](https://url.com) by [Author](https://x.com/handle)
```

### GameRelease Component Format

```jsx
<GameRelease
  title="Game Name"
  url="https://poki.com/en/g/game-slug"
  developer="Developer Name"
  developerUrl="https://x.com/handle"
  description="Brief description"
  EngineIcon={PlayCanvasLogo}
/>
```

## Logo Components

Import from `lib/logos`:
- Engine logos: `ThreeLogo`, `R3FLogo`, `BabylonLogo`, `PlayCanvasLogo`, `PhaserLogo`, `PixiLogo`, etc.
- Tech logos: `WebGPULogo`, `WebGLLogo`, `WasmLogo`, `JavascriptLogo`, etc.

## Common Commands

```bash
bun install     # Install dependencies
bun run dev     # Start dev server (localhost:3000)
bun run build   # Build for production
bun run lint    # Run ESLint
```

## Important Notes

- Authors are referenced inline with markdown links: `by [Name](https://x.com/handle)`
- Prefer X/Twitter URLs for author links when available
- Use emoji prefixes for content types: 🎬 (videos), 🎓 (tutorials/articles), 🎮 (games)
- Newsletter date format: `<SubTitleDate value="YYYY-MM-DD" />`
