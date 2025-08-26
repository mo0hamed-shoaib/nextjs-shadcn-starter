# Next.js 15 + shadcn/ui Starter Template

A modern, production-ready starter template built with Next.js 15, shadcn/ui components, and TypeScript. This template includes all 56 shadcn/ui components, comprehensive documentation, and follows modern web development best practices.

## ✨ Features

- **Next.js 15** - Latest version with App Router and Turbopack
- **shadcn/ui** - All 56 components installed and ready to use
- **TypeScript** - Full type safety throughout the application
- **Dark Mode** - Built-in theme switching with next-themes
- **Search Functionality** - Global search with Command component
- **API Routes** - Example GET and POST endpoints
- **Form Validation** - Complete form examples with validation
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Web Interface Guidelines** - Follows modern UI/UX best practices

## 🎯 Web Interface Guidelines

This template implements the [Web Interface Guidelines](https://interfaces.rauno.me/) to ensure a polished, professional user experience:

### Typography
- **Font Smoothing**: `-webkit-font-smoothing: antialiased` for crisp text
- **Text Rendering**: `text-rendering: optimizeLegibility` for better readability
- **Tabular Numbers**: `font-variant-numeric: tabular-nums` for consistent number display
- **iOS Text Size**: Prevents unexpected text resizing on iOS devices

### Motion & Animation
- **Fast Interactions**: All animations limited to 200ms for immediate feel
- **Proportional Scaling**: Button press animations use 0.96 scale instead of 0.8
- **Smooth Scrolling**: `scroll-behavior: smooth` for anchor navigation
- **Dialog Animations**: Optimized enter/exit animations with proper scaling

### Touch & Mobile
- **Hover States**: Only visible on devices with hover capability (`@media (hover: hover)`)
- **Input Sizing**: 16px+ font size prevents iOS zoom on focus
- **Tap Highlight**: Disabled default iOS tap highlight with custom alternatives
- **Touch Interactions**: Proper touch event handling

### Accessibility
- **Focus Rings**: Uses `box-shadow` instead of `outline` for better border-radius support
- **ARIA Labels**: Proper labels for icon-only interactive elements
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Semantic HTML and proper ARIA attributes

### Performance
- **Will Change**: Optimized for scroll animations and transitions
- **Decorative Elements**: `pointer-events: none` for non-interactive elements
- **User Select**: Disabled for interactive elements to prevent text selection
- **Theme Switching**: Disabled transitions during theme changes to prevent layout shifts

### CSS Classes Available
```css
/* Typography */
.tabular-nums          /* Tabular number spacing */

/* Performance */
.will-change-transform /* Optimize transform animations */
.will-change-opacity   /* Optimize opacity animations */

/* Interactive Elements */
.interactive           /* Disable text selection */
.decorative           /* Disable pointer events */

/* Theme Switching */
.no-transition        /* Disable transitions */
```

## 🚀 Quick Start

1. **Clone the template**
   ```bash
   npx create-next-app@latest my-app --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
   ```

2. **Install dependencies**
   ```bash
   cd my-app
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js 15 App Router
│   ├── api/               # API routes
│   ├── components/        # Page components
│   ├── docs/             # Documentation page
│   ├── forms/            # Form examples
│   ├── layouts/          # Layout examples
│   └── globals.css       # Global styles with Web Interface Guidelines
├── components/
│   ├── ui/               # shadcn/ui components (56 components)
│   ├── examples/         # Example components
│   └── theme-toggle.tsx  # Theme switching component
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Available Pages

- **Overview** (`/`) - Template showcase and features
- **Components** (`/components`) - Interactive component examples
- **Forms** (`/forms`) - Form validation examples
- **API** (`/api`) - API route examples
- **Layouts** (`/layouts`) - Common layout patterns
- **Documentation** (`/docs`) - Component documentation

## 🔧 Customization

### Adding New Components
```bash
npx shadcn@latest add [component-name]
```

### Theme Customization
Edit `src/app/globals.css` to customize colors, fonts, and other design tokens.

### Web Interface Guidelines
All guidelines are implemented in `src/app/globals.css`. Add new guidelines by following the existing patterns.

## 📚 Documentation

- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)
- **Next.js 15**: [nextjs.org/docs](https://nextjs.org/docs)
- **Web Interface Guidelines**: [interfaces.rauno.me](https://interfaces.rauno.me)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This template is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com) for the amazing component library
- [Next.js](https://nextjs.org) team for the incredible framework
- [Rauno](https://interfaces.rauno.me) for the Web Interface Guidelines
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
