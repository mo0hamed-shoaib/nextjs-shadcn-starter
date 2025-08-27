import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-sm text-muted-foreground">
            © 2025 Loom Starter by Mohamed Gamal
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mo0hamed-shoaib/nextjs-shadcn-starter/tree/starter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span className="text-sm">View Source</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
