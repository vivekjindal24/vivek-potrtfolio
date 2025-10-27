# 🚀 Quick Reference Card

## Installation
```bash
# Run the automated setup script
./setup.sh

# Or manually:
npm install
cp .env.example .env
# Edit .env with your credentials
```

## Development
```bash
npm run dev              # Start dev server → http://localhost:5173
npm run build            # Build for production
npm run preview          # Preview production build
```

## Code Quality
```bash
npm run lint             # Check for errors
npm run lint:fix         # Auto-fix errors
npm run format           # Format code
npm run type-check       # Check TypeScript
npm test                 # Run tests
```

## Deployment
```bash
# Vercel (recommended)
npm i -g vercel
vercel

# Netlify
npm i -g netlify-cli
netlify deploy --prod

# Manual
npm run build           # Files in dist/
```

## Project Structure
```
src/
├── components/         # Reusable components
│   ├── ui/            # ShadCN components
│   └── ...
├── pages/             # Route pages
│   ├── Home.tsx       # Landing page
│   ├── About.tsx      # About me
│   ├── Projects.tsx   # Projects showcase
│   ├── Publications.tsx # Papers & patents
│   ├── Experience.tsx  # Work & education
│   └── Contact.tsx    # Contact form
├── context/           # React context
├── hooks/             # Custom hooks
└── lib/               # Utilities
```

## Key Files to Customize

### 1. Personal Info
- `src/pages/Home.tsx` - Name, tagline, photo
- `src/pages/About.tsx` - Bio, education, skills
- `src/lib/config.ts` - Site metadata

### 2. Content
- `src/pages/Projects.tsx` - Your projects
- `src/pages/Publications.tsx` - Papers & patents
- `src/pages/Experience.tsx` - Work history
- `src/pages/Contact.tsx` - EmailJS config

### 3. Styling
- `tailwind.config.js` - Theme colors
- `src/index.css` - CSS variables
- `index.html` - Meta tags, fonts

### 4. Images (in /public/)
- `profile.jpg` (500x500px)
- `og-image.jpg` (1200x630px)
- `apple-touch-icon.png` (180x180px)
- `pwa-192x192.png` (192x192px)
- `pwa-512x512.png` (512x512px)
- `resume.pdf`
- `projects/*.jpg` (project images)

## Environment Variables
```env
# .env file
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Get from: https://www.emailjs.com/

## Common Tasks

### Add a New Page
1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add nav link in `src/components/Navigation.tsx`

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Your color */
}
```

### Add Social Links
Update in:
- `src/pages/Home.tsx`
- `src/components/Footer.tsx`
- `src/lib/config.ts`

### Modify Animations
Edit motion variants in pages:
```tsx
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

## Tech Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- React Router v7 (routing)
- ShadCN/UI (components)
- EmailJS (contact form)
- Vitest (testing)

## Documentation
- `README.md` - Full documentation
- `SETUP.md` - Detailed setup guide
- `PROJECT_SUMMARY.md` - Project overview
- `CHANGELOG.md` - Version history

## Support
- Read the docs first
- Check inline code comments
- Review example code
- Open GitHub issue

## Quick Tips
✅ Run `npm run dev` to start development
✅ Use VS Code for best experience
✅ Install recommended extensions
✅ Check `.vscode/settings.json`
✅ Test on mobile devices
✅ Run `npm run build` before deploying
✅ Check Lighthouse scores

## Performance Targets
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

**Ready to build? Run:**
```bash
./setup.sh && npm run dev
```
