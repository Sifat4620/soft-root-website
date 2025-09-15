"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  DollarSign,
  Users,
  TrendingUp,
  Award,
  Handshake,
  Target,
  BarChart3,
  Gift,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react"

const affiliatePrograms = [
  {
    title: "Software Referral Program",
    commission: "15-25%",
    icon: <Target className="h-6 w-6" />,
    description: "Earn commissions by referring clients to our CRM, HRM, and inventory management solutions",
    benefits: ["Recurring monthly commissions", "Dedicated account manager", "Marketing materials provided"],
    minPayout: "$100",
  },
  {
    title: "Partner Reseller Program",
    commission: "30-40%",
    icon: <Handshake className="h-6 w-6" />,
    description: "Become an authorized reseller and offer our complete suite of management systems",
    benefits: ["Higher commission rates", "White-label options", "Technical support included"],
    minPayout: "$500",
  },
  {
    title: "Development Partner Program",
    commission: "20-35%",
    icon: <Award className="h-6 w-6" />,
    description: "Partner with us to develop custom solutions and integrations for enterprise clients",
    benefits: ["Revenue sharing model", "Co-marketing opportunities", "Priority technical support"],
    minPayout: "$1,000",
  },
]

const affiliateStats = [
  { label: "Active Partners", value: "500+", icon: <Users className="h-5 w-5" /> },
  { label: "Average Commission", value: "$2,500", icon: <DollarSign className="h-5 w-5" /> },
  { label: "Success Rate", value: "85%", icon: <TrendingUp className="h-5 w-5" /> },
  { label: "Partner Satisfaction", value: "4.9/5", icon: <Star className="h-5 w-5" /> },
]

const howItWorks = [
  {
    step: "1",
    title: "Apply & Get Approved",
    description: "Submit your application and get approved within 24-48 hours",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    step: "2",
    title: "Promote Our Solutions",
    description: "Use our marketing materials and your unique referral links",
    icon: <Target className="h-6 w-6" />,
  },
  {
    step: "3",
    title: "Track & Earn",
    description: "Monitor your referrals and earn commissions on successful conversions",
    icon: <BarChart3 className="h-6 w-6" />,
  },
  {
    step: "4",
    title: "Get Paid",
    description: "Receive monthly payouts via your preferred payment method",
    icon: <Gift className="h-6 w-6" />,
  },
]

export function AffiliateSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    experience: "",
    program: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Affiliate Program
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Partner with <span className="text-primary">Soft Root</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Join our affiliate program and earn substantial commissions by promoting our industry-leading management
            systems to your network.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {affiliateStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">{stat.icon}</div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Affiliate Programs */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Choose Your Program</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {affiliatePrograms.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">{program.icon}</div>
                    <div>
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {program.commission} Commission
                      </Badge>
                    </div>
                  </div>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {program.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>Min. Payout:</span>
                    <span className="font-semibold">{program.minPayout}</span>
                  </div>
                  <Button className="w-full">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Apply to Become an Affiliate</CardTitle>
              <CardDescription>
                Fill out the form below and we'll review your application within 24-48 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name *</label>
                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email Address *</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Company Name</label>
                  <Input
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Website URL</label>
                  <Input
                    placeholder="https://yourwebsite.com"
                    value={formData.website}
                    onChange={(e) => handleInputChange("website", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Preferred Program *</label>
                <select
                  className="w-full p-3 border border-input rounded-md bg-background"
                  value={formData.program}
                  onChange={(e) => handleInputChange("program", e.target.value)}
                >
                  <option value="">Select a program</option>
                  <option value="referral">Software Referral Program</option>
                  <option value="reseller">Partner Reseller Program</option>
                  <option value="development">Development Partner Program</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Experience & Audience</label>
                <Textarea
                  placeholder="Tell us about your experience in software sales/marketing and your target audience..."
                  rows={4}
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Additional Message</label>
                <Textarea
                  placeholder="Any additional information you'd like to share..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                />
              </div>
              <Button size="lg" className="w-full">
                <Handshake className="mr-2 h-4 w-4" />
                Submit Application
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our affiliate terms and conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
