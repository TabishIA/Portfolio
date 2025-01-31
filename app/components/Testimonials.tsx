import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO at TechCorp",
      content:
        "Working with this developer was an absolute pleasure. Their technical skills and attention to detail are unmatched.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Jane Smith",
      role: "Project Manager at WebSolutions",
      content: "I was impressed by the developer's ability to deliver high-quality work consistently and on time.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Alex Johnson",
      role: "Lead Developer at InnovateTech",
      content:
        "This developer's problem-solving skills and innovative approach to challenges make them a valuable asset to any team.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
                <Avatar>
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

