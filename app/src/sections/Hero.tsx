import { ChevronDown, Clock, MapPin, Phone, Star } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="The Pole Green Produce farm stand at golden hour"
          className="animate-kenburns size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pb-28">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white backdrop-blur-md ring-1 ring-white/25">
              <Star className="size-4 fill-amber-400 text-amber-400" />
              4.8 · 1,244 Google reviews
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/12 px-4 py-2 text-sm font-bold text-white backdrop-blur-md ring-1 ring-white/25">
              <Clock className="size-4" />
              Opens 8 AM
            </span>
          </div>

          <h1 className="font-display text-balance text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl">
            Farm-fresh,
            <br />
            <span className="italic font-light">picked close</span>{' '}
            <span className="squiggle">to home.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            A family-run roadside market in Mechanicsville, Virginia — piled high with
            local produce, cut flowers, fresh bread, and neighbors you&rsquo;ve known
            for thirty years.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=6547+Pole+Green+Rd,+Mechanicsville,+VA+23116"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 font-bold text-accent-foreground shadow-xl shadow-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <MapPin className="size-5" />
              Get Directions
            </a>
            <a
              href="tel:+18047307732"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 font-bold text-white ring-1 ring-white/35 backdrop-blur-md transition-colors hover:bg-white/20"
            >
              <Phone className="size-5" />
              (804) 730-7732
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#story"
        aria-label="Scroll to our story"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <ChevronDown className="animate-floaty size-7" />
      </a>
    </section>
  )
}
