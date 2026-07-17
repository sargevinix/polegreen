import { Leaf } from 'lucide-react'

const items = [
  'Hanover Tomatoes',
  'Peaches',
  'Sweet Corn',
  'Cantaloupe',
  'Cut Flowers',
  'Jumbo Lump Crab',
  'Dry-Packed Scallops',
  'Country Ham',
  'Fresh Bread',
  'Local Jam and Honey',
  'Pumpkins',
  'Watermelon',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-primary/15 bg-primary py-4">
      <div className="animate-marquee flex w-max items-center gap-8 pr-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-lg font-medium italic text-primary-foreground/95">
              {item}
            </span>
            <Leaf className="size-4 text-primary-foreground/50" />
          </span>
        ))}
      </div>
    </div>
  )
}
