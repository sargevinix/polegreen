import { useReveal } from '@/hooks/useReveal'
import { Clock, Facebook, MapPin, Navigation, Phone } from 'lucide-react'

export default function Visit() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="visit" ref={ref} className="relative overflow-hidden bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="grain absolute inset-0" />
      {/* decorative rings */}
      <div className="absolute -left-32 -top-32 size-96 rounded-full border-[40px] border-white/5" />
      <div className="absolute -bottom-40 -right-24 size-[28rem] rounded-full border-[56px] border-white/5" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="reveal mb-3 text-sm font-extrabold uppercase tracking-[0.22em] text-amber-300">
            Come say hello
          </p>
          <h2 className="reveal font-display text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Right on Pole Green Road.
          </h2>
          <p className="reveal mt-5 max-w-md text-lg leading-relaxed text-primary-foreground/80">
            Easy to find, hard to leave empty-handed. Look for the stand piled with
            crates — that&rsquo;s us.
          </p>

          <div className="reveal mt-9 space-y-5">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=6547+Pole+Green+Rd,+Mechanicsville,+VA+23116"
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                <MapPin className="size-5 text-amber-300" />
              </span>
              <span>
                <span className="block font-bold">6547 Pole Green Rd</span>
                <span className="block text-primary-foreground/75">
                  Mechanicsville, VA 23116 · Plus code JMP8+J2
                </span>
              </span>
            </a>

            <a href="tel:+18047307732" className="group flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                <Phone className="size-5 text-amber-300" />
              </span>
              <span>
                <span className="block font-bold">(804) 730-7732</span>
                <span className="block text-primary-foreground/75">
                  Call ahead for seasonal hours & specials
                </span>
              </span>
            </a>

            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
                <Clock className="size-5 text-amber-300" />
              </span>
              <span>
                <span className="block font-bold">Opens 8 AM</span>
                <span className="block text-primary-foreground/75">
                  Market hours vary with the season
                </span>
              </span>
            </div>
          </div>

          <div className="reveal mt-10 flex flex-wrap gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=6547+Pole+Green+Rd,+Mechanicsville,+VA+23116"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground shadow-xl shadow-black/20 transition-all hover:-translate-y-0.5"
            >
              <Navigation className="size-5" />
              Get Directions
            </a>
            <a
              href="https://m.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-bold ring-1 ring-white/25 transition-colors hover:bg-white/20"
            >
              <Facebook className="size-5" />
              Find us on Facebook
            </a>
          </div>
        </div>

        {/* Map-style card */}
        <div className="reveal relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-card p-2 text-foreground shadow-2xl shadow-black/30 ring-1 ring-white/10">
            <div className="relative overflow-hidden rounded-[1.6rem]">
              <img
                src="/images/hero.jpg"
                alt="Pole Green Produce market front"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-display text-2xl font-semibold text-white">
                  Pole Green Produce
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-white/85">
                  <Star /> Produce market · Mechanicsville, Virginia
                </p>
              </div>
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="relative grid size-14 place-items-center">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent/40" />
                  <span className="relative grid size-12 place-items-center rounded-full bg-accent text-accent-foreground shadow-xl ring-4 ring-white/30">
                    <MapPin className="size-6" />
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-amber-400 text-amber-400" aria-hidden>
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
    </svg>
  )
}
