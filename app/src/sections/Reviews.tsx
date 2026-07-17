import { useReveal } from '@/hooks/useReveal'
import { Quote, Star } from 'lucide-react'

const reviews = [
  {
    name: 'Hillary Conner',
    meta: 'Local Guide · 56 reviews',
    when: 'a year ago',
    text: 'My new favorite place to get flowers, produce, bread, cookies, and jam. The vegetables are always amazing. Flowers are beautiful. The breads and cookies are to die for. The staff are always so nice and friendly.',
  },
  {
    name: 'Beau Mitchell',
    meta: 'Local Guide · 63 reviews',
    when: '5 months ago',
    text: 'I have known David and Gwen at Pole Green Produce for just shy of 30 years! I even remember going to the original stand where the gas station is now with my nanny.',
  },
  {
    name: 'Anthony Couillard',
    meta: 'Local Guide · 1,208 reviews',
    when: '4 years ago',
    text: 'What a great roadside produce market! They kind of have everything here. We grabbed some Hanover tomatoes, cucumbers, peaches and a few other things. They have a massive selection.',
  },
]

const highlights = [
  '“Super friendly staff, yummy fresh produce and GREAT PRICES!!”',
  '“Wonderful produce and best fresh dry packed scallops plus jumbo lump crab meat.”',
  '“Great selection of fresh vegetables and fruits at a great price!!!”',
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

export default function Reviews() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="reviews" ref={ref} className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Rating summary */}
          <div className="reveal">
            <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
              Reviews
            </p>
            <h2 className="font-display text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              The neighborhood said it best.
            </h2>

            <div className="mt-10 flex items-end gap-5">
              <p className="font-display text-[7rem] font-semibold leading-none tracking-tight text-primary sm:text-[9rem]">
                4.8
              </p>
              <div className="pb-5">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-2 font-bold text-foreground">1,244 reviews</p>
                <p className="text-sm font-semibold text-muted-foreground">on Google</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {highlights.map((h) => (
                <p
                  key={h}
                  className="border-l-4 border-accent/60 pl-4 font-display text-lg font-medium italic leading-snug text-foreground/85"
                >
                  {h}
                </p>
              ))}
            </div>
          </div>

          {/* Review cards */}
          <div className="flex flex-col gap-5">
            {reviews.map((r, i) => (
              <figure
                key={r.name}
                className="reveal relative rounded-[1.75rem] bg-card p-7 shadow-sm ring-1 ring-border transition-shadow hover:shadow-xl hover:shadow-primary/10 sm:p-8"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <Quote className="absolute right-7 top-7 size-8 text-accent/20" />
                <div className="flex items-center gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary font-display text-lg font-semibold text-primary-foreground">
                    {r.name.charAt(0)}
                  </span>
                  <div>
                    <figcaption className="font-bold text-foreground">{r.name}</figcaption>
                    <p className="text-sm font-semibold text-muted-foreground">
                      {r.meta} · {r.when}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Stars />
                </div>
                <blockquote className="mt-3 leading-relaxed text-foreground/85">
                  {r.text}
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
