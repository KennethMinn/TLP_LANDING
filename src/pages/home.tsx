import SiteHeader from "../components/shared/site-header"
import Collection from "../sections/home/collection"
import Hero from "../sections/home/hero"

const Home = () => {
  return (
    <main className="min-h-svh bg-ink text-cream">
      <SiteHeader />
      <Hero />
      <Collection />
    </main>
  )
}

export default Home
