"use client"

import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-light">Tabish Ansari</h1>
        <nav>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link href="https://github.com/TabishIA" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/tabish-ansari-669046301/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
              </Link>
            </li>
            <li>
              <Link href="mailto:ansr.tabish@gmail.com">
                <Mail className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
              </Link>
            </li>
            <li>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="bg-transparent"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

