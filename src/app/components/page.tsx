"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { MainNavigation } from "@/components/main-navigation"
import { 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  BarChart3 
} from "lucide-react"

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      
      {/* Page Header */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Components</h1>
          <p className="text-muted-foreground mt-2">
            Explore all available shadcn/ui components with interactive examples
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Basic Components */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Components</CardTitle>
              <CardDescription>Essential UI elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button size="sm">Button</Button>
                <Button variant="outline" size="sm">Outline</Button>
                <Button variant="secondary" size="sm">Secondary</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <Input placeholder="Input field" />
            </CardContent>
          </Card>

          {/* Feedback Components */}
          <Card>
            <CardHeader>
              <CardTitle>Feedback</CardTitle>
              <CardDescription>User feedback elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  This is a success alert
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  This is a destructive alert
                </AlertDescription>
              </Alert>
              <Progress value={65} className="w-full" />
            </CardContent>
          </Card>

          {/* Data Display */}
          <Card>
            <CardHeader>
              <CardTitle>Data Display</CardTitle>
              <CardDescription>Information presentation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">john@example.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Progress</p>
                <Progress value={33} className="w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Interactive Components */}
          <Card>
            <CardHeader>
              <CardTitle>Interactive</CardTitle>
              <CardDescription>User interaction elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="demo-switch" />
                <label htmlFor="demo-switch" className="text-sm">Toggle switch</label>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Slider: 50%</p>
                <Slider defaultValue={[50]} max={100} step={1} className="w-full" />
              </div>
            </CardContent>
          </Card>

          {/* Navigation Components */}
          <Card>
            <CardHeader>
              <CardTitle>Navigation</CardTitle>
              <CardDescription>Menu and navigation elements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col space-y-2">
                <Button variant="ghost" size="sm" className="justify-start">
                  Dashboard
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  Settings
                </Button>
                <Button variant="ghost" size="sm" className="justify-start">
                  Profile
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Chart Component */}
          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle>Chart Example</CardTitle>
              <CardDescription>Data visualization with Recharts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <BarChart3 className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">Chart Component</p>
                  <p className="text-xs text-muted-foreground mt-1">Interactive data visualization</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                All 56 shadcn/ui components available
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
