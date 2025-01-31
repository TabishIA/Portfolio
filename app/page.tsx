import Introduction from "./components/Introduction"
import Skills from "./components/Skills"
import Contact from "./components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4">
        <Introduction />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

