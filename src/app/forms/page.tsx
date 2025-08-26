"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { MainNavigation } from "@/components/main-navigation"
import { AdvancedForm } from "@/components/examples/advanced-form"
import { toast } from "sonner"

export default function FormsPage() {
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
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Forms</h1>
          <p className="text-muted-foreground mt-2">
            Comprehensive form examples using shadcn/ui components with validation
          </p>
        </div>

        <div className="space-y-8">
          {/* Simple Form */}
          <Card>
            <CardHeader>
              <CardTitle>Simple Form</CardTitle>
              <CardDescription>
                Basic form with common input types and validation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input 
                    id="name" 
                    name="name"
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email"
                    type="email" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Input 
                  id="message" 
                  name="message"
                  placeholder="Enter your message" 
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
              </div>
              <div className="flex items-center space-x-2">
                <Switch id="notifications" />
                <Label htmlFor="notifications">Receive notifications</Label>
              </div>
              <Button 
                className="w-full"
                onClick={handleSubmit}
              >
                Submit Form
              </Button>
            </CardContent>
          </Card>

          <Separator />

          {/* Advanced Form */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Advanced Form with Validation</h2>
            <p className="text-muted-foreground mb-6">
              This example demonstrates a complete form with validation, error handling, and toast notifications
            </p>
            <AdvancedForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-card mt-auto">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Form validation with react-hook-form and zod
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
