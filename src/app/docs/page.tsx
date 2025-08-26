"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNavigation } from "@/components/main-navigation"
import { 
  BookOpen, 
  Code, 
  Settings, 
  Palette, 
  Moon, 
  FileText, 
  Search,
  ExternalLink,
  Download,
  Github
} from "lucide-react"

const documentationSections = [
  {
    title: "Getting Started",
    description: "Setup and configuration guides",
    icon: BookOpen,
    color: "text-blue-500",
    items: [
      { title: "Installation & Configuration", file: "01_INSTALL_AND_CONFIGURE_SHADCN_NEXTJS.md", category: "setup" },
      { title: "Components Configuration", file: "02_COMPONENTS_JSON.md", category: "setup" },
      { title: "Monorepo Setup", file: "06_MONOREPO.md", category: "setup" },
      { title: "shadcn/ui CLI", file: "05_SHADCN_CLI.md", category: "setup" },
    ]
  },
  {
    title: "Customization",
    description: "Theming and styling guides",
    icon: Palette,
    color: "text-purple-500",
    items: [
      { title: "Theming", file: "03_THEMING.md", category: "customization" },
      { title: "Dark Mode with Next.js", file: "04_DARK_MODE_WITH_NEXTJS.md", category: "customization" },
    ]
  },
  {
    title: "Components",
    description: "All available UI components",
    icon: Code,
    color: "text-green-500",
    items: [
      { title: "Accordion", file: "07_ACCORDION.md", category: "components" },
      { title: "Alert", file: "08_ALERT.md", category: "components" },
      { title: "Alert Dialog", file: "09_ALERT_DIALOG.md", category: "components" },
      { title: "Aspect Ratio", file: "10_ASPECT_RATIO.md", category: "components" },
      { title: "Avatar", file: "11_AVATAR.md", category: "components" },
      { title: "Badge", file: "12_BADGE.md", category: "components" },
      { title: "Breadcrumb", file: "13_BREADCRUMB.md", category: "components" },
      { title: "Button", file: "14_BUTTON.md", category: "components" },
      { title: "Calendar", file: "15_CALENDAR.md", category: "components" },
      { title: "Card", file: "16_CARD.md", category: "components" },
      { title: "Carousel", file: "17_CAROUSEL.md", category: "components" },
      { title: "Chart", file: "18_CHART.md", category: "components" },
      { title: "Checkbox", file: "19_CHECKBOX.md", category: "components" },
      { title: "Collapsible", file: "20_COLLAPSIBLE.md", category: "components" },
      { title: "Command", file: "22_COMMAND.md", category: "components" },
      { title: "Context Menu", file: "23_CONTEXT_MENU.md", category: "components" },
      { title: "Data Table", file: "24_DATA_TABLE.md", category: "components" },
      { title: "Date Picker", file: "25_DATE_PICKER.md", category: "components" },
      { title: "Dialog", file: "26_DIALOG.md", category: "components" },
      { title: "Drawer", file: "27_DRAWER.md", category: "components" },
      { title: "Dropdown Menu", file: "28_DROPDOWN_MENU.md", category: "components" },
      { title: "Form (React Hook Form)", file: "29_REACT_HOOK_FORM.md", category: "components" },
      { title: "Hover Card", file: "30_HOVER_CARD.md", category: "components" },
      { title: "Input", file: "31_INPUT.md", category: "components" },
      { title: "Input OTP", file: "32_INPUT_OTP.md", category: "components" },
      { title: "Label", file: "33_LABEL.md", category: "components" },
      { title: "Menubar", file: "34_MENUBAR.md", category: "components" },
      { title: "Navigation Menu", file: "35_NAVIGATION_MENU.md", category: "components" },
      { title: "Pagination", file: "36_PAGINATION.md", category: "components" },
      { title: "Popover", file: "37_POPOVER.md", category: "components" },
      { title: "Progress", file: "38_PROGRESS.md", category: "components" },
      { title: "Radio Group", file: "39_RADIO_GROUP.md", category: "components" },
      { title: "Resizable", file: "40_RESIZABLE.md", category: "components" },
      { title: "Scroll Area", file: "41_SCROLL_AREA.md", category: "components" },
      { title: "Select", file: "42_SELECT.md", category: "components" },
      { title: "Separator", file: "43_SEPARATOR.md", category: "components" },
      { title: "Sheet", file: "44_SHEET.md", category: "components" },
      { title: "Sidebar", file: "45_SIDEBAR.md", category: "components" },
      { title: "Skeleton", file: "46_SKELETON.md", category: "components" },
      { title: "Slider", file: "47_SLIDER.md", category: "components" },
      { title: "Sonner (Toast)", file: "48_SONNER.md", category: "components" },
      { title: "Switch", file: "49_SWITCH.md", category: "components" },
      { title: "Table", file: "50_TABLE.md", category: "components" },
      { title: "Tabs", file: "51_TABS.md", category: "components" },
      { title: "Textarea", file: "52_TEXT_AREA.md", category: "components" },
      { title: "Toggle", file: "53_TOGGLE.md", category: "components" },
      { title: "Toggle Group", file: "54_TOGGLE_GROUP.md", category: "components" },
      { title: "Tooltip", file: "55_TOOLTIP.md", category: "components" },
      { title: "Typography", file: "56_TYPOGRAPHY.md", category: "components" },
    ]
  }
]

