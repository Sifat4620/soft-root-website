"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const MailIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const footerLinks = {
  company: [
    { name: "About Us", href: "/#team" },
    { name: "Our Team", href: "/#team" },
    { name: "Careers", href: "/careers" },
    { name: "Affiliate Program", href: "/affiliate" },
  ],
  services: [
    { name: "CRM Solutions", href: "/#services" },
    { name: "HRM Systems", href: "/#services" },
    { name: "Inventory Management", href: "/#services" },
    { name: "Digital Transformation", href: "/#services" },
    { name: "Cloud Infrastructure", href: "/#services" },
    { name: "AI & Automation", href: "/#services" },
  ],
  resources: [
    { name: "Case Studies", href: "/#projects" },
    { name: "Client Success Stories", href: "/#clients" },
    { name: "Documentation", href: "#" },
    { name: "Support Center", href: "#contact" },
    { name: "API Reference", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR Compliance", href: "#" },
  ],
}

const socialLinks = [
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: GithubIcon, href: "#", label: "GitHub" },
  { icon: MailIcon, href: "/#contact", label: "Email" },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer className="bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Company info */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/soft-root-logo.png"
                  alt="Soft Root Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-xl font-bold">Soft Root</span>
              </Link>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Comprehensive management solutions for modern businesses. From CRM and HRM to inventory management and
                digital transformation - we help you streamline operations and drive growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPinIcon className="w-4 h-4 text-primary" />
                  <span>123 Business District, Tech City</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <PhoneIcon className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MailIcon className="w-4 h-4 text-primary" />
                  <span>hello@softroot.com</span>
                </div>
              </div>
            </div>

            {/* Links sections */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.name}>
                        {link.href.startsWith("/#") ? (
                          <button
                            onClick={() => handleNavClick(link.href)}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Services</h3>
                  <ul className="space-y-3">
                    {footerLinks.services.map((link) => (
                      <li key={link.name}>
                        {link.href.startsWith("/#") ? (
                          <button
                            onClick={() => handleNavClick(link.href)}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Resources</h3>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.name}>
                        {link.href.startsWith("/#") ? (
                          <button
                            onClick={() => handleNavClick(link.href)}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="lg:col-span-1">
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Subscribe to our newsletter for the latest updates on management solutions, industry insights, and
                product announcements.
              </p>
              <div className="space-y-3">
                <Input placeholder="Enter your email" className="bg-background/50" />
                <Button size="sm" className="w-full">
                  Subscribe
                </Button>
              </div>
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-background/50 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="opacity-50" />

        {/* Bottom footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Soft Root. All rights reserved. Empowering businesses with comprehensive management solutions.
            </div>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
