"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex-1 flex items-center justify-center py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Hero */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Next.js 15 + shadcn/ui
            </h1>
            <p className="text-xl text-muted-foreground font-medium">
              A Professional starter template with Web Interface Guidelines, Dark/Light Mode, Navbar, and Footer Out of the Box
            </p>
          </div>

          {/* Features */}
          <div className="grid gap-4 md:grid-cols-3 text-left">
            <div className="space-y-2">
              <h3 className="font-medium">Complete shadcn/ui Library</h3>
              <p className="text-sm text-muted-foreground">All 56 components pre-installed</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Web Interface Guidelines</h3>
              <p className="text-sm text-muted-foreground">Professional UX patterns applied</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Modern Stack</h3>
              <p className="text-sm text-muted-foreground">Next.js 15, React 19, Tailwind v4</p>
            </div>
          </div>

          {/* Quick Start */}
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Get Started</CardTitle>
              <CardDescription>Follow these steps to customize the template</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold">1</Badge>
                <div className="text-left">
                  <p className="font-medium">Replace this content</p>
                  <p className="text-sm text-muted-foreground">Edit <code className="bg-muted px-1 rounded">src/app/page.tsx</code> with your own content</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold">2</Badge>
                <div className="text-left">
                  <p className="font-medium">Update navigation</p>
                  <p className="text-sm text-muted-foreground">Modify <code className="bg-muted px-1 rounded">src/components/main-navigation.tsx</code> for your menu items</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold">3</Badge>
                <div className="text-left">
                  <p className="font-medium">Customize theme</p>
                  <p className="text-sm text-muted-foreground">Update colors in <code className="bg-muted px-1 rounded">src/app/globals.css</code></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold">4</Badge>
                <div className="text-left">
                  <p className="font-medium">Replace logo and favicon</p>
                  <p className="text-sm text-muted-foreground">Replace <code className="bg-muted px-1 rounded">public/loom-light.svg</code> and <code className="bg-muted px-1 rounded">public/loom-dark.svg</code></p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="h-6 w-6 p-0 flex items-center justify-center text-primary font-bold">5</Badge>
                <div className="text-left">
                  <p className="font-medium">Update branding</p>
                  <p className="text-sm text-muted-foreground">Change &quot;Loom Starter&quot; to your brand name in layout and navigation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