export default function DocumentationPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredSections = documentationSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "all" || item.category === selectedCategory)
    )
  })).filter(section => section.items.length > 0)

  const allItems = documentationSections.flatMap(section => section.items)
  const filteredItems = allItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedCategory === "all" || item.category === selectedCategory)
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <MainNavigation />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl flex-1">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Documentation</h1>
          <p className="text-muted-foreground mt-2">
            Complete guides for shadcn/ui components and configuration
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Badge variant="secondary">56 Components</Badge>
            <Badge variant="outline">Next.js 15</Badge>
          </div>
        </div>

        <div className="space-y-6">
          {/* Search and Filters */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="sm">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </Button>
            </div>

            <div className="flex gap-2">
              <Button
                variant={selectedCategory === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("all")}
              >
                All ({allItems.length})
              </Button>
              <Button
                variant={selectedCategory === "setup" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("setup")}
              >
                Setup
              </Button>
              <Button
                variant={selectedCategory === "customization" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("customization")}
              >
                Customization
              </Button>
              <Button
                variant={selectedCategory === "components" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory("components")}
              >
                Components
              </Button>
            </div>
          </div>

          <Separator />

          {/* Documentation Content */}
          <Tabs defaultValue="organized" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="organized">Organized View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>

            <TabsContent value="organized" className="space-y-8">
              {filteredSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <section.icon className={`h-6 w-6 ${section.color}`} />
                    <div>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                      <p className="text-muted-foreground">{section.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {section.items.map((item) => (
                      <Card key={item.file} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between">
                            <Badge variant="outline" className="text-xs">
                              {item.category}
                            </Badge>
                            <Button variant="ghost" size="sm">
                              <FileText className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="list" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                  <Card key={item.file} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">
                          {item.category}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Quick Actions */}
          <Separator />
          
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Quick Start
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get started with shadcn/ui in your Next.js project
                </p>
                <Button className="w-full">View Installation Guide</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  Configuration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to configure and customize your setup
                </p>
                <Button variant="outline" className="w-full">View Configuration</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Official Docs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Visit the official shadcn/ui documentation
                </p>
                <Button variant="outline" className="w-full">Visit shadcn/ui</Button>
              </CardContent>
            </Card>
                     </div>
         </div>
       </main>

       {/* Footer */}
       <footer className="border-t bg-card mt-auto">
         <div className="container mx-auto px-4 py-6">
           <div className="flex items-center justify-between">
             <div className="flex items-center gap-4">
               <Button variant="ghost" size="sm" asChild>
                 <a href="/">← Back to Home</a>
               </Button>
             </div>
             <div className="flex items-center gap-4">
               <Button variant="ghost" size="sm">Documentation</Button>
               <Button variant="ghost" size="sm">GitHub</Button>
             </div>
           </div>
         </div>
       </footer>
     </div>
   )
 }
