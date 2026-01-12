import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"


export function ModifierSkeleton() {
  return (
  

        <div className="space-y-6">
          {/* Item Image and Description Skeleton */}
          <div className="flex gap-4">
            <Skeleton className="w-24 h-24 rounded-lg" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>

          {/* Groups and Modifiers Skeleton */}
          {[1, 2].map((groupIndex) => (
            <Card key={groupIndex} className="p-4">
              <div className="mb-3 space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-40" />
              </div>

              {/* Modifier Options Skeleton */}
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((optionIndex) => (
                  <div key={optionIndex} className="flex items-center space-x-2">
                    <Skeleton className="w-4 h-4 rounded" />
                    <div className="flex-1">
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}

          {/* Add-ons Skeleton */}
          <Card className="p-4">
            <div className="mb-3">
              <Skeleton className="h-6 w-24" />
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map((addOnIndex) => (
                <div key={addOnIndex} className="flex items-center space-x-2">
                  <Skeleton className="w-4 h-4 rounded" />
                  <div className="flex-1 flex justify-between items-center">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Remove Ingredients Skeleton */}
          <Card className="p-4">
            <div className="mb-3">
              <Skeleton className="h-6 w-40" />
            </div>
            <div className="space-y-2">
              {[1, 2].map((removalIndex) => (
                <div key={removalIndex} className="flex items-center space-x-2">
                  <Skeleton className="w-4 h-4 rounded" />
                  <Skeleton className="h-4 w-36" />
                </div>
              ))}
            </div>
          </Card>

          {/* Quantity and Total Skeleton */}
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <Skeleton className="h-4 w-16" />
              <div className="flex items-center space-x-2">
                <Skeleton className="w-8 h-8 rounded" />
                <Skeleton className="w-8 h-6" />
                <Skeleton className="w-8 h-8 rounded" />
              </div>
            </div>
            <div className="text-right space-y-1">
              <Skeleton className="h-4 w-10" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex gap-3">
            <Skeleton className="flex-1 h-10 rounded" />
            <Skeleton className="flex-1 h-10 rounded" />
          </div>
        </div>
  )
}
