import { CheckCircle, Truck, Users } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="bg-muted py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-lg">
            Our platform makes it easy to connect with local farmers and get fresh produce
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Browse & Select</h3>
            <p className="text-muted-foreground">
              Browse products from local farmers, filter by category, and select what you need.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Truck className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Delivery or Pickup</h3>
            <p className="text-muted-foreground">
              Choose between convenient home delivery or pickup from designated locations.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Support Local</h3>
            <p className="text-muted-foreground">
              Enjoy fresh produce while supporting local farmers and sustainable agriculture.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
