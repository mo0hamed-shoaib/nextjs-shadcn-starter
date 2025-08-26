import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="sticky top-[100vh] border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            Built with Next.js 15 and shadcn/ui
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild>
            <a 
              href="https://github.com/shadcn-ui/ui" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="View shadcn/ui on GitHub"
            >
              <Github className="h-4 w-4 mr-2" />
              shadcn/ui
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
