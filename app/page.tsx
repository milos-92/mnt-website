import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Work from './components/Work'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-[#080b14]">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
