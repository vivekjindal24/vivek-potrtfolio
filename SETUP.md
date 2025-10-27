# Installation & Setup Guide

This guide will help you set up and customize the Vivek Jindal portfolio website.

## Prerequisites

- Node.js 18+ and npm
- Git
- A code editor (VS Code recommended)
- EmailJS account (for contact form)

## Step-by-Step Setup

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/vivekjindal/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

#### Getting EmailJS Credentials

1. Go to [EmailJS](https://www.emailjs.com/)
2. Create a free account
3. Add an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Go to "Integration" → "API Keys"
6. Copy Service ID, Template ID, and Public Key

### 3. Customize Content

#### Personal Information

Edit `src/pages/Home.tsx`:
- Update name, tagline, and profile image
- Modify social media links
- Change download resume link

#### About Section

Edit `src/pages/About.tsx`:
- Update bio and journey description
- Modify education details
- Update skills list

#### Projects

Edit `src/pages/Projects.tsx`:
- Add/remove projects
- Update project images (place in `/public/projects/`)
- Modify tech stack tags
- Add GitHub and demo links

#### Publications

Edit `src/pages/Publications.tsx`:
- Add your publications
- Update patent information
- Modify DOI links

#### Experience & Education

Edit `src/pages/Experience.tsx`:
- Update work experience
- Modify education details
- Add achievements

### 4. Update Images

Replace these images in the `/public` folder:

- `profile.jpg` - Your profile photo (recommended: 500x500px)
- `og-image.jpg` - Open Graph image for social sharing (1200x630px)
- `favicon.svg` - Browser favicon
- `apple-touch-icon.png` - iOS home screen icon (180x180px)
- `pwa-192x192.png` - PWA icon (192x192px)
- `pwa-512x512.png` - PWA icon (512x512px)

For project images:
- Create `/public/projects/` folder
- Add project images (recommended: 800x600px)

### 5. Configure Site Metadata

Edit `src/lib/config.ts`:

```typescript
export const siteConfig = {
  name: 'Your Name',
  title: 'Your Name - Your Title',
  description: 'Your description',
  url: 'https://yourwebsite.com',
  links: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:your@email.com',
  },
  // ... update other fields
};
```

Edit `index.html`:
- Update title and meta descriptions
- Modify Open Graph tags
- Update JSON-LD schema

### 6. Customize Theme

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        // ... customize
      },
    },
  },
}
```

Edit `src/index.css` to modify CSS variables:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  /* ... customize other colors */
}
```

### 7. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site!

### 8. Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### 9. Test Before Deployment

```bash
# Run tests
npm test

# Check types
npm run type-check

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables in Vercel dashboard
5. Deploy!

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Add environment variables
7. Deploy!

Or use Netlify CLI:

```bash
npm i -g netlify-cli
netlify deploy --prod
```

## GitHub Actions CI/CD

The project includes a GitHub Actions workflow for automated deployment:

1. Add these secrets to your GitHub repository:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

2. Push to the `main` branch to trigger deployment

## Common Customizations

### Add a New Page

1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation link in `src/components/Navigation.tsx`

### Modify Animations

Edit animation variants in page components:

```tsx
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
```

### Change Fonts

Edit `index.html` to add new Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;700&display=swap" rel="stylesheet" />
```

Update `src/index.css`:

```css
body {
  font-family: 'YourFont', sans-serif;
}
```

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Clear Vite cache: `rm -rf node_modules/.vite`

### EmailJS Not Working

1. Verify your credentials in `.env`
2. Check EmailJS dashboard for service status
3. Ensure template variables match your form fields
4. Check browser console for errors

### Images Not Loading

1. Ensure images are in the `public` folder
2. Use paths starting with `/` (e.g., `/profile.jpg`)
3. Check file extensions are correct
4. Verify image files aren't corrupted

## Getting Help

- [Documentation](https://github.com/vivekjindal/portfolio)
- [Report Issues](https://github.com/vivekjindal/portfolio/issues)
- Email: vivek@example.com

## License

MIT License - feel free to use and modify!
