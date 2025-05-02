import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

// Mock data for farmers
const farmers = [
  {
    id: 1,
    name: "Green Valley Farm",
    owner: "Rajesh Sharma",
    location: "Pune",
    state: "Maharashtra",
    specialty: "Organic Vegetables",
    image: "/placeholder.svg?height=100&width=100",
    initials: "GV",
    years: 15,
    region: "West India",
  },
  {
    id: 2,
    name: "Sunrise Poultry",
    owner: "Amrit Singh",
    location: "Amritsar",
    state: "Punjab",
    specialty: "Free-range Eggs & Poultry",
    image: "/placeholder.svg?height=100&width=100",
    initials: "SP",
    years: 8,
    region: "North India",
  },
  {
    id: 3,
    name: "Riverside Gardens",
    owner: "Priya Patel",
    location: "Ahmedabad",
    state: "Gujarat",
    specialty: "Seasonal Produce & Herbs",
    image: "/placeholder.svg?height=100&width=100",
    initials: "RG",
    years: 12,
    region: "West India",
  },
  {
    id: 4,
    name: "Himalayan Orchards",
    owner: "Vikram Thakur",
    location: "Shimla",
    state: "Himachal Pradesh",
    specialty: "Apples & Stone Fruits",
    image: "/placeholder.svg?height=100&width=100",
    initials: "HO",
    years: 20,
    region: "North India",
  },
  {
    id: 5,
    name: "Kerala Spice Garden",
    owner: "Maya Nair",
    location: "Kochi",
    state: "Kerala",
    specialty: "Spices & Tropical Fruits",
    image: "/placeholder.svg?height=100&width=100",
    initials: "KS",
    years: 18,
    region: "South India",
  },
  {
    id: 6,
    name: "Bengal Rice Fields",
    owner: "Sanjay Banerjee",
    location: "Kolkata",
    state: "West Bengal",
    specialty: "Rice & Grains",
    image: "/placeholder.svg?height=100&width=100",
    initials: "BR",
    years: 25,
    region: "East India",
  },
]

// Indian states with proper capitalization
const indianStates = {
  delhi: "Delhi",
  haryana: "Haryana",
  "himachal-pradesh": "Himachal Pradesh",
  "jammu-&-kashmir": "Jammu & Kashmir",
  punjab: "Punjab",
  rajasthan: "Rajasthan",
  "uttar-pradesh": "Uttar Pradesh",
  uttarakhand: "Uttarakhand",
  "andhra-pradesh": "Andhra Pradesh",
  karnataka: "Karnataka",
  kerala: "Kerala",
  "tamil-nadu": "Tamil Nadu",
  telangana: "Telangana",
  bihar: "Bihar",
  jharkhand: "Jharkhand",
  odisha: "Odisha",
  "west-bengal": "West Bengal",
  goa: "Goa",
  gujarat: "Gujarat",
  maharashtra: "Maharashtra",
  chhattisgarh: "Chhattisgarh",
  "madhya-pradesh": "Madhya Pradesh",
  "arunachal-pradesh": "Arunachal Pradesh",
  assam: "Assam",
  manipur: "Manipur",
  meghalaya: "Meghalaya",
  mizoram: "Mizoram",
  nagaland: "Nagaland",
  sikkim: "Sikkim",
  tripura: "Tripura",
  "andaman-&-nicobar": "Andaman & Nicobar",
  chandigarh: "Chandigarh",
  "dadra-&-nagar-haveli": "Dadra & Nagar Haveli",
  "daman-&-diu": "Daman & Diu",
  lakshadweep: "Lakshadweep",
  puducherry: "Puducherry",
}

export default function StateFarmersPage({ params }: { params: { state: string } }) {
  const stateSlug = params.state
  const stateName = indianStates[stateSlug]

  if (!stateName) {
    notFound()
  }

  const stateFarmers = farmers.filter((farmer) => farmer.state.toLowerCase() === stateName.toLowerCase())

  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Farmers in {stateName}</h1>
        <p className="text-muted-foreground">Browse local farmers from {stateName}</p>
      </div>

      {stateFarmers.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {stateFarmers.map((farmer) => (
            <Card key={farmer.id}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={farmer.image || "/placeholder.svg"} alt={farmer.name} />
                  <AvatarFallback>{farmer.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{farmer.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{farmer.owner}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Location:</span>
                    <span className="text-sm font-medium">
                      {farmer.location}, {farmer.state}
                    </span>
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
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <h2 className="text-xl font-medium">No farmers found in {stateName}</h2>
          <p className="mt-2 text-muted-foreground">
            We're expanding our network. Check back soon or browse farmers from other states.
          </p>
          <Button asChild className="mt-6">
            <Link href="/farmers">View All Farmers</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
