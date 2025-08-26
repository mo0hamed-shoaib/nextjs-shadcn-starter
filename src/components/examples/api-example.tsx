"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { toast } from "sonner"
import { Code, Send, Database } from "lucide-react"

export function ApiExample() {
  const [name, setName] = useState("")
  const [response, setResponse] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleGetRequest = async () => {
    setLoading(true)
    try {
      const url = name ? `/api/hello?name=${encodeURIComponent(name)}` : '/api/hello'
      const res = await fetch(url)
      const data = await res.json()
      setResponse(data)
      toast.success("GET request successful!")
    } catch (error) {
      toast.error("GET request failed!")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handlePostRequest = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name || 'Anonymous',
          message: 'Hello from the frontend!',
          timestamp: new Date().toISOString()
        })
      })
      const data = await res.json()
      setResponse(data)
      toast.success("POST request successful!")
    } catch (error) {
      toast.error("POST request failed!")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-blue-500" />
            API Route Example
          </CardTitle>
          <CardDescription>
            Demonstrates Next.js 15 API routes with GET and POST methods
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Input Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name (optional)</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button 
                onClick={handleGetRequest} 
                disabled={loading}
                className="flex-1"
              >
                <Send className="h-4 w-4 mr-2" />
                GET Request
              </Button>
              <Button 
                onClick={handlePostRequest} 
                disabled={loading}
                variant="outline"
                className="flex-1"
              >
                <Code className="h-4 w-4 mr-2" />
                POST Request
              </Button>
            </div>
          </div>

          <Separator />

          {/* Response Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">API Response</h3>
            
            {loading && (
              <Alert>
                <AlertDescription>
                  Loading...
                </AlertDescription>
              </Alert>
            )}

            {response && !loading && (
              <div className="space-y-4">
                <Alert>
                  <AlertDescription>
                    Request completed successfully!
                  </AlertDescription>
                </Alert>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Response Data</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                      {JSON.stringify(response, null, 2)}
                    </pre>
                  </CardContent>
                </Card>
              </div>
            )}

            {!response && !loading && (
              <Alert>
                <AlertDescription>
                  Click GET or POST to test the API route
                </AlertDescription>
              </Alert>
            )}
          </div>

          <Separator />

          {/* API Documentation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">API Endpoints</h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">GET /api/hello</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Returns a greeting message. Optional query parameter: <code>name</code>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">POST /api/hello</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Accepts JSON data and returns the received data with timestamp
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
