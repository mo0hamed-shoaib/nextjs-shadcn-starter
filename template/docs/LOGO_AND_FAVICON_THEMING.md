## How Favicon Auto-Switching Works

The favicon auto-switching between dark and light variants based on browser theme is implemented using **CSS media queries** in the HTML metadata. Here's the complete implementation:

### 1. **Create Two Favicon Variants**

First, you need two different favicon files:
- `favicon-dark.svg` - Dark version (black icon on transparent background)
- `favicon-light.svg` - Light version (white icon on transparent background)

### 2. **Configure the Icons in Next.js Metadata**

In your `app/layout.tsx` file, the favicon switching is configured in the `generateMetadata()` function:

```typescript
export async function generateMetadata(): Promise<Metadata> {
  return {
    // ... other metadata
    icons: {
      icon: [
        { 
          url: "/favicon-dark.svg", 
          type: "image/svg+xml", 
          media: "(prefers-color-scheme: light)" 
        },
        { 
          url: "/favicon-light.svg", 
          type: "image/svg+xml", 
          media: "(prefers-color-scheme: dark)" 
        },
      ],
      apple: "/apple-touch-icon.png",
    },
    // ... rest of metadata
  }
}
```

### 3. **How the Media Queries Work**

The key is the `media` attribute in each icon configuration:

- `media: "(prefers-color-scheme: light)"` - This favicon is used when the user's system is set to light mode
- `media: "(prefers-color-scheme: dark)"` - This favicon is used when the user's system is set to dark mode

### 4. **Browser Behavior**

When a user visits your website:
1. The browser checks the user's system theme preference
2. It automatically selects the appropriate favicon based on the `prefers-color-scheme` media query
3. The favicon switches automatically when the user changes their system theme (without refreshing the page)

### 5. **Additional Implementation Details**

The project also implements the same logic for the logo in the header:

```typescript
{/* Light-on-dark logo for dark mode */}
<Image
  src="/favicon-light.svg"
  alt="Rootly logo"
  width={32}
  height={32}
  className="hidden dark:block"
  priority
/>
{/* Dark-on-light logo for light mode */}
<Image
  src="/favicon-dark.svg"
  alt="Rootly logo"
  width={32}
  height={32}
  className="block dark:hidden"
  priority
/>
```

### 6. **Theme Color Configuration**

The project also sets theme colors for the browser UI:

```typescript
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}
```

### **Key Benefits of This Approach:**

1. **Automatic**: No JavaScript required - it's handled entirely by the browser
2. **Performance**: No additional requests or processing needed
3. **Accessibility**: Respects user's system preferences
4. **Cross-browser**: Works in all modern browsers that support `prefers-color-scheme`

### **Browser Support:**

This feature works in all modern browsers that support the `prefers-color-scheme` media query:
- Chrome 76+
- Firefox 67+
- Safari 12.1+
- Edge 79+

The implementation is elegant and leverages native browser capabilities to provide a seamless user experience that automatically adapts to the user's theme preference!