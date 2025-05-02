import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// Mock data for featured farmers
const featuredFarmers = [
  {
    id: 1,
    name: "Green Valley Farm",
    owner: "Sarah Johnson",
    location: "Riverside County",
    specialty: "Organic Vegetables",
    image: "/placeholder.svg?height=100&width=100",
    initials: "GV",
    years: 15,
  },
  {
    id: 2,
    name: "Sunrise Poultry",
    owner: "Michael Chen",
    location: "Oakwood Hills",
    specialty: "Free-range Eggs & Poultry",
    image: "/placeholder.svg?height=100&width=100",
    initials: "SP",
    years: 8,
  },
  {
    id: 3,
    name: "Riverside Gardens",
    owner: "Emma Rodriguez",
    location: "Greenfield",
    specialty: "Seasonal Produce & Herbs",
    image: "/placeholder.svg?height=100&width=100",
    initials: "RG",
    years: 12,
  },
]

export function FarmerSpotlight() {
  return (
    <section className="container py-12 md:py-24">
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">Meet Our Farmers</h2>
            <p className="text-muted-foreground">The passionate people behind your food</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/farmers">View All Farmers</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredFarmers.map((farmer) => (
            <Card key={farmer.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={farmer.image || "/placeholder.svg"} alt={farmer.name} />
                  <AvatarFallback>{farmer.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{farmer.name}</CardTitle>
                  <CardDescription>{farmer.owner}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Location:</span>
                    <span className="text-sm font-medium">{farmer.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Specialty:</span>
                    <span className="text-sm font-medium">{farmer.specialty}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Farming for:</span>
                    <Badge variant="outline">{farmer.years} years</Badge>
                  </div>
                  <Button asChild className="mt-4 w-full">
                    <Link href={`/farmers/${farmer.id}`}>View Products</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
