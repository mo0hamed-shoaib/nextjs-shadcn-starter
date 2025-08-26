"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { CheckCircle, AlertTriangle, Info } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  category: z.enum(["general", "support", "feedback", "bug"]),
  priority: z.enum(["low", "medium", "high"]),
  notifications: z.boolean(),
  marketing: z.boolean().optional(),
  rating: z.number().min(1).max(5),
  budget: z.number().min(0).max(10000),
})

type FormData = z.infer<typeof formSchema>

export function FormExample() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      category: "general",
      priority: "medium",
      notifications: true,
      marketing: false,
      rating: 3,
      budget: 1000,
    },
  })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log("Form data:", data)
    
    toast.success("Form submitted successfully!", {
      description: "We'll get back to you soon.",
    })
    
    form.reset()
    setIsSubmitting(false)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5 text-blue-500" />
            Contact Form Example
          </CardTitle>
          <CardDescription>
            This form demonstrates react-hook-form with zod validation using shadcn/ui components
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Personal Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <Alert variant="destructive" className="py-2">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        {form.formState.errors.name.message}
                      </AlertDescription>
                    </Alert>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <Alert variant="destructive" className="py-2">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        {form.formState.errors.email.message}
                      </AlertDescription>
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
                  {...form.register("phone")}
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
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <Alert variant="destructive" className="py-2">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      {form.formState.errors.message.message}
                    </AlertDescription>
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
                  <Select
                    value={form.watch("category")}
                    onValueChange={(value) => form.setValue("category", value as any)}
                  >
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
                </div>

                <div className="space-y-2">
                  <Label>Priority *</Label>
                  <RadioGroup
                    value={form.watch("priority")}
                    onValueChange={(value) => form.setValue("priority", value as any)}
                    className="flex flex-col space-y-1"
                  >
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
                    checked={form.watch("notifications")}
                    onCheckedChange={(checked) => form.setValue("notifications", checked)}
                  />
                  <Label htmlFor="notifications">Receive email notifications</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="marketing"
                    checked={form.watch("marketing")}
                    onCheckedChange={(checked) => form.setValue("marketing", checked)}
                  />
                  <Label htmlFor="marketing">Subscribe to marketing emails</Label>
                </div>
              </div>
            </div>

            <Separator />

            {/* Rating and Budget */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Additional Information</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Rating: {form.watch("rating")}/5</Label>
                  <Slider
                    value={[form.watch("rating")]}
                    onValueChange={([value]) => form.setValue("rating", value)}
                    max={5}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Budget: ${form.watch("budget")}</Label>
                  <Slider
                    value={[form.watch("budget")]}
                    onValueChange={([value]) => form.setValue("budget", value)}
                    max={10000}
                    min={0}
                    step={100}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <Alert className="flex-1">
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
    </div>
  )
}
