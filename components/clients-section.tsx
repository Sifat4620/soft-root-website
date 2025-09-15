"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const clients = [
  {
    id: 1,
    name: "EcoTech Solutions",
    logo: "/eco-tech-logo-green-leaf-with-circuit-pattern.jpg",
    industry: "Clean Technology",
    testimonial:
      "Soft Root transformed our vision into a powerful platform that's helping thousands of businesses reduce their carbon footprint. Their expertise in sustainable tech is unmatched.",
    rating: 5,
    clientName: "Sarah Chen",
    clientRole: "CTO",
  },
  {
    id: 2,
    name: "GreenHarvest Co",
    logo: "/green-harvest-logo-with-wheat-and-technology-eleme.jpg",
    industry: "Agriculture",
    testimonial:
      "The IoT dashboard they built revolutionized how we monitor our crops. Real-time insights have increased our yield by 30% while reducing water usage.",
    rating: 5,
    clientName: "Marcus Rodriguez",
    clientRole: "Farm Operations Director",
  },
  {
    id: 3,
    name: "Renewable Energy Corp",
    logo: "/renewable-energy-logo-with-solar-panel-and-wind-t.jpg",
    industry: "Energy",
    testimonial:
      "Their renewable energy portal streamlined our entire customer management process. The team's attention to detail and technical expertise exceeded our expectations.",
    rating: 5,
    clientName: "Dr. Emily Watson",
    clientRole: "VP of Technology",
  },
  {
    id: 4,
    name: "Sustainable Finance",
    logo: "/sustainable-finance-logo-with-green-dollar-sign-a.jpg",
    industry: "FinTech",
    testimonial:
      "Soft Root delivered a mobile app that perfectly balances financial functionality with environmental consciousness. Our users love the impact tracking features.",
    rating: 5,
    clientName: "James Park",
    clientRole: "Product Manager",
  },
  {
    id: 5,
    name: "CleanSupply Chain",
    logo: "/clean-supply-chain-logo-with-interconnected-green.jpg",
    industry: "Logistics",
    testimonial:
      "The blockchain solution they developed brought unprecedented transparency to our supply chain. It's exactly what the industry needed for sustainable practices.",
    rating: 5,
    clientName: "Lisa Thompson",
    clientRole: "Chief Innovation Officer",
  },
  {
    id: 6,
    name: "Urban Gardens Inc",
    logo: "/urban-gardens-logo-with-city-skyline-and-green-pl.jpg",
    industry: "Urban Agriculture",
    testimonial:
      "Their smart agriculture platform helped us optimize our urban farming operations. The predictive analytics have been a game-changer for our business.",
    rating: 5,
    clientName: "David Kim",
    clientRole: "Founder & CEO",
  },
]

const stats = [
  { number: "50+", label: "Happy Clients" },
  { number: "100+", label: "Projects Delivered" },
  { number: "99%", label: "Client Satisfaction" },
  { number: "24/7", label: "Support Available" },
]

export function ClientsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % clients.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            We partner with forward-thinking companies to create sustainable digital solutions that drive real impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Our Valued Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <div
                key={client.id}
                className={`flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={client.logo || "/placeholder.svg?height=60&width=120"}
                  alt={`${client.name} logo`}
                  className="h-12 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />

                <blockquote className="text-xl md:text-2xl text-balance leading-relaxed mb-8">
                  "{clients[currentTestimonial].testimonial}"
                </blockquote>

                <div className="flex justify-center mb-4">
                  {[...Array(clients[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <div>
                    <div className="font-semibold">{clients[currentTestimonial].clientName}</div>
                    <div className="text-sm text-muted-foreground">
                      {clients[currentTestimonial].clientRole} at {clients[currentTestimonial].name}
                    </div>
                  </div>
                </div>

                {/* Testimonial indicators */}
                <div className="flex justify-center gap-2 mt-8">
                  {clients.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? "bg-primary w-8" : "bg-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
