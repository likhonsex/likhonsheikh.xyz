# Likhon Sheikh - Personal Portfolio

A beautiful personal portfolio website showcasing Bengali poetry and prose, combined with professional tech portfolio elements. Built with modern web technologies and designed with a romantic, melancholic aesthetic.

![Portfolio Preview](https://via.placeholder.com/1200x600/fdfbf7/c06c84?text=Likhon+Sheikh+Portfolio)

## Features

### Poetry & Prose Showcase
- **Elegant Poem Display**: Beautifully formatted Bengali poetry with custom typography
- **MDX Content System**: Easy-to-manage content using Markdown with Frontmatter
- **Category Filtering**: Filter poems by categories like প্রেম (Love), বিরহ (Separation), আশা (Hope), and more
- **Responsive Design**: Seamless experience across all devices

### Professional Portfolio
- **Tech Skills Showcase**: Highlight your expertise in React, Next.js, Solidity, Node.js, and AI agents
- **About Page**: Professional bio with Telegram contact integration
- **Smooth Animations**: Polished user experience with Framer Motion animations

### Technical Excellence
- **Performance Optimized**: Static export for blazing fast load times
- **SEO Friendly**: Semantic HTML and proper meta tags
- **PWA Ready**: Includes manifest.json for installable app experience
- **Smooth Scrolling**: Lenis momentum scrolling for premium feel

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Content**: MDX with remark
- **Fonts**: Custom Bengali fonts (Kaium Simanto, Shohid Tahmid Tamin)
- **Smooth Scroll**: Lenis
- **Deployment**: Static export (compatible with GitHub Pages, Vercel, Netlify)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/likhonsex/likhonsheikh.xyz.git
   cd likhonsheikh.xyz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Build the static export
npm run build

# The output will be in the `out` directory
```

## Project Structure

```
likhonsheikh.xyz/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── poems/             # Poetry pages with dynamic routing
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── MainLayout.tsx
│   │   ├── PoemCard.tsx
│   │   ├── FilterTabs.tsx
│   │   └── SmoothScroll.tsx
│   ├── content/
│   │   └── poems/             # MDX poetry files
│   │       ├── *.mdx
│   ├── lib/                   # Utilities and helpers
│   │   ├── poems.ts           # Poetry data fetching
│   │   ├── types.ts           # TypeScript types
│   │   └── store.ts           # State management
├── public/                    # Static assets
│   ├── fonts/                 # Bengali fonts
│   ├── hero-banner.jpg
│   └── manifest.json
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Adding New Poems

1. Create a new `.mdx` file in `src/content/poems/`
2. Add the required Frontmatter:

```markdown
---
title: "কবিতার শিরোনাম"
slug: "poem-slug"
date: "2024-01-01"
category: "প্রেম"
description: "কবিতার সংক্ষিপ্ত বিবরণ"
---

আপনার কবিতার বিষয়বস্তু এখানে লিখুন...

## শিরোনাম

কবিতার পংক্তিগুলো এখানে...
```

3. The poem will automatically appear on the site with proper formatting

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  dustyRose: '#C06C84',
  paper: '#FDFBF7',
  charcoal: '#36454F',
  softGray: '#E8E8E8',
}
```

### Fonts
Bengali fonts are configured in `src/app/globals.css` using `@font-face` declarations. Replace font files in `public/fonts/` to use different Bengali fonts.

### Content
- Update professional bio in `src/app/about/page.tsx`
- Modify poem content in `src/content/poems/`
- Adjust skills/tags in the About page component

## Deployment

### GitHub Pages
1. Build the static export: `npm run build`
2. Push to your GitHub repository
3. Enable GitHub Pages in repository settings
4. Set source to the `out` folder

### Vercel
Simply connect your GitHub repository to Vercel - it will auto-detect Next.js and deploy automatically.

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `out`

## Contact

- **Telegram**: [@likhonsheikh](https://t.me/likhonsheikh)
- **Email**: likhonsexwithnlp@gmail.com
- **GitHub**: [@likhonsex](https://github.com/likhonsex)

## License

This project is open source and available under the MIT License.

---

Made with ❤️ by Likhon Sheikh
