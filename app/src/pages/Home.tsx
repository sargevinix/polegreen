import Navbar from '@/sections/Navbar'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import Story from '@/sections/Story'
import Stand from '@/sections/Stand'
import Reviews from '@/sections/Reviews'
import Visit from '@/sections/Visit'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <Stand />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </div>
  )
}
