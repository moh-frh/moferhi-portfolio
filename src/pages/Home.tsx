import { Hero } from "../components/sections/hero"
import { About } from "../components/sections/about"
import { FeaturedProjects } from "../components/sections/featured-projects"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <FeaturedProjects />
    </main>
  )
}

