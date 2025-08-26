"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  BookOpen, 
  ExternalLink, 
  FileText, 
  Zap, 
  CheckCircle
} from "lucide-react"

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Project Title & Description */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="border-0 shadow-none bg-transparent">
                <CardHeader className="pb-4">
                  <CardTitle className="text-5xl md:text-7xl font-bold tracking-tight">
                    Loom Starter
                  </CardTitle>
                  <CardDescription className="text-xl md:text-2xl text-muted-foreground">
                    Professional starter template with Web Interface Guidelines
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            {/* Tech Stack Badges */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Badge variant="secondary" className="text-sm px-3 py-1">Next.js 15</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">shadcn/ui</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">TypeScript</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">Tailwind CSS v4</Badge>
            </div>
          </div>

          {/* Start Building - Priority Section */}
          <Card className="max-w-2xl mx-auto border-2 border-primary/20">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center justify-center gap-3 text-xl">
                <FileText className="h-5 w-5" />
                Start Building Your Project
              </CardTitle>
              <CardDescription className="text-center">
                Follow these steps to customize the template and begin development
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold flex-shrink-0 mt-0.5">1</Badge>
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Replace the welcome page content</CardTitle>
                    <CardDescription>Edit <code className="bg-muted px-1 rounded">src/app/page.tsx</code> with your own content</CardDescription>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold flex-shrink-0 mt-0.5">2</Badge>
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Update the navigation</CardTitle>
                    <CardDescription>Modify <code className="bg-muted px-1 rounded">src/components/main-navigation.tsx</code> for your menu items</CardDescription>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold flex-shrink-0 mt-0.5">3</Badge>
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Customize the theme</CardTitle>
                    <CardDescription>Update colors in <code className="bg-muted px-1 rounded">src/app/globals.css</code></CardDescription>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold flex-shrink-0 mt-0.5">4</Badge>
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Replace the logo and favicon</CardTitle>
                    <CardDescription>
                      Replace <code className="bg-muted px-1 rounded">public/loom-light.svg</code> and <code className="bg-muted px-1 rounded">public/loom-dark.svg</code> with your logo variants, and <code className="bg-muted px-1 rounded">public/favicon-light.svg</code> and <code className="bg-muted px-1 rounded">public/favicon-dark.svg</code> with your favicon variants
                    </CardDescription>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold flex-shrink-0 mt-0.5">5</Badge>
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Update branding</CardTitle>
                    <CardDescription>Change &quot;Loom Starter&quot; to your brand name in <code className="bg-muted px-1 rounded">src/app/layout.tsx</code> and <code className="bg-muted px-1 rounded">src/components/main-navigation.tsx</code></CardDescription>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold flex-shrink-0 mt-0.5">6</Badge>
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Update GitHub links</CardTitle>
                    <CardDescription>Change the GitHub URL in <code className="bg-muted px-1 rounded">src/components/main-navigation.tsx</code> and <code className="bg-muted px-1 rounded">src/components/footer.tsx</code> to point to your repository</CardDescription>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold flex-shrink-0 mt-0.5">7</Badge>
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Add new pages</CardTitle>
                    <CardDescription>Create pages in <code className="bg-muted px-1 rounded">src/app/</code> directory</CardDescription>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="pb-6">
              <CardTitle className="flex items-center justify-center gap-3 text-xl">
                <Zap className="h-5 w-5" />
                What&apos;s Included
              </CardTitle>
              <CardDescription className="text-center">
                Everything you need to build professional applications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Complete shadcn/ui Component Library</CardTitle>
                    <CardDescription>All 56 components pre-installed and configured with TypeScript</CardDescription>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Web Interface Guidelines Applied</CardTitle>
                    <CardDescription>Professional UX patterns including typography, motion, touch interactions, accessibility, and performance optimizations</CardDescription>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                  <div className="space-y-2 text-left">
                    <CardTitle className="text-base">Modern Development Stack</CardTitle>
                    <CardDescription>Next.js 15 with App Router, React 19, Tailwind CSS v4, and dark mode support</CardDescription>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Documentation Links */}
              <div className="space-y-4">
                <CardTitle className="text-base text-center">Documentation</CardTitle>
                <div className="grid gap-3 md:grid-cols-2">
                  <Button variant="outline" size="sm" asChild className="justify-start">
                    <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="h-4 w-4 mr-3" />
                      shadcn/ui Docs
                    </a>
                  </Button>
                  
                  <Button variant="outline" size="sm" asChild className="justify-start">
                    <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-3" />
                      Next.js Docs
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
