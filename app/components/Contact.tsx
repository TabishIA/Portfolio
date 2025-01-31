import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, FileText } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/tabish-ansari-669046301/" },
  { name: "GitHub", icon: Github, url: "https://github.com/TabishIA" },
  { name: "Email", icon: Mail, url: "mailto:your.email@example.com" },
  { name: "Resume", icon: FileText, url: "/your-resume.pdf" },
]

export default function Contact() {
  return (
    <section className="py-20 slide-in">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-light text-center">Connect With Me</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-2 text-foreground hover:text-primary transition-colors"
              >
                <link.icon className="w-8 h-8" />
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

