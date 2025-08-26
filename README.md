# Next.js 15 + shadcn/ui Starter Template

A professional, production-ready starter template featuring Next.js 15, shadcn/ui components, and Web Interface Guidelines.

## ✨ Features

- **Next.js 15** - Latest version with App Router and Turbopack
- **shadcn/ui** - All 56 components pre-installed and configured
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Latest styling with OKLCH colors
- **Dark Mode** - Built-in theme switching with system preference detection
- **Web Interface Guidelines** - Professional UX patterns applied
- **Sonner** - Modern toast notifications
- **Sticky Navigation** - Professional header with theme toggle
- **Documentation** - Complete component guides included

## 🚀 Quick Start

```bash
# Clone the starter branch
git clone -b starter https://github.com/your-repo/nextjs-shadcn-starter.git my-app

# Or use npm
npm create nextjs-shadcn-starter@starter my-app

# Navigate to your project
cd my-app

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme + navigation
│   ├── page.tsx            # Clean welcome page
│   └── globals.css         # shadcn/ui + Web Interface Guidelines
├── components/
│   ├── ui/                 # All shadcn/ui components
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

- **Layout**: Card, Container, Separator, Aspect Ratio
- **Navigation**: Button, Link, Breadcrumb, Tabs, Menu
- **Forms**: Input, Textarea, Select, Checkbox, Radio, Switch
- **Feedback**: Alert, Toast, Progress, Skeleton, Badge
- **Data Display**: Table, Data Table, Chart, Avatar
- **Overlay**: Dialog, Popover, Tooltip, Hover Card
- **And many more...**

## 📚 Documentation

Navigate to `/docs` to access complete component documentation and guides:

- **Component Documentation** - Detailed usage examples for all components
- **shadcn/ui Guides** - Setup, theming, and customization guides
- **Web Interface Guidelines** - Professional UX patterns and best practices

## 🎯 Getting Started

1. **Explore Components**: Visit `/docs` to see all available components
2. **Customize Theme**: Modify colors in `src/app/globals.css`
3. **Add Pages**: Create new pages in `src/app/`
4. **Build**: Start building your application!

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

The template uses shadcn/ui's OKLCH color system with CSS variables:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  /* ... more variables */
}
```

Customize colors by modifying the CSS variables in `src/app/globals.css`.

## 📱 Responsive Design

- **Mobile-first** approach
- **Sticky navigation** for better UX
- **Touch-friendly** interactions
- **Accessible** components

## 🔧 Configuration

### Tailwind CSS

The template uses Tailwind CSS v4 with the latest features:

- **OKLCH colors** for better color spaces
- **CSS variables** for theming
- **Container queries** for responsive design
- **Modern CSS features** for better performance

### TypeScript

Full TypeScript support with strict configuration:

- **Strict mode** enabled
- **Path mapping** configured
- **Component types** included

## 📄 License

This template is based on [shadcn/ui](https://ui.shadcn.com/) and follows their license.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

- **Documentation**: Visit `/docs` in your project
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com/)
- **Next.js**: [nextjs.org](https://nextjs.org/)

---

Built with ❤️ using Next.js 15 and shadcn/ui
