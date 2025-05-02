"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

// Mock data for products
const products = [
  {
    id: 1,
    name: "Organic Tomatoes",
    price: 120,
    unit: "kg",
    farmer: "Green Valley Farm",
    farmerId: 1,
    image: "/templates/organic tomato.jpg?height=200&width=200",
    organic: true,
    category: "vegetables",
    stock: 25,
    state: "Maharashtra",
  },
  {
    id: 2,
    name: "Fresh Eggs",
    price: 180,
    unit: "dozen",
    farmer: "Sunrise Poultry",
    farmerId: 2,
    image: "/templates/fresh egg.jpg?height=200&width=200",
    organic: false,
    category: "dairy",
    stock: 40,
    state: "Punjab",
  },
  {
    id: 3,
    name: "Honey",
    price: 350,
    unit: "jar",
    farmer: "Bee Haven Apiary",
    farmerId: 4,
    image: "/templates/honey.jpg?height=200&width=200",
    organic: true,
    category: "other",
    stock: 15,
    state: "Kerala",
  },
  {
    id: 4,
    name: "Seasonal Vegetables Basket",
    price: 799,
    unit: "basket",
    farmer: "Riverside Gardens",
    farmerId: 3,
    image: "/templates/seasonal vegetable basket.jpg?height=200&width=200",
    organic: true,
    category: "vegetables",
    stock: 10,
    state: "Gujarat",
  },
  {
    id: 5,
    name: "Artisan Cheese",
    price: 280,
    unit: "piece",
    farmer: "Meadow Dairy",
    farmerId: 5,
    image: "/templates/artisaan cheese.jpg?height=200&width=200",
    organic: false,
    category: "dairy",
    stock: 20,
    state: "Himachal Pradesh",
  },
  {
    id: 6,
    name: "Fresh Apples",
    price: 150,
    unit: "kg",
    farmer: "Orchard Hills",
    farmerId: 6,
    image: "/templates/fresh apples.jpg?height=200&width=200",
    organic: true,
    category: "fruits",
    stock: 50,
    state: "Jammu & Kashmir",
  },
  {
    id: 7,
    name: "Grass-fed Beef",
    price: 550,
    unit: "kg",
    farmer: "Green Pastures",
    farmerId: 7,
    image: "/templates/grass fed beef.jpg?height=200&width=200",
    organic: true,
    category: "meat",
    stock: 15,
    state: "Rajasthan",
  },
  {
    id: 8,
    name: "Fresh Herbs Bundle",
    price: 120,
    unit: "bundle",
    farmer: "Riverside Gardens",
    farmerId: 3,
    image: "/templates/fresh herbs bundle.jpg?height=200&width=200",
    organic: true,
    category: "herbs",
    stock: 30,
    state: "Gujarat",
  },
]

export function ProductGrid() {
  const { toast } = useToast()
  const [cart, setCart] = useState<{ [key: number]: number }>({})

  const addToCart = (productId: number) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }))

    toast({
      title: "Added to cart",
      description: "Product has been added to your cart",
    })
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <div className="aspect-square relative">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="object-cover w-full h-full" />
            {product.organic && <Badge className="absolute top-2 right-2 bg-green-600">Organic</Badge>}
          </div>
          <CardHeader className="p-4">
            <CardTitle className="line-clamp-1">{product.name}</CardTitle>
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">{product.farmer}</p>
              <Badge variant="outline">{product.state}</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">
                ₹{product.price.toFixed(2)}/{product.unit}
              </p>
              <Badge variant="outline">{product.stock} in stock</Badge>
            </div>
          </CardContent>
          <CardFooter className="p-4">
            <Button className="w-full" onClick={() => addToCart(product.id)}>
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
