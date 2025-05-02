import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { HowItWorks } from "@/components/how-it-works"
import { FarmerSpotlight } from "@/components/farmer-spotlight"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedProducts />
      <HowItWorks />
      <FarmerSpotlight />

      <section className="container py-12 md:py-24 lg:py-32">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Join our growing community</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Whether you're a farmer looking to sell your produce or a consumer seeking fresh, local food, our platform
            connects you directly with your community.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/register?role=farmer">Register as Farmer</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/register?role=consumer">Register as Consumer</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
