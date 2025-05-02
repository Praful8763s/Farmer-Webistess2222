"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

// Indian states grouped by region
const indianStates = {
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

// Flatten the states array for the filter
const allStates = Object.values(indianStates).flat()

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000])

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium mb-2">Filters</h3>
        <Button variant="outline" size="sm" className="w-full">
          Clear All
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price", "organic", "states"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Vegetables", "Fruits", "Dairy", "Meat", "Herbs", "Other"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`category-${category.toLowerCase()}`} />
                  <Label htmlFor={`category-${category.toLowerCase()}`}>{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range (₹)</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 1000]} max={2000} step={10} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex items-center justify-between">
                <p className="text-sm">₹{priceRange[0]}</p>
                <p className="text-sm">₹{priceRange[1]}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="organic">
          <AccordionTrigger>Organic</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="organic-yes" />
                <Label htmlFor="organic-yes">Organic Only</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="organic-all" />
                <Label htmlFor="organic-all">Show All</Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="states">
          <AccordionTrigger>States</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
              {allStates.map((state) => (
                <div key={state} className="flex items-center space-x-2">
                  <Checkbox id={`state-${state.toLowerCase().replace(/\s+/g, "-")}`} />
                  <Label htmlFor={`state-${state.toLowerCase().replace(/\s+/g, "-")}`}>{state}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="farmers">
          <AccordionTrigger>Farmers</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Green Valley Farm", "Sunrise Poultry", "Riverside Gardens", "Bee Haven Apiary", "Meadow Dairy"].map(
                (farmer) => (
                  <div key={farmer} className="flex items-center space-x-2">
                    <Checkbox id={`farmer-${farmer.toLowerCase().replace(/\s/g, "-")}`} />
                    <Label htmlFor={`farmer-${farmer.toLowerCase().replace(/\s/g, "-")}`}>{farmer}</Label>
                  </div>
                ),
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
