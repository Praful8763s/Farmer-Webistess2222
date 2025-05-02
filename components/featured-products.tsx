import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for featured products
const featuredProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 120,
    unit: "kg",
    farmer: "Green Valley Farm",
    image: "/templates/organic tomato.jpg?height=200&width=200",
    organic: true,
  },
  {
    id: 2,
    name: "Fresh Eggs",
    price: 180,
    unit: "dozen",
    farmer: "Sunrise Poultry",
    image: "/templates/fresh egg.jpg?height=200&width=200",
    organic: false,
  },
  {
    id: 3,
    name: "Honey",
    price: 350,
    unit: "jar",
    farmer: "Bee Haven Apiary",
    image: "/templates/honey.jpg?height=200&width=200",
    organic: true,
  },
  {
    id: 4,
    name: "Seasonal Vegetables Basket",
    price: 799,
    unit: "basket",
    farmer: "Riverside Gardens",
    image: "/templates/seasonal vegetable basket.jpg?height=200&width=200",
    organic: true,
  },
]

export function FeaturedProducts() {
  return (
    <section className="container py-12 md:py-24">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">Featured Products</h2>
            <p className="text-muted-foreground">Fresh picks from local farmers this week</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/marketplace">View All</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="object-cover w-full h-full"
                />
                {product.organic && <Badge className="absolute top-2 right-2 bg-green-600">Organic</Badge>}
              </div>
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1">{product.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{product.farmer}</p>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="font-bold text-lg">
                  ₹{product.price.toFixed(2)}/{product.unit}
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button className="w-full">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
