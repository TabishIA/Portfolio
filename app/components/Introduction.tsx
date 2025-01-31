import Image from "next/image"

export default function Introduction() {
  return (
    <section className="py-20 md:py-32 flex flex-col items-center text-center fade-in">
      <Image
        src="/placeholder.svg"
        alt="Tabish Ibrahim Ansari"
        width={150}
        height={150}
        className="rounded-full mb-8"
      />
      <h2 className="text-4xl md:text-5xl font-light mb-4">Tabish Ibrahim Ansari</h2>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
        An aspiring engineer in my third year of B.E. Information Technology at Pune Institute of Computer Technology.
        Passionate about innovation and problem-solving in the field of IT.
      </p>
    </section>
  )
}

