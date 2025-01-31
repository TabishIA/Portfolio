import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const skills = [
    { name: "Python", logo: "/python-logo-only.svg" },
    { name: "C++", logo: "/cpp-logo.svg" },
    { name: "Github", logo: "/git-logo.svg" },
    { name: "MySQL", logo: "/mysql-logo.svg" },
    { name: "MongoDB", logo: "/mongodb-logo.svg" },
    { name: "Linux", logo: "/linux-logo.svg" },
  ]

  return (
    <section className="py-20 slide-in">
      <h2 className="text-3xl font-light mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill) => (
          <Card key={skill.name} className="bg-secondary hover:bg-secondary/80 transition-colors">
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <Image
                src={skill.logo}
                alt={`${skill.name} logo`}
                width={64}
                height={64}
                className="mb-4"
                priority
              />
              <span className="text-lg font-medium text-center">{skill.name}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

