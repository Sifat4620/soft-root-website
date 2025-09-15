import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { JetBrains_Mono } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SoftRoot - Global Software Development Company | Enterprise Solutions Worldwide",
  description:
    "Leading software development company providing enterprise solutions globally. Custom software, web development, mobile apps, CRM, HRM, inventory management systems for businesses worldwide. Serving USA, UK, Canada, Australia, India, Europe.",
  keywords: [
    // Global software company keywords
    "software development company",
    "enterprise software solutions",
    "custom software development",
    "global software company",
    "international software services",

    // Service-specific keywords
    "CRM development",
    "HRM software solutions",
    "inventory management systems",
    "web application development",
    "mobile app development",
    "cloud infrastructure services",
    "AI ML development",
    "business automation software",

    // Location-based keywords
    "software company USA",
    "software development UK",
    "enterprise solutions Canada",
    "custom software Australia",
    "software services Europe",
    "IT company India",
    "software development worldwide",
    "global IT solutions",

    // Industry keywords
    "fintech software development",
    "healthcare software solutions",
    "e-commerce development",
    "enterprise resource planning",
    "business process automation",
    "digital transformation services",

    // Technology keywords
    "full stack development",
    "react development company",
    "node.js development",
    "python development services",
    "cloud migration services",
    "DevOps solutions",
    "quality assurance testing",
  ],
  authors: [{ name: "SoftRoot Development Team" }],
  creator: "SoftRoot",
  publisher: "SoftRoot",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://softroot.com",
    siteName: "SoftRoot - Global Software Development Company",
    title: "SoftRoot - Enterprise Software Solutions Worldwide",
    description:
      "Leading global software development company providing custom enterprise solutions, CRM, HRM, mobile apps, and web development services to businesses worldwide.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SoftRoot - Global Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftRoot - Global Software Development Company",
    description:
      "Enterprise software solutions, custom development, CRM, HRM, and mobile apps for businesses worldwide.",
    images: ["/twitter-image.jpg"],
    creator: "@softroot",
  },
  alternates: {
    canonical: "https://softroot.com",
  },
  category: "Software Development",
  classification: "Business Software Solutions",
  generator: "Next.js",
  applicationName: "SoftRoot",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://softroot.com"),
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SoftRoot",
              description: "Global software development company providing enterprise solutions worldwide",
              url: "https://softroot.com",
              logo: "https://softroot.com/logo.png",
              foundingDate: "2020",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-SOFTROOT",
                contactType: "Customer Service",
                availableLanguage: ["English", "Spanish", "French", "German", "Hindi"],
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "Global",
                addressRegion: "Worldwide",
              },
              sameAs: [
                "https://linkedin.com/company/softroot",
                "https://twitter.com/softroot",
                "https://facebook.com/softroot",
              ],
              serviceArea: {
                "@type": "Place",
                name: "Worldwide",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Software Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Software Development",
                      description: "Tailored software solutions for businesses worldwide",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Enterprise CRM Solutions",
                      description: "Customer relationship management systems for global enterprises",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                      description: "iOS and Android mobile applications for international markets",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} antialiased cursor-none`}>
        <CustomCursor />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
