"use client"

import Link from "next/link"
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
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Project Title & Description */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Next.js 15 + shadcn/ui
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Professional starter template with Web Interface Guidelines
              </p>
            </div>
            
            {/* Tech Stack Badges */}
            <div className="flex justify-center gap-3 flex-wrap">
              <Badge variant="secondary" className="text-sm px-3 py-1">Next.js 15</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">shadcn/ui</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">TypeScript</Badge>
              <Badge variant="secondary" className="text-sm px-3 py-1">Tailwind CSS v4</Badge>
            </div>
          </div>

          {/* Quick Start Guide */}
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Zap className="h-6 w-6" />
                Get Started
              </CardTitle>
              <CardDescription className="text-lg">
                Everything you need to start building your next project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Getting Started Steps */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium">All components are ready to use</p>
                    <p className="text-sm text-muted-foreground">
                      56 shadcn/ui components pre-installed and configured
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium">Professional guidelines applied</p>
                    <p className="text-sm text-muted-foreground">
                      Web Interface Guidelines for polished UX
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium">Dark mode & responsive design</p>
                    <p className="text-sm text-muted-foreground">
                      Built-in theme switching and mobile-first approach
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              {/* Documentation Links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Documentation & Resources</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                    <Link href="/docs">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">Local Documentation</div>
                          <div className="text-sm text-muted-foreground">Complete component guides</div>
                        </div>
                      </div>
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="h-auto p-4 justify-start" asChild>
                    <a href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-3">
                        <ExternalLink className="h-5 w-5" />
                        <div className="text-left">
                          <div className="font-medium">shadcn/ui Docs</div>
                          <div className="text-sm text-muted-foreground">Official documentation</div>
                        </div>
                      </div>
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Cleanup Guide */}
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Start Building Your Project
              </CardTitle>
              <CardDescription>
                Clean up the template and start building your application
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-left space-y-3">
                <p className="text-sm text-muted-foreground">
                  To start building your own project, you can:
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Replace the content in <code className="bg-muted px-1 rounded">src/app/page.tsx</code> with your own</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Update the navigation in <code className="bg-muted px-1 rounded">src/components/main-navigation.tsx</code></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Customize colors in <code className="bg-muted px-1 rounded">src/app/globals.css</code></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span>Add new pages in <code className="bg-muted px-1 rounded">src/app/</code> directory</span>
                  </div>
                </div>
              </div>
            </CardContent>
                    </Card>
        </div>
      </section>
    </div>
  )
}
