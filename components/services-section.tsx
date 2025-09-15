"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Cloud,
  Shield,
  Smartphone,
  Database,
  Bot,
  Headphones,
  Users,
  TrendingUp,
  Zap,
  Globe,
  Cpu,
  Eye,
  Gamepad2,
  Palette,
  Settings,
  BarChart3,
  Lock,
  TestTube,
  Phone,
  Mail,
  ShoppingCart,
  Wrench,
  UserCheck,
  MessageSquare,
  Building,
} from "lucide-react"

const serviceCategories = [
  {
    title: "Design & Digital Transformation",
    icon: <Palette className="h-6 w-6" />,
    services: [
      {
        name: "Digital Transformation",
        icon: <Zap className="h-5 w-5" />,
        description: "Complete business digitalization strategy",
      },
      {
        name: "Digital Process Automation",
        icon: <Settings className="h-5 w-5" />,
        description: "Streamline workflows with automation",
      },
      {
        name: "IT Strategy & Infrastructure",
        icon: <Database className="h-5 w-5" />,
        description: "Strategic IT planning and implementation",
      },
      {
        name: "Application Modernization",
        icon: <Code className="h-5 w-5" />,
        description: "Legacy system transformation",
      },
      {
        name: "Customer Experience Transformation",
        icon: <Users className="h-5 w-5" />,
        description: "Enhanced customer journey design",
      },
      {
        name: "User Experience & Interface Design",
        icon: <Eye className="h-5 w-5" />,
        description: "Intuitive UI/UX design solutions",
      },
      { name: "Game Design", icon: <Gamepad2 className="h-5 w-5" />, description: "Interactive gaming experiences" },
      {
        name: "Application Design",
        icon: <Smartphone className="h-5 w-5" />,
        description: "Mobile and web app design",
      },
    ],
  },
  {
    title: "Engineering & Development",
    icon: <Code className="h-6 w-6" />,
    services: [
      {
        name: "Application Services",
        icon: <Globe className="h-5 w-5" />,
        description: "Full-stack application development",
      },
      {
        name: "Gaming Services",
        icon: <Gamepad2 className="h-5 w-5" />,
        description: "Game development and publishing",
      },
      { name: "AR, VR, MR & Metaverse", icon: <Eye className="h-5 w-5" />, description: "Immersive reality solutions" },
      {
        name: "Blockchain",
        icon: <Shield className="h-5 w-5" />,
        description: "Decentralized application development",
      },
      {
        name: "Internet of Things (IoT)",
        icon: <Cpu className="h-5 w-5" />,
        description: "Connected device solutions",
      },
      { name: "Automation, AI & ML", icon: <Bot className="h-5 w-5" />, description: "Intelligent automation systems" },
      { name: "RPA", icon: <Settings className="h-5 w-5" />, description: "Robotic process automation" },
      {
        name: "Data & Analytics",
        icon: <BarChart3 className="h-5 w-5" />,
        description: "Business intelligence solutions",
      },
      { name: "Cloud Infrastructure", icon: <Cloud className="h-5 w-5" />, description: "Scalable cloud solutions" },
      { name: "Cybersecurity", icon: <Lock className="h-5 w-5" />, description: "Comprehensive security solutions" },
    ],
  },
  {
    title: "Quality & Managed Services",
    icon: <TestTube className="h-6 w-6" />,
    services: [
      {
        name: "Quality Engineering & Testing",
        icon: <TestTube className="h-5 w-5" />,
        description: "Comprehensive QA solutions",
      },
      {
        name: "Application Management",
        icon: <Settings className="h-5 w-5" />,
        description: "End-to-end app lifecycle management",
      },
      { name: "QA Management", icon: <UserCheck className="h-5 w-5" />, description: "Quality assurance oversight" },
      {
        name: "IT Infrastructure Management",
        icon: <Database className="h-5 w-5" />,
        description: "Infrastructure monitoring and maintenance",
      },
      { name: "Security Management", icon: <Shield className="h-5 w-5" />, description: "24/7 security monitoring" },
      { name: "End-user Management", icon: <Users className="h-5 w-5" />, description: "User support and management" },
    ],
  },
  {
    title: "BPO & Support Services",
    icon: <Headphones className="h-6 w-6" />,
    services: [
      {
        name: "Customer Support",
        icon: <Headphones className="h-5 w-5" />,
        description: "24/7 customer service solutions",
      },
      { name: "Lead Generation", icon: <TrendingUp className="h-5 w-5" />, description: "Sales pipeline development" },
      { name: "Contact Center", icon: <Phone className="h-5 w-5" />, description: "Multi-channel contact solutions" },
      { name: "eCommerce Support", icon: <ShoppingCart className="h-5 w-5" />, description: "Online store management" },
      { name: "Technical Support", icon: <Wrench className="h-5 w-5" />, description: "Expert technical assistance" },
      {
        name: "Virtual Assistant",
        icon: <UserCheck className="h-5 w-5" />,
        description: "Remote administrative support",
      },
      {
        name: "Content Moderation",
        icon: <MessageSquare className="h-5 w-5" />,
        description: "Content quality management",
      },
    ],
  },
  {
    title: "Staffing & KPO",
    icon: <Building className="h-6 w-6" />,
    services: [
      {
        name: "IT Staff Augmentation",
        icon: <Users className="h-5 w-5" />,
        description: "Skilled IT professionals on-demand",
      },
      { name: "KPO Services", icon: <BarChart3 className="h-5 w-5" />, description: "Knowledge process outsourcing" },
    ],
  },
]

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Comprehensive <span className="text-primary">Management Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            From CRM and HRM to inventory management and digital transformation, we provide end-to-end solutions for
            modern businesses.
          </p>
        </div>

        {/* Service Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {serviceCategories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === index ? "default" : "outline"}
              onClick={() => setActiveCategory(index)}
              className="flex items-center gap-2 h-12 px-6"
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
            </Button>
          ))}
        </div>

        {/* Active Category Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceCategories[activeCategory].services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {service.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card border rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how our comprehensive management solutions can streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Mail className="mr-2 h-4 w-4" />
                Get Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
