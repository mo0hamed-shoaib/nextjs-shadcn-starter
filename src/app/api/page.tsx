"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { MainNavigation } from "@/components/main-navigation"
import { SimpleApiExample } from "@/components/examples/simple-api"

export default function ApiPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <MainNavigation />
      
      {/* Page Header */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">API Examples</h1>
          <p className="text-muted-foreground mt-2">
            Next.js 15 API routes with GET and POST methods
          </p>
        </div>

        <div className="space-y-8">
          {/* API Overview */}
          <Card>
            <CardHeader>
              <CardTitle>API Routes Overview</CardTitle>
              <CardDescription>
                Next.js 15 App Router API routes with TypeScript
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">GET</Badge>
                    <code className="text-sm bg-muted px-2 py-1 rounded">/api/hello</code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Simple GET endpoint that returns a greeting message
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">POST</Badge>
                    <code className="text-sm bg-muted px-2 py-1 rounded">/api/hello</code>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    POST endpoint that accepts JSON data and returns a response
                  </p>
                </div>
              </div>
              <Separator />
              <div className="space-y-2">
                <p className="text-sm font-medium">Features:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• TypeScript support with proper typing</li>
                  <li>• Request validation and error handling</li>
                  <li>• JSON response formatting</li>
                  <li>• Query parameter support</li>
                  <li>• Request body parsing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Interactive API Example */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Interactive API Example</h2>
            <p className="text-muted-foreground mb-6">
              Test the API endpoints with this interactive example
            </p>
            <SimpleApiExample />
          </div>

          {/* API Documentation */}
          <Card>
            <CardHeader>
              <CardTitle>API Documentation</CardTitle>
              <CardDescription>
                Detailed documentation for the available endpoints
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">GET /api/hello</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Returns a greeting message with optional name parameter
                  </p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium">Query Parameters:</p>
                      <code className="text-sm bg-muted px-2 py-1 rounded">name (optional)</code>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Response:</p>
                      <pre className="text-sm bg-muted p-2 rounded overflow-x-auto">
{`{
  "message": "Hello, [name]!",
  "timestamp": "2024-01-01T00:00:00.000Z"
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="font-semibold mb-2">POST /api/hello</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Accepts JSON data and returns a personalized response
                  </p>
                  <div className="space-y-2">
                    <div>
                      <p className="text-sm font-medium">Request Body:</p>
                      <pre className="text-sm bg-muted p-2 rounded overflow-x-auto">
{`{
  "name": "string",
  "message": "string (optional)"
}`}
                      </pre>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Response:</p>
                      <pre className="text-sm bg-muted p-2 rounded overflow-x-auto">
{`{
  "message": "Hello, [name]!",
  "receivedMessage": "[message]",
  "timestamp": "2024-01-01T00:00:00.000Z"
}`}
                      </pre>
                    </div>
                  </div>
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
                Next.js 15 App Router API routes
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
