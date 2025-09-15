"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/#projects" },
  { name: "Clients", href: "/#clients" },
  { name: "Team", href: "/#team" },
  { name: "Careers", href: "/careers" },
  { name: "Affiliate", href: "/affiliate" },
  { name: "Contact", href: "/#contact" },
]

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const XIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const ArrowUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
)

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    setIsOpen(false)

    // If it's a hash link and we're on the home page, scroll to section
    if (href.startsWith("/#") && pathname === "/") {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    // If it's a hash link but we're not on home page, navigate to home first
    else if (href.startsWith("/#")) {
      window.location.href = href
    }
  }

  return (
    <>
      {/* Main Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center gap-8">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.href.startsWith("/#") ? (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex">
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`lg:hidden transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 space-y-2 border-t border-border/50">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-card/50 rounded-lg transition-all duration-200"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-card/50 rounded-lg transition-all duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-2">
                <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-primary/90 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ArrowUpIcon />
      </button>
    </>
  )
}
