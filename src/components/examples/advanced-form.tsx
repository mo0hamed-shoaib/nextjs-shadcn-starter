"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { CheckCircle, AlertTriangle, Info } from "lucide-react"

export function AdvancedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    category: "",
    priority: "",
    notifications: true,
    marketing: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name) {
      newErrors.name = "Name is required"
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!formData.email.includes('@')) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message) {
      newErrors.message = "Message is required"
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    if (!formData.category) {
      newErrors.category = "Please select a category"
    }

    if (!formData.priority) {
      newErrors.priority = "Please select a priority"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form")
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Form data:", formData)
    
    toast.success("Form submitted successfully!", {
      description: "We'll get back to you soon.",
    })
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      category: "",
      priority: "",
      notifications: true,
      marketing: false,
    })
    setErrors({})
    setIsSubmitting(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Info className="h-5 w-5 text-blue-500" />
          Advanced Contact Form
        </CardTitle>
        <CardDescription>
          Complete form with validation, error handling, and multiple input types
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Personal Information</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && (
                  <Alert variant="destructive" className="py-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{errors.name}</AlertDescription>
                  </Alert>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && (
                  <Alert variant="destructive" className="py-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{errors.email}</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>

          <Separator />

          {/* Message */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Message</h3>
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your inquiry..."
                className="min-h-[100px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              {errors.message && (
                <Alert variant="destructive" className="py-2">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>{errors.message}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>

          <Separator />

          {/* Category and Priority */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Details</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="category">Category *</Label>
                <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="feedback">Feedback</SelectItem>
                    <SelectItem value="bug">Bug Report</SelectItem>
                  </SelectContent>
                </Select>
                {errors.category && (
                  <Alert variant="destructive" className="py-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{errors.category}</AlertDescription>
                  </Alert>
                )}
              </div>

              <div className="space-y-2">
                <Label>Priority *</Label>
                <RadioGroup value={formData.priority} onValueChange={(value) => setFormData({ ...formData, priority: value })}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low">Low</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high">High</Label>
                  </div>
                </RadioGroup>
                {errors.priority && (
                  <Alert variant="destructive" className="py-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>{errors.priority}</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Preferences</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="notifications"
                  checked={formData.notifications}
                  onCheckedChange={(checked) => setFormData({ ...formData, notifications: checked })}
                />
                <Label htmlFor="notifications">Receive email notifications</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="marketing"
                  checked={formData.marketing}
                  onCheckedChange={(checked) => setFormData({ ...formData, marketing: checked })}
                />
                <Label htmlFor="marketing">Subscribe to marketing emails</Label>
              </div>
            </div>
          </div>

          <Separator />

          {/* Submit Button */}
          <div className="flex items-center justify-between gap-4">
            <Alert className="flex-1 max-w-md">
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                All fields marked with * are required
              </AlertDescription>
            </Alert>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Form"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
