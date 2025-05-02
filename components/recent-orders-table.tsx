import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Mock data for recent orders
const recentOrders = [
  {
    id: "ORD-001",
    customer: {
      name: "John Smith",
      email: "john@example.com",
      image: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    status: "delivered",
    products: ["Organic Tomatoes", "Fresh Eggs"],
    total: 799,
    date: "2023-04-23",
  },
  {
    id: "ORD-002",
    customer: {
      name: "Sarah Johnson",
      email: "sarah@example.com",
      image: "/placeholder.svg?height=32&width=32",
      initials: "SJ",
    },
    status: "processing",
    products: ["Seasonal Vegetables Basket"],
    total: 1099,
    date: "2023-04-22",
  },
  {
    id: "ORD-003",
    customer: {
      name: "Michael Brown",
      email: "michael@example.com",
      image: "/placeholder.svg?height=32&width=32",
      initials: "MB",
    },
    status: "pending",
    products: ["Honey", "Artisan Cheese"],
    total: 630,
    date: "2023-04-21",
  },
  {
    id: "ORD-004",
    customer: {
      name: "Emily Davis",
      email: "emily@example.com",
      image: "/placeholder.svg?height=32&width=32",
      initials: "ED",
    },
    status: "delivered",
    products: ["Fresh Herbs Bundle", "Organic Tomatoes"],
    total: 240,
    date: "2023-04-20",
  },
]

export function RecentOrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell className="font-medium">{order.id}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={order.customer.image || "/placeholder.svg"} alt={order.customer.name} />
                  <AvatarFallback>{order.customer.initials}</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5">
                  <p className="text-sm font-medium">{order.customer.name}</p>
                  <p className="text-xs text-muted-foreground">{order.customer.email}</p>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === "delivered" ? "default" : order.status === "processing" ? "secondary" : "outline"
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">₹{order.total.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
