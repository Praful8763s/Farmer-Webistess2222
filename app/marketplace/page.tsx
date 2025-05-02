import { Suspense } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { ProductSkeleton } from "@/components/product-skeleton"

export default function MarketplacePage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
        <p className="text-muted-foreground">Browse fresh products from local farmers</p>
      </div>

      <div className="flex flex-col gap-8 md:flex-row mt-8">
        <div className="md:w-1/4">
          <ProductFilters />
        </div>
        <div className="flex-1">
          <Suspense fallback={<ProductSkeleton />}>
            <ProductGrid />
          </Suspense>
        </div>
      </div>
    </div>
  )
}
