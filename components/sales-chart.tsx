"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "@/components/ui/chart"

// Mock data for sales chart
const data = [
  { name: "Apr 01", sales: 12000 },
  { name: "Apr 05", sales: 9500 },
  { name: "Apr 10", sales: 15000 },
  { name: "Apr 15", sales: 14200 },
  { name: "Apr 20", sales: 16800 },
  { name: "Apr 25", sales: 18500 },
  { name: "Apr 30", sales: 22000 },
]

export function SalesChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `₹${value}`}
        />
        <Tooltip formatter={(value) => [`₹${value}`, "Sales"]} />
        <Line type="monotone" dataKey="sales" stroke="#4ade80" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
