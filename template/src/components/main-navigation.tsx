"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github } from "lucide-react"
import Image from "next/image"

export function MainNavigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Auto-switching Logo */}
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
              <span className="font-bold text-xl">Loom Starter</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://github.com/shadcn-ui/ui" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="shadcn/ui GitHub"
              >
                <Github className="h-4 w-4 mr-2" />
                shadcn/ui
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
