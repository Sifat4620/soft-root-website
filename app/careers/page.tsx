"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  MapPin,
  Clock,
  DollarSign,
  Users,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Zap,
  Shield,
  TrendingUp,
  Search,
  Filter,
} from "lucide-react"

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    salary: "$120k - $160k",
    experience: "5+ years",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    description: "Lead development of enterprise management systems and mentor junior developers.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$90k - $130k",
    experience: "3+ years",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    description: "Design intuitive interfaces for our CRM, HRM, and inventory management solutions.",
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote / Austin",
    type: "Full-time",
    salary: "$110k - $150k",
    experience: "4+ years",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    description: "Build and maintain scalable infrastructure for our management platforms.",
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Remote / Boston",
    type: "Full-time",
    salary: "$130k - $170k",
    experience: "6+ years",
    skills: ["Product Strategy", "Agile", "Analytics", "Stakeholder Management"],
    description: "Drive product vision and roadmap for our suite of business management tools.",
  },
  {
    id: 5,
    title: "Data Scientist",
    department: "Analytics",
    location: "Remote / Seattle",
    type: "Full-time",
    salary: "$125k - $165k",
    experience: "4+ years",
    skills: ["Python", "Machine Learning", "SQL", "Tableau"],
    description: "Develop AI-powered insights for our management and analytics platforms.",
  },
  {
    id: 6,
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote / Chicago",
    type: "Full-time",
    salary: "$80k - $110k",
    experience: "3+ years",
    skills: ["Customer Relations", "SaaS", "Project Management", "Communication"],
    description: "Ensure client success with our management solutions and drive retention.",
  },
]

const benefits = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and wellness programs",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Work-Life Balance",
    description: "Flexible hours, remote work options, and unlimited PTO policy",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Learning & Development",
    description: "Annual learning budget, conference attendance, and skill development programs",
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Competitive Compensation",
    description: "Market-leading salaries, equity options, and performance bonuses",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Innovation Time",
    description: "20% time for personal projects and innovation initiatives",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Job Security",
    description: "Stable company with consistent growth and long-term career paths",
  },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  const filteredJobs = jobOpenings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter
    const matchesLocation = locationFilter === "all" || job.location.includes(locationFilter)

    return matchesSearch && matchesDepartment && matchesLocation
  })

  const departments = [...new Set(jobOpenings.map((job) => job.department))]
  const locations = [...new Set(jobOpenings.flatMap((job) => job.location.split(" / ")))]

  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary/20">
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Build the Future of <span className="text-primary">Management Systems</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 text-balance">
              Join a team of passionate innovators creating next-generation CRM, HRM, and inventory management solutions
              that transform how businesses operate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Briefcase className="mr-2 h-4 w-4" />
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="px-8 bg-transparent">
                <Users className="mr-2 h-4 w-4" />
                Learn About Culture
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work at Soft Root?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We believe in creating an environment where innovation thrives and careers flourish.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto p-3 rounded-full bg-primary/10 text-primary w-fit mb-4">{benefit.icon}</div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find your next career opportunity and help us build the future of business management.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-4xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search jobs or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <MapPin className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Job Listings */}
            <div className="space-y-6 max-w-4xl mx-auto">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.department}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary}
                          </div>
                        </div>
                      </div>
                      <Button>Apply Now</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base">{job.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No positions match your search criteria.</p>
                <Button
                  variant="outline"
                  className="mt-4 bg-transparent"
                  onClick={() => {
                    setSearchTerm("")
                    setDepartmentFilter("all")
                    setLocationFilter("all")
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="bg-card border rounded-2xl p-12 max-w-3xl mx-auto">
              <h3 className="text-3xl font-bold mb-6">Don't See the Right Role?</h3>
              <p className="text-xl text-muted-foreground mb-8">
                We're always looking for talented individuals to join our team. Send us your resume and let's talk about
                future opportunities.
              </p>
              <div className="space-y-4 max-w-md mx-auto">
                <Input placeholder="Your Email" type="email" />
                <Textarea placeholder="Tell us about yourself and your interests..." rows={4} />
                <Button size="lg" className="w-full">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Submit Application
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
