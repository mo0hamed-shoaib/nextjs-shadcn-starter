import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Palette, Code, Settings, FileText, ArrowRight } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Complete guides and documentation for all components and features
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Component Documentation
            </CardTitle>
            <CardDescription>
              Detailed guides for all 56 shadcn/ui components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Access the complete documentation for all shadcn/ui components with examples, props, and usage patterns.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">56 Components</Badge>
              <Badge variant="outline">Ready to Use</Badge>
            </div>
            <Button asChild className="w-full">
              <Link href="/docs/shadcn">
                View Component Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Setup Guides
            </CardTitle>
            <CardDescription>
              Installation, configuration, and customization guides
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Learn how to install, configure, and customize shadcn/ui components for your project.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Installation</Badge>
              <Badge variant="outline">Theming</Badge>
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/docs/shadcn">
                View Setup Guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Theming
            </CardTitle>
            <CardDescription>
              Customize colors, fonts, and design tokens
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Learn how to customize the theme, colors, and design system to match your brand.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">OKLCH Colors</Badge>
              <Badge variant="outline">CSS Variables</Badge>
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/docs/shadcn">
                View Theming Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5" />
              Examples
            </CardTitle>
            <CardDescription>
              Code examples and usage patterns
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Explore code examples and common usage patterns for building interfaces.
            </p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Examples</Badge>
              <Badge variant="outline">Patterns</Badge>
            </div>
            <Button asChild variant="outline" className="w-full">
              <Link href="/docs/shadcn">
                View Examples
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          All documentation is available in the <code className="bg-muted px-2 py-1 rounded">docs/</code> folder
        </p>
        <Button asChild>
          <Link href="/docs/shadcn">
            Browse All Documentation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
