"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Palette, Zap, Code, Smartphone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Branding */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Next.js 15 + shadcn/ui
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Professional starter template with Web Interface Guidelines
            </p>
            <div className="flex justify-center gap-2">
              <Badge variant="secondary">Next.js 15</Badge>
              <Badge variant="secondary">shadcn/ui</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">Tailwind CSS</Badge>
            </div>
          </div>

          {/* Quick Start Guide */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Getting Started
              </CardTitle>
              <CardDescription>
                Everything you need to start building your next project
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-left space-y-3">
                <p className="text-sm text-muted-foreground">
                  Navigate to the documentation to find all the information you need:
                </p>
                <div className="space-y-2">
                  <Link href="/docs">
                    <Button variant="outline" className="w-full justify-between">
                      <span className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Component Documentation
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/docs/shadcn">
                    <Button variant="outline" className="w-full justify-between">
                      <span className="flex items-center gap-2">
                        <Palette className="h-4 w-4" />
                        shadcn/ui Guides
                      </span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardHeader className="text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Ready to Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All shadcn/ui components installed and configured
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Palette className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Web Interface Guidelines applied for polished UX
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="text-center">
                <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
                <CardTitle className="text-lg">Responsive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mobile-first design with dark mode support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
