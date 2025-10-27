# Vivek Jindal - Personal Portfolio

A modern, high-performance personal portfolio website built with the latest frontend technologies.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router DOM v7** - Client-side routing
- **ShadCN/UI** - Beautiful, accessible components
- **Lucide React** - Modern icon library
- **TanStack Query** - Data fetching & caching
- **Zustand** - Lightweight state management
- **EmailJS** - Contact form integration
- **Vitest** - Unit testing
- **PWA Support** - Progressive Web App capabilities

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism, gradients, and smooth animations
- 🌓 **Dark/Light Mode** - Seamless theme switching
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Performance Optimized** - Lazy loading, code splitting, and caching
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and structured data
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🎭 **Animated Cursor** - Custom cursor on desktop
- 🚀 **PWA Ready** - Installable as a native app
- 📧 **Contact Form** - EmailJS integration
- 🎯 **Type Safe** - Full TypeScript support

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # ShadCN/UI components
│   ├── Layout.tsx
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ...
├── pages/           # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Publications.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── context/         # React context providers
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── App.tsx          # Main app component
├── main.tsx         # Entry point
└── index.css        # Global styles
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vivekjindal/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm test` - Run tests
- `npm run type-check` - Check TypeScript types

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Manual Build

```bash
npm run build
```

The build files will be in the `dist` folder.

## 🔧 Configuration

### EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

### Customization

- **Colors**: Edit `tailwind.config.js` for theme colors
- **Content**: Update content in page components
- **Images**: Replace images in `/public` folder
- **Meta Tags**: Update SEO meta tags in `index.html`

## 📦 PWA Support

The site is PWA-ready with offline support. To customize:

1. Edit `vite.config.ts` for PWA settings
2. Update icons in `/public` folder
3. Modify manifest in PWA plugin configuration

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm test -- --coverage
```

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Vivek Jindal**
- GitHub: [@vivekjindal](https://github.com/vivekjindal)
- LinkedIn: [/in/vivekjindal](https://linkedin.com/in/vivekjindal)
- Email: vivek@example.com

## 🙏 Acknowledgments

- [ShadCN/UI](https://ui.shadcn.com/) for beautiful components
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for icons

---

⭐ Star this repo if you find it helpful!
