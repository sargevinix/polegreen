import { useReveal } from '@/hooks/useReveal'
import { ArrowUpRight, Flower2, Milk, Shell, Wheat } from 'lucide-react'

const cards = [
  {
    img: '/images/real.webp',
    tag: 'From the fields',
    title: 'Just-picked produce',
    body: 'Hanover tomatoes, sweet corn, peaches, cantaloupe, eggplant, cucumbers — whatever the season is showing off, stacked in wooden crates out front.',
  },
  {
    img: '/images/blackberry.webp',
    tag: 'Freshly picked',
    title: 'Local blackberries',
    body: 'The sweetest berries you\'ll find anywhere, picked at the peak of ripeness and sold by the pint. A favorite with locals and visitors alike.',
  },
  {
    img: '/images/garden.webp',
    tag: 'Freshly harvested',
    title: 'Farm-fresh vegetables',
    body: 'Vibrant summer squash, crisp green peppers, zucchini, and vine-ripened tomatoes stacked high. Freshly picked and ready to bring local flavor to your dinner table.',
  },
]

export default function Stand() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="stand" ref={ref} className="relative bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="reveal mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-accent">
            At the stand
          </p>
          <h2 className="reveal font-display text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Kind of everything, all of it good.
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-muted-foreground">
            First-timers are always surprised by the selection. Regulars just come with
            a list — and leave with more than they planned.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="reveal group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-card shadow-sm ring-1 ring-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-black/45 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white backdrop-blur-sm">
                  {c.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{c.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Seafood & smokehouse band */}
        <div className="reveal relative mt-6 overflow-hidden rounded-[1.75rem] bg-primary p-8 text-primary-foreground shadow-xl shadow-primary/25 sm:p-12">
          <div className="grain absolute inset-0" />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">
                Don&rsquo;t miss the cooler
              </p>
              <h3 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Scallops, crab meat and country ham
              </h3>
              <p className="mt-4 leading-relaxed text-primary-foreground/80">
                Reviewers rave about the best fresh dry-packed scallops and jumbo lump
                crab meat around — plus country ham and seasonal specialties you
                won&rsquo;t find at the grocery store.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Shell, label: 'Dry-packed scallops' },
                { icon: Shell, label: 'Jumbo lump crab' },
                { icon: Wheat, label: 'Country ham' },
                { icon: Flower2, label: 'Seasonal décor' },
                { icon: Milk, label: 'Local dairy & eggs' },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-bold ring-1 ring-white/20"
                >
                  <chip.icon className="size-4 text-amber-300" />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
          <ArrowUpRight className="absolute -right-8 -top-8 size-48 text-white/5" />
        </div>
      </div>
    </section>
  )
}
