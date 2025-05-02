import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Fresh from Farm to Table
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Connect directly with local farmers. Get fresh, seasonal produce delivered to your doorstep while
                supporting sustainable agriculture.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for products or farmers..."
                  className="w-full pl-8 rounded-md"
                />
              </div>
              <Button type="submit">Search</Button>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg">
                <Link href="/marketplace">Browse Marketplace</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/register?role=farmer">Sell Your Produce</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl">
              <img
                src="/placeholder.svg?height=700&width=700"
                alt="Fresh produce from local farms"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
