"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const ArrowRightIcon = () => (
  <svg
    className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const DatabaseIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
  </svg>
)

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const PackageIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
)

const BarChart3Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const SettingsIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31 2.37 2.37a1.724 1.724 0 002.572 1.065c.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const managementSystems = [
    "Enterprise CRM Solutions",
    "Global HRM Systems",
    "Inventory Management Software",
    "Custom Software Development",
    "Business Process Automation",
    "AI-Powered Analytics Dashboard",
    "Cloud Infrastructure Services",
    "Mobile App Development",
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const text = managementSystems[currentIndex]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex < text.length) {
        setCurrentText(text.slice(0, charIndex + 1))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % managementSystems.length)
          setCurrentText("")
        }, 2000)
      }
    }, 100)

    return () => clearInterval(typeInterval)
  }, [currentIndex])

  const scrollToProjects = () => {
    const element = document.querySelector("#projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTeam = () => {
    const element = document.querySelector("#team")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float flex items-center justify-center">
          <DatabaseIcon className="w-8 h-8 text-primary/60" />
        </div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-full animate-float flex items-center justify-center"
          style={{ animationDelay: "1s" }}
        >
          <UsersIcon className="w-6 h-6 text-secondary/60" />
        </div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-primary/20 rounded-full animate-float flex items-center justify-center"
          style={{ animationDelay: "2s" }}
        >
          <PackageIcon className="w-5 h-5 text-primary/60" />
        </div>
        <div
          className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-full animate-float flex items-center justify-center"
          style={{ animationDelay: "0.5s" }}
        >
          <BarChart3Icon className="w-10 h-10 text-secondary/60" />
        </div>
        <div
          className="absolute top-1/2 left-1/4 w-14 h-14 bg-primary/15 rounded-full animate-float flex items-center justify-center"
          style={{ animationDelay: "1.5s" }}
        >
          <SettingsIcon className="w-6 h-6 text-primary/60" />
        </div>
        <div
          className="absolute top-1/3 right-1/3 w-18 h-18 bg-secondary/15 rounded-full animate-float flex items-center justify-center"
          style={{ animationDelay: "2.5s" }}
        >
          <ShieldIcon className="w-7 h-7 text-secondary/60" />
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div
            className={`mb-8 transition-all duration-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Image
                  src="/images/soft-root-logo.png"
                  alt="Soft Root Logo"
                  width={200}
                  height={200}
                  className="animate-pulse-green"
                  priority
                />
              </div>
            </div>
          </div>

          <div
            className={`mb-8 transition-all duration-1000 delay-300 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 leading-tight">
              <span className="text-foreground font-semibold">Global Software Development</span>
              <br />
              <span className="text-primary font-bold">Company & Enterprise Solutions</span>
            </h1>

            <div className="mb-6 h-16 flex items-center justify-center">
              <div className="text-2xl md:text-3xl font-mono font-medium text-secondary">
                <span className="text-muted-foreground">Specializing in: </span>
                <span className="text-primary font-bold">
                  {currentText}
                  <span className="animate-pulse text-primary">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed font-medium">
              Leading software development company serving businesses worldwide with custom enterprise solutions, CRM
              systems, HRM software, mobile applications, and digital transformation services. Trusted by companies
              across USA, UK, Canada, Australia, Europe, and Asia.
            </p>
          </div>

          <div
            className={`mb-8 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
                  <p className="text-sm text-muted-foreground">Global Clients Served</p>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
                  <p className="text-sm text-muted-foreground">Countries Worldwide</p>
                </div>
                <div className="p-4">
                  <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
                  <p className="text-sm text-muted-foreground">Global Support</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mb-10 transition-all duration-1000 delay-500 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
                  <DatabaseIcon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Enterprise CRM</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                <div
                  className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center animate-scale-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  <UsersIcon className="w-8 h-8 text-secondary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Global HRM</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                <div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in"
                  style={{ animationDelay: "0.4s" }}
                >
                  <PackageIcon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Inventory Systems</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                <div
                  className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center animate-scale-in"
                  style={{ animationDelay: "0.6s" }}
                >
                  <BarChart3Icon className="w-8 h-8 text-secondary" />
                </div>
                <span className="text-sm font-semibold text-foreground">AI Analytics</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                <div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center animate-scale-in"
                  style={{ animationDelay: "0.8s" }}
                >
                  <SettingsIcon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Process Automation</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card/50 hover:bg-card transition-colors">
                <div
                  className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center animate-scale-in"
                  style={{ animationDelay: "1s" }}
                >
                  <ShieldIcon className="w-8 h-8 text-secondary" />
                </div>
                <span className="text-sm font-semibold text-foreground">Enterprise Security</span>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <Button size="lg" className="text-lg px-8 py-6 group font-semibold" onClick={scrollToProjects}>
              View Our Solutions
              <ArrowRightIcon />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 bg-transparent font-semibold"
              onClick={scrollToTeam}
            >
              Meet Our Experts
            </Button>
          </div>

          {/* Scroll indicator */}
          <div
            className={`mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "animate-fade-in-up opacity-100" : "opacity-0"}`}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground font-medium">Explore Our Global Software Solutions</span>
              <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
