# Getting Started Guide

This guide will help you get up and running with the shadcn/ui starter template.

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <your-repo-url>
cd nextjs-shadcn-starter

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Start Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📚 What You Get

### Pre-installed Components

All 56 shadcn/ui components are ready to use:

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
// ... and many more
```

### Theme System

Dark/light mode is configured and ready:

```tsx
import { ThemeToggle } from "@/components/theme-toggle"

// Use in your components
<ThemeToggle />
```

### Toast Notifications

Sonner is configured for toast notifications:

```tsx
import { toast } from "sonner"

// Show notifications
toast.success("Success message")
toast.error("Error message")
toast.info("Info message")
```

## 🎨 Customization

### Adding New Components

```bash
npx shadcn@latest add <component-name>
```

Example:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add sheet
npx shadcn@latest add calendar
```

### Theme Customization

Edit `components.json` to customize the theme:

```json
{
  "style": "new-york",        // or "default"
  "baseColor": "neutral",     // or "slate", "zinc", "stone", etc.
  "cssVariables": true
}
```

### Styling

All styling is done with Tailwind CSS. Use the semantic color tokens:

```tsx
// ✅ Good - uses semantic colors
<div className="bg-background text-foreground border-border">
  <Button className="bg-primary text-primary-foreground">
    Click me
  </Button>
</div>

// ❌ Avoid - hardcoded colors
<div className="bg-white text-black border-gray-200">
  <Button className="bg-blue-500 text-white">
    Click me
  </Button>
</div>
```

## 📝 Form Handling

### Basic Form

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
})

export function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Input {...form.register("name")} />
      <Input {...form.register("email")} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

### Form with Validation

See `src/components/examples/form-example.tsx` for a complete example with:
- Zod validation
- Error handling
- Multiple input types
- Toast notifications

## 🔌 API Routes

### Creating API Routes

Create files in `src/app/api/`:

```tsx
// src/app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ users: [] })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  return NextResponse.json({ message: 'User created', data: body })
}
```

### Using API Routes

```tsx
// In your components
const response = await fetch('/api/users')
const data = await response.json()
```

See `src/components/examples/api-example.tsx` for a complete example.

## 🎯 Best Practices

### Component Structure

```tsx
// ✅ Good - organized imports
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// ✅ Good - semantic HTML
export function ContactForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <Input placeholder="Your name" />
          <Button type="submit">Send</Button>
        </form>
      </CardContent>
    </Card>
  )
}
```

### Responsive Design

```tsx
// ✅ Good - mobile-first approach
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  <Card>Content</Card>
  <Card>Content</Card>
  <Card>Content</Card>
</div>
```

### Accessibility

```tsx
// ✅ Good - proper labels and ARIA
<Label htmlFor="email">Email</Label>
<Input id="email" type="email" aria-describedby="email-help" />
<p id="email-help">We'll never share your email</p>
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── examples/          # Example components
│   ├── theme-provider.tsx # Theme provider
│   └── theme-toggle.tsx   # Theme toggle
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## 🔧 Development Workflow

### Adding New Pages

```tsx
// src/app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="text-muted-foreground">About page content</p>
    </div>
  )
}
```

### Adding New Components

```tsx
// src/components/my-component.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Component</CardTitle>
      </CardHeader>
      <CardContent>
        Component content
      </CardContent>
    </Card>
  )
}
```

### Environment Variables

Create `.env.local` for environment variables:

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3000/api
DATABASE_URL=your-database-url
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The template works with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📖 Documentation

### Component Documentation

Each component has detailed documentation in the `docs/` folder:

- Installation instructions
- Usage examples
- API reference
- Best practices

### Key Files

- `docs/01_INSTALL_AND_CONFIGURE_SHADCN_NEXTJS.md` - Setup guide
- `docs/03_THEMING.md` - Theme customization
- `docs/29_REACT_HOOK_FORM.md` - Form handling
- `docs/48_SONNER.md` - Toast notifications

## 🐛 Troubleshooting

### Common Issues

1. **Component not found**
   ```bash
   npx shadcn@latest add <component-name>
   ```

2. **Theme not working**
   - Check `src/components/theme-provider.tsx`
   - Ensure `suppressHydrationWarning` is set on html tag

3. **Styling issues**
   - Check `src/app/globals.css`
   - Verify Tailwind CSS is properly configured

### Getting Help

- Check the `docs/` folder for component-specific documentation
- Review the example components in `src/components/examples/`
- Open an issue on GitHub for bugs or feature requests

## 🎉 Next Steps

1. **Explore Components**: Check out all available components in the `docs/` folder
2. **Customize Theme**: Modify colors and styling in `components.json`
3. **Add Features**: Build your application using the provided examples
4. **Deploy**: Deploy your application to your preferred platform

Happy coding! 🚀
