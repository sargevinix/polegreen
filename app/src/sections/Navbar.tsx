import { useEffect, useState } from 'react'
import { MapPin, Menu, Sprout, X } from 'lucide-react'

const links = [
  { label: 'Our Story', href: '#story' },
  { label: 'The Stand', href: '#stand' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/90 shadow-[0_1px_0_0_hsl(38_24%_84%),0_12px_32px_-16px_hsl(126_32%_21%/0.25)] backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span
            className={`grid size-10 place-items-center rounded-full transition-colors ${
              scrolled ? 'bg-primary text-primary-foreground' : 'bg-white/15 text-white backdrop-blur-sm'
            }`}
          >
            <Sprout className="size-5" strokeWidth={2.2} />
          </span>
          <span
            className={`font-display text-lg font-semibold tracking-tight transition-colors sm:text-xl ${
              scrolled ? 'text-foreground' : 'text-white'
            }`}
          >
            Pole Green Produce
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:opacity-70 ${
                scrolled ? 'text-foreground' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=6547+Pole+Green+Rd,+Mechanicsville,+VA+23116"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5"
          >
            <MapPin className="size-4" />
            Directions
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className={`grid size-10 place-items-center rounded-full md:hidden ${
            scrolled ? 'text-foreground' : 'text-white'
          }`}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 font-display text-lg font-semibold text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=6547+Pole+Green+Rd,+Mechanicsville,+VA+23116"
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground"
          >
            <MapPin className="size-4" />
            Get Directions
          </a>
        </div>
      )}
    </header>
  )
}
