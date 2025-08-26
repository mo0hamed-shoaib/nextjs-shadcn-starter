"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"
import { MainNavigation } from "@/components/main-navigation"
import { AdvancedForm } from "@/components/examples/advanced-form"
import { toast } from "sonner"
import { 
  BookOpen, 
  Code, 
  Settings, 
  Palette, 
  Moon, 
  FileText, 
  ExternalLink,
  Download,
  Github,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Info,
  Search
} from "lucide-react"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  const handleSubmit = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      toast.error("Please fill in all required fields")
      return
    }
    
    toast.success("Form submitted successfully!")
    setFormData({ name: "", email: "", message: "" })
    setErrors({})
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      
      {/* Page Header */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Next.js 15 + shadcn/ui Starter
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A modern, production-ready starter template featuring Next.js 15, shadcn/ui components, 
            and all the tools you need to build beautiful applications.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-blue-500" />
                All Components
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Complete set of 56 shadcn/ui components ready to use
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">56 Components</Badge>
                <Badge variant="outline">Ready to Use</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-purple-500" />
                Dark Mode
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Built-in dark mode support with system preference detection
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Auto Detection</Badge>
                <Badge variant="outline">Manual Toggle</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-green-500" />
                Next.js 15
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Latest Next.js with App Router, Turbopack, and React 19
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">App Router</Badge>
                <Badge variant="outline">Turbopack</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-orange-500" />
                Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Complete documentation for all components and setup guides
              </p>
                             <Button variant="outline" size="sm" asChild>
                 <Link href="/docs">View Documentation</Link>
               </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-red-500" />
                API Routes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Example API routes with GET and POST endpoints
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href="/docs">View API Example</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5 text-indigo-500" />
                Search Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Global search functionality with Command component
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">⌘K</Badge>
                <Badge variant="outline">Global Search</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-8" />

        {/* Quick Start Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Get Started</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            This template includes everything you need to start building modern web applications. 
            Explore the components, check out the documentation, and start building!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                         <Button size="lg" asChild>
               <Link href="/docs">View Documentation</Link>
             </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                shadcn/ui
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Built with Next.js 15 and shadcn/ui
              </span>
            </div>
            <div className="flex items-center gap-4">
                             <Button variant="ghost" size="sm" asChild>
                 <Link href="/docs">Documentation</Link>
               </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/shadcn-ui/ui" target="_blank" rel="noopener noreferrer">GitHub</a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
