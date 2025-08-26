"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNavigation } from "@/components/main-navigation"

export default function LayoutsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      
      {/* Page Header */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Layouts</h1>
          <p className="text-muted-foreground mt-2">
            Common layout patterns for different types of applications
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Dashboard Layout */}
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Layout</CardTitle>
              <CardDescription>Admin dashboard with sidebar navigation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4 h-64">
                {/* Sidebar */}
                <div className="w-48 bg-muted rounded-lg flex flex-col p-4">
                  <div className="space-y-3">
                    <div className="h-8 bg-background rounded font-medium text-sm flex items-center px-3">Dashboard</div>
                    <div className="h-6 bg-background rounded text-xs flex items-center px-3">Analytics</div>
                    <div className="h-6 bg-background rounded text-xs flex items-center px-3">Users</div>
                    <div className="h-6 bg-background rounded text-xs flex items-center px-3">Settings</div>
                  </div>
                </div>
                {/* Main Content */}
                <div className="flex-1 space-y-4">
                  <div className="h-12 bg-muted rounded flex items-center px-4">
                    <span className="text-sm text-muted-foreground">Header with breadcrumbs</span>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="h-20 bg-muted rounded flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Stats Card</span>
                    </div>
                    <div className="h-20 bg-muted rounded flex items-center justify-center">
                      <span className="text-xs text-muted-foreground">Stats Card</span>
                    </div>
                  </div>
                  <div className="h-32 bg-muted rounded flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">Main Content Area</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Landing Page */}
          <Card>
            <CardHeader>
              <CardTitle>Landing Page</CardTitle>
              <CardDescription>Marketing page with hero section</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground font-medium">Hero Section</p>
                  <p className="text-xs text-muted-foreground mt-1">Title, subtitle, and CTA buttons</p>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="h-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Feature 1</span>
                </div>
                <div className="h-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Feature 2</span>
                </div>
                <div className="h-24 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Feature 3</span>
                </div>
              </div>
              <div className="h-20 bg-muted rounded flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Footer Section</span>
              </div>
            </CardContent>
          </Card>

          {/* Card Layout */}
          <Card>
            <CardHeader>
              <CardTitle>Card Layout</CardTitle>
              <CardDescription>Grid-based content layout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-8 bg-muted rounded flex items-center px-4">
                <span className="text-sm text-muted-foreground">Page Header</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="h-32 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Card 1</span>
                </div>
                <div className="h-32 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Card 2</span>
                </div>
                <div className="h-32 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Card 3</span>
                </div>
                <div className="h-32 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Card 4</span>
                </div>
                <div className="h-32 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Card 5</span>
                </div>
                <div className="h-32 bg-muted rounded flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Card 6</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Form Layout */}
          <Card>
            <CardHeader>
              <CardTitle>Form Layout</CardTitle>
              <CardDescription>Multi-step form layout</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-xs text-primary-foreground">1</div>
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs text-muted-foreground">2</div>
                <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs text-muted-foreground">3</div>
              </div>
              <div className="h-32 bg-muted rounded flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Form Fields</span>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" size="sm">Back</Button>
                <Button size="sm">Next</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Layout Features */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Layout Features</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Responsive Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All layouts are fully responsive and work seamlessly across desktop, tablet, and mobile devices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Flexible Grid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built with CSS Grid and Flexbox for maximum flexibility and easy customization.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All layouts follow accessibility best practices with proper semantic HTML and ARIA labels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Common layout patterns for modern web applications
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/docs">View Documentation</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">← Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
