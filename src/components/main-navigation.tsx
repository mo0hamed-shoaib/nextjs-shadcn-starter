"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { 
  Github, 
  LayoutGrid, 
  BookOpen,
  Code,
  Palette,
  BarChart3,
  Blocks,
  Settings,
  FileText,
  Search
} from "lucide-react"

const navigationItems = [
  { name: "Overview", href: "/", icon: BookOpen },
  { name: "Components", href: "/components", icon: Code },
  { name: "Forms", href: "/forms", icon: FileText },
  { name: "API", href: "/api", icon: BarChart3 },
  { name: "Layouts", href: "/layouts", icon: LayoutGrid },
  { name: "Documentation", href: "/docs", icon: BookOpen },
]

const searchItems = [
  { name: "Overview", href: "/", category: "Pages" },
  { name: "Components", href: "/components", category: "Pages" },
  { name: "Forms", href: "/forms", category: "Pages" },
  { name: "API", href: "/api", category: "Pages" },
  { name: "Layouts", href: "/layouts", category: "Pages" },
  { name: "Documentation", href: "/docs", category: "Pages" },
  { name: "Button", href: "/docs", category: "Components" },
  { name: "Card", href: "/docs", category: "Components" },
  { name: "Input", href: "/docs", category: "Components" },
  { name: "Dialog", href: "/docs", category: "Components" },
  { name: "Tabs", href: "/docs", category: "Components" },
  { name: "Form", href: "/docs", category: "Components" },
  { name: "API Routes", href: "/docs", category: "Features" },
  { name: "Theme Toggle", href: "/docs", category: "Features" },
  { name: "Toast Notifications", href: "/docs", category: "Features" },
]

export function MainNavigation() {
  const [open, setOpen] = useState(false)
  const [isMac, setIsMac] = useState(false)

  useEffect(() => {
    // Detect operating system
    const userAgent = navigator.userAgent.toLowerCase()
    const isMacOS = userAgent.includes('mac')
    setIsMac(isMacOS)
  }, [])

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = (command: () => unknown) => {
    setOpen(false)
    command()
  }

  return (
    <>
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Left Side */}
            <div className="flex items-center gap-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="relative">
                  {/* Light-on-dark logo for dark mode */}
                  <Image
                    src="/loom-light.svg"
                    alt="Loom logo"
                    width={32}
                    height={32}
                    className="hidden dark:block"
                    priority
                  />
                  {/* Dark-on-light logo for light mode */}
                  <Image
                    src="/loom-dark.svg"
                    alt="Loom logo"
                    width={32}
                    height={32}
                    className="block dark:hidden"
                    priority
                  />
                </div>
                <span className="font-semibold">Loom Starter</span>
              </Link>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center gap-1">
                {navigationItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="sm"
                    className="h-8 px-3"
                    asChild
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                ))}
              </nav>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <Button
                variant="outline"
                size="sm"
                className="h-8 px-3 text-muted-foreground relative w-48 justify-start interactive"
                onClick={() => setOpen(true)}
                aria-label="Search pages, components, and features"
              >
                <Search className="h-4 w-4 mr-2" />
                <span className="flex-1 text-left">Search...</span>
                <kbd className="pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2 inline-flex h-4 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 tabular-nums">
                  <span className="text-xs">{isMac ? "⌘" : "Ctrl"}</span>K
                </kbd>
              </Button>

              {/* GitHub */}
              <Button variant="ghost" size="sm" className="h-8 px-2 interactive" asChild>
                <a 
                  href="https://github.com/shadcn-ui/ui" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="View shadcn/ui on GitHub"
                >
                  <Github className="h-4 w-4 mr-1" />
                  <span className="hidden sm:inline tabular-nums">92.8k</span>
                </a>
              </Button>

              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search pages, components, and features..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            {searchItems.filter(item => item.category === "Pages").map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => runCommand(() => window.location.href = item.href)}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Components">
            {searchItems.filter(item => item.category === "Components").map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => runCommand(() => window.location.href = item.href)}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Features">
            {searchItems.filter(item => item.category === "Features").map((item) => (
              <CommandItem
                key={item.name}
                onSelect={() => runCommand(() => window.location.href = item.href)}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
