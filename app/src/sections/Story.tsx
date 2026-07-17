import { useReveal } from '@/hooks/useReveal'
import { Carrot, HeartHandshake, Star, Users } from 'lucide-react'

const stats = [
  { icon: Star, value: '4.8', label: 'Google rating' },
  { icon: Users, value: '1,244', label: 'Happy reviewers' },
  { icon: HeartHandshake, value: '~30 yrs', label: 'Family run' },
  { icon: Carrot, value: 'Local', label: 'Hanover grown' },
]

export default function Story() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="story" ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Image side */}
        <div className="reveal relative">
          <div className="absolute -left-6 -top-6 size-28 rounded-3xl bg-accent/15" />
          <div className="absolute -bottom-8 -right-4 size-40 rounded-full bg-primary/10" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-primary/20 ring-1 ring-border">
            <img
              src="/images/produce.jpg"
              alt="Crates of fresh tomatoes, peaches, corn and peppers"
              className="aspect-[3/2] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 left-6 rounded-2xl bg-card px-6 py-4 shadow-xl ring-1 ring-border sm:left-10">
            <p className="font-display text-3xl font-semibold text-accent">Since the stand</p>
            <p className="text-sm font-semibold text-muted-foreground">
              on Pole Green Road — same family, same corner
            </p>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="reveal mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
            Our story
          </p>
          <h2 className="reveal font-display text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            A Mechanicsville landmark, one tomato at a time.
          </h2>
          <p className="reveal mt-6 text-lg leading-relaxed text-muted-foreground">
            Long before the markets and the highways, there was a simple roadside stand
            where the gas station sits today. Neighbors came with their grandparents;
            now they bring their grandkids. David and Gwen have run Pole Green Produce
            for just shy of thirty years — and regulars will tell you the greeting is
            as warm as the produce is fresh.
          </p>
          <p className="reveal mt-4 text-lg leading-relaxed text-muted-foreground">
            What&rsquo;s on the tables changes with the seasons, but the promise
            doesn&rsquo;t: honest prices, super-friendly staff, and the kind of flavor
            you only get when the trip from field to stand is measured in miles, not
            weeks.
          </p>

          <div className="reveal mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-card p-4 text-center shadow-sm ring-1 ring-border"
              >
                <s.icon className="mx-auto mb-2 size-5 text-accent" />
                <p className="font-display text-2xl font-semibold text-foreground">{s.value}</p>
                <p className="mt-0.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
