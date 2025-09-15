"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const projects = [
  {
    id: 1,
    title: "EcoCommerce Platform",
    description:
      "A sustainable e-commerce platform built with Next.js and Stripe, featuring carbon footprint tracking and eco-friendly product recommendations.",
    image: "/modern-ecommerce-website-with-green-theme.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    category: "E-commerce",
    status: "Live",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Smart Agriculture Dashboard",
    description:
      "IoT-powered dashboard for monitoring crop health, soil conditions, and weather patterns with real-time analytics and predictive insights.",
    image: "/agricultural-dashboard-with-charts-and-green-plant.jpg",
    tags: ["React", "Node.js", "IoT", "MongoDB"],
    category: "AgTech",
    status: "In Development",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Green Finance App",
    description:
      "Mobile-first financial application that helps users track their environmental impact through spending habits and investment choices.",
    image: "/mobile-finance-app-with-green-theme-and-charts.jpg",
    tags: ["React Native", "Firebase", "Plaid API", "Chart.js"],
    category: "FinTech",
    status: "Live",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Carbon Tracker SaaS",
    description:
      "Enterprise solution for companies to monitor, analyze, and reduce their carbon footprint with automated reporting and compliance features.",
    image: "/corporate-dashboard-with-carbon-footprint-analytic.jpg",
    tags: ["Vue.js", "Python", "PostgreSQL", "Docker"],
    category: "Enterprise",
    status: "Live",
    link: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Renewable Energy Portal",
    description:
      "Comprehensive platform for renewable energy providers to manage installations, monitor performance, and engage with customers.",
    image: "/renewable-energy-dashboard-with-solar-panels-and-w.jpg",
    tags: ["Angular", "Express.js", "MySQL", "AWS"],
    category: "Energy",
    status: "In Development",
    link: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Sustainable Supply Chain",
    description:
      "Blockchain-based supply chain management system ensuring transparency and sustainability in product sourcing and delivery.",
    image: "/supply-chain-management-interface-with-blockchain-.jpg",
    tags: ["Solidity", "Web3.js", "React", "Ethereum"],
    category: "Blockchain",
    status: "Prototype",
    link: "#",
    github: "#",
  },
]

const categories = ["All", "E-commerce", "AgTech", "FinTech", "Enterprise", "Energy", "Blockchain"]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Our <span className="text-primary">Growing</span> Portfolio
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            From sustainable e-commerce platforms to smart agriculture solutions, we cultivate digital experiences that
            make a positive impact on the world.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardContent className="p-0">
                {/* Project image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Status badge */}
                  <Badge
                    className={`absolute top-4 right-4 ${
                      project.status === "Live"
                        ? "bg-primary"
                        : project.status === "In Development"
                          ? "bg-secondary"
                          : "bg-muted"
                    }`}
                  >
                    {project.status}
                  </Badge>

                  {/* Hover actions */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
                      hoveredProject === project.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <ExternalLinkIcon className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full">
                      <GithubIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Project content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-balance">{project.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Learn more link */}
                  <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary/80 transition-colors">
                    Learn more
                    <ArrowRightIcon className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8 bg-transparent">
            View All Projects
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
