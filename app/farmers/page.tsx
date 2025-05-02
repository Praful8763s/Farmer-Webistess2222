import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Indian states grouped by region
const indianRegions = {
  "North India": [
    "Delhi",
    "Haryana",
    "Himachal Pradesh",
    "Jammu & Kashmir",
    "Punjab",
    "Rajasthan",
    "Uttar Pradesh",
    "Uttarakhand",
  ],
  "South India": ["Andhra Pradesh", "Karnataka", "Kerala", "Tamil Nadu", "Telangana"],
  "East India": ["Bihar", "Jharkhand", "Odisha", "West Bengal"],
  "West India": ["Goa", "Gujarat", "Maharashtra"],
  "Central India": ["Chhattisgarh", "Madhya Pradesh"],
  "Northeast India": ["Arunachal Pradesh", "Assam", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Sikkim", "Tripura"],
  "Union Territories": [
    "Andaman & Nicobar",
    "Chandigarh",
    "Dadra & Nagar Haveli",
    "Daman & Diu",
    "Lakshadweep",
    "Puducherry",
  ],
}

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

export default function FarmersPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Farmers Directory</h1>
        <p className="text-muted-foreground">Browse farmers from across India</p>
      </div>

      <Tabs defaultValue="all" className="mt-8">
        <TabsList className="mb-8 flex flex-wrap">
          <TabsTrigger value="all">All Regions</TabsTrigger>
          {Object.keys(indianRegions).map((region) => (
            <TabsTrigger key={region} value={region}>
              {region}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {farmers.map((farmer) => (
              <FarmerCard key={farmer.id} farmer={farmer} />
            ))}
          </div>
        </TabsContent>

        {Object.entries(indianRegions).map(([region, states]) => (
          <TabsContent key={region} value={region}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {farmers
                .filter((farmer) => farmer.region === region)
                .map((farmer) => (
                  <FarmerCard key={farmer.id} farmer={farmer} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function FarmerCard({ farmer }: { farmer: any }) {
  return (
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
  )
}
