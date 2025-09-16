"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"

const teamMembers = [
 {
  id: 1,
  name: "Fahim Faisal Sifat",
  role: " Chief Technology Officer ",
  bio: "Assistant Deputy Team Leader at SQUARE Cloud with strong expertise in DevOps. Former Software Engineer at SQUARE InformatiX Ltd. Experienced in building scalable, cloud-native infrastructures and fostering engineering collaboration.",
  image: "/images/sifat.png", 
  skills: ["DevOps", "Cloud Infrastructure", "Automation", "Team Leadership"],
  social: {
    linkedin: "#",    
    twitter: "#",     
    email: "fahim.sil@squaregroup.com",
    phone: "01886282789",
    address: "SQUARE Center, 48 Mohakhali, Dhaka"
  },
  achievements: [
    "Assistant Deputy Team Leader at SQUARE Cloud",
    "Ex Software Engineer at SQUARE InformatiX Ltd"
  ],
},

  {
    id: 2,
    name: "Sarah Rodriguez",
    role: "CTO",
    bio: "Full-stack architect specializing in scalable, eco-friendly solutions. Expert in cloud infrastructure and green computing practices. Leads our technical innovation initiatives.",
    image: "/professional-headshot-of-hispanic-female-cto-in-t.jpg",
    skills: ["Cloud Architecture", "DevOps", "Green Computing"],
    social: {
      linkedin: "#",
      github: "#",
      email: "sarah@softroot.com",
    },
    achievements: ["AWS Solutions Architect", "Google Cloud Expert", "Open Source Contributor"],
  },
  {
    id: 3,
    name: "Marcus Johnson",
    role: "Head of Design",
    bio: "Creative director with a passion for user-centered design and environmental consciousness. Specializes in creating intuitive interfaces that promote sustainable behaviors.",
    image: "/professional-headshot-of-african-american-design-.jpg",
    skills: ["UX/UI Design", "Design Systems", "User Research"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "marcus@softroot.com",
    },
    achievements: ["Design Excellence Award", "UX Conference Speaker", "Dribbble Top Designer"],
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "VP of Engineering",
    bio: "Engineering leader focused on building robust, sustainable software solutions. Expert in agile methodologies and team development. Champions clean code and green practices.",
    image: "/professional-headshot-of-caucasian-female-enginee.jpg",
    skills: ["Team Leadership", "Agile Development", "Code Quality"],
    social: {
      linkedin: "#",
      github: "#",
      email: "emily@softroot.com",
    },
    achievements: ["Certified Scrum Master", "Tech Leadership Award", "Mentorship Excellence"],
  },
  {
    id: 5,
    name: "David Park",
    role: "Head of Product",
    bio: "Product strategist with deep expertise in sustainable technology markets. Drives product roadmap and ensures our solutions meet real-world environmental challenges.",
    image: "/professional-headshot-of-korean-product-manager-i.jpg",
    skills: ["Product Strategy", "Market Analysis", "Sustainability"],
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@softroot.com",
    },
    achievements: ["Product Innovation Award", "Sustainability Champion", "Industry Thought Leader"],
  },
  {
    id: 6,
    name: "Lisa Thompson",
    role: "Head of Operations",
    bio: "Operations expert ensuring smooth project delivery and sustainable business practices. Focuses on process optimization and team efficiency while maintaining our green values.",
    image: "/professional-headshot-of-caucasian-operations-man.jpg",
    skills: ["Operations Management", "Process Optimization", "Team Coordination"],
    social: {
      linkedin: "#",
      email: "lisa@softroot.com",
    },
    achievements: ["Operations Excellence Award", "Lean Six Sigma Black Belt", "Team Leadership Recognition"],
  },
]

export function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            Meet Our <span className="text-primary">Growing</span> Team
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Our diverse team of experts combines technical excellence with environmental passion to create software
            solutions that make a difference.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-background/80 backdrop-blur-sm animate-fade-in-up overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
            >
              <CardContent className="p-0">
                {/* Member image */}
                <div className="relative overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg?height=300&width=300"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Social links overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.social.linkedin && (
                      <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.twitter && (
                      <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0">
                        <Twitter className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.github && (
                      <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0">
                        <Github className="w-4 h-4" />
                      </Button>
                    )}
                    {member.social.email && (
                      <Button size="sm" variant="secondary" className="rounded-full w-10 h-10 p-0">
                        <Mail className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Member info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>

                  {/* Expandable bio */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      selectedMember === member.id ? "max-h-96 opacity-100" : "max-h-16 opacity-70"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{member.bio}</p>

                    {selectedMember === member.id && (
                      <div className="space-y-4">
                        {/* Skills */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Achievements</h4>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            {member.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-center">
                                <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Click indicator */}
                  <div className="text-xs text-muted-foreground mt-3 text-center">
                    {selectedMember === member.id ? "Click to collapse" : "Click to learn more"}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Join team CTA */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-0 bg-primary/5">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Join Our Growing Team</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're always looking for passionate individuals who share our vision of creating sustainable technology
                solutions. Join us in making a positive impact on the world.
              </p>
              <Button size="lg" className="px-8">
                View Open Positions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
