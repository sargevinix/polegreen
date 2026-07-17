import { Sprout } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[hsl(126_35%_15%)] py-12 text-primary-foreground/75">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid size-10 place-items-center rounded-full bg-white/10">
            <Sprout className="size-5 text-amber-300" />
          </span>
          <span className="font-display text-xl font-semibold text-primary-foreground">
            Pole Green Produce
          </span>
        </a>
        <p className="max-w-md text-sm leading-relaxed">
          6547 Pole Green Rd, Mechanicsville, VA 23116 · (804) 730-7732
        </p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold">
          <a href="#story" className="transition-colors hover:text-amber-300">Our Story</a>
          <a href="#stand" className="transition-colors hover:text-amber-300">The Stand</a>
          <a href="#reviews" className="transition-colors hover:text-amber-300">Reviews</a>
          <a href="#visit" className="transition-colors hover:text-amber-300">Visit</a>
        </div>
        <p className="text-xs text-primary-foreground/45">
          Family-run roadside market · Hanover County, Virginia
        </p>
      </div>
    </footer>
  )
}
