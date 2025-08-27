# Next.js 15 + shadcn/ui Starter Template

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

**A professional, production-ready starter template featuring Next.js 15, shadcn/ui components, and Web Interface Guidelines.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-repo/nextjs-shadcn-starter)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-repo/nextjs-shadcn-starter)

</div>

---

## 🚀 Quick Start

```bash
# Using npx (recommended)
npx create-nextjs-shadcn-starter@latest my-app

# Or using npm
npm create nextjs-shadcn-starter@latest my-app

# Or using yarn
yarn create nextjs-shadcn-starter my-app

# Or using pnpm
pnpm create nextjs-shadcn-starter my-app

# Navigate to your project
cd my-app

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## ✨ Features

### 🎯 **Core Technologies**
- **Next.js 15** - Latest version with App Router and Turbopack
- **React 19** - Latest React with concurrent features
- **TypeScript** - Full type safety with strict configuration
- **Tailwind CSS v4** - Latest styling with OKLCH colors
- **JetBrains Mono** - Developer-focused typography

### 🎨 **UI & Design**
- **shadcn/ui** - All 56 components pre-installed and configured
- **Dark Mode** - Built-in theme switching with system preference detection
- **Web Interface Guidelines** - Professional UX patterns applied
- **Responsive Design** - Mobile-first approach with touch-friendly interactions

### 🔧 **Developer Experience**
- **Sonner** - Modern toast notifications
- **Sticky Navigation** - Professional header with theme toggle
- **Complete Documentation** - Component guides included in `/docs` folder
- **Performance Optimized** - Web Interface Guidelines for better UX

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme + navigation
│   ├── page.tsx            # Clean welcome page
│   └── globals.css         # shadcn/ui + Web Interface Guidelines
├── components/
│   ├── ui/                 # All 56 shadcn/ui components
│   ├── main-navigation.tsx # Sticky navigation header
│   ├── theme-toggle.tsx    # Dark/light mode switcher
│   └── footer.tsx          # Simple footer
├── lib/
│   └── utils.ts           # shadcn/ui utilities
└── hooks/
    └── use-mobile.ts      # Essential hooks
```

## 🎨 Components

All 56 shadcn/ui components are pre-installed and ready to use:

### **Layout & Navigation**
- Card, Container, Separator, Aspect Ratio
- Button, Link, Breadcrumb, Tabs, Menu, Navigation Menu

### **Forms & Input**
- Input, Textarea, Select, Checkbox, Radio, Switch
- Form validation with React Hook Form + Zod
- Date Picker, Time Picker, Color Picker

### **Feedback & Display**
- Alert, Toast (Sonner), Progress, Skeleton, Badge
- Table, Data Table, Chart, Avatar, Calendar

### **Overlay & Interaction**
- Dialog, Popover, Tooltip, Hover Card, Sheet
- Drawer, Context Menu, Command Palette

## 🎯 Getting Started

### 1. **Explore Components**
Visit `/docs` to see all available components with detailed examples.

### 2. **Customize Theme**
Modify colors in `src/app/globals.css`:
```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}
```

### 3. **Update Navigation**
Modify `src/components/main-navigation.tsx` for your menu items.

### 4. **Add New Components**
```bash
npx shadcn@latest add <component-name>
```

### 5. **Build Your App**
Start building your application using the provided examples!

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🎨 Theming

The template uses shadcn/ui's OKLCH color system with CSS variables for consistent theming across light and dark modes.

### **Customization**
- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Fonts**: JetBrains Mono for developer-focused typography
- **Components**: All components follow the theme automatically

### **Dark Mode**
- Automatic system preference detection
- Manual toggle in navigation
- Smooth transitions between themes

## 📱 Responsive Design

- **Mobile-first** approach with responsive breakpoints
- **Touch-friendly** interactions and sizing
- **Accessible** components with proper ARIA labels
- **Performance optimized** with Web Interface Guidelines

## 🔧 Configuration

### **Tailwind CSS v4**
- OKLCH colors for better color spaces
- CSS variables for dynamic theming
- Container queries for responsive design
- Modern CSS features for better performance

### **TypeScript**
- Strict mode enabled
- Path mapping configured
- Component types included
- Full type safety

## 📚 Documentation

The template includes complete documentation in the `/docs` folder:

- **Component Documentation** - Detailed usage examples for all components
- **shadcn/ui Guides** - Setup, theming, and customization guides
- **Web Interface Guidelines** - Professional UX patterns and best practices

You can also visit the [official shadcn/ui documentation](https://ui.shadcn.com/) for additional resources.

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### **Other Platforms**
The template works with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This template is based on [shadcn/ui](https://ui.shadcn.com/) and follows their license.

## 📞 Support

- **Documentation**: Visit `/docs` in your project
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com/)
- **Next.js**: [nextjs.org](https://nextjs.org/)
- **Issues**: [GitHub Issues](https://github.com/your-repo/nextjs-shadcn-starter/issues)

---

<div align="center">

**Built with ❤️ using Next.js 15 and shadcn/ui**

[![GitHub stars](https://img.shields.io/github/stars/your-repo/nextjs-shadcn-starter?style=social)](https://github.com/your-repo/nextjs-shadcn-starter)
[![GitHub forks](https://img.shields.io/github/forks/your-repo/nextjs-shadcn-starter?style=social)](https://github.com/your-repo/nextjs-shadcn-starter)

</div>
