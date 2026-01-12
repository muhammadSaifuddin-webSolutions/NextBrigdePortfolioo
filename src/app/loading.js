import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gray-200">
        {/* Navigation Skeleton */}
        <nav className="absolute top-0 left-0 right-0 z-20 p-4 lg:p-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="w-12 h-12 lg:w-16 lg:h-16 rounded-full" />
              <div className="hidden sm:flex items-center gap-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
              </div>
            </div>

            {/* Desktop Navigation Skeleton */}
            <div className="hidden lg:flex items-center space-x-8">
              <Skeleton className="h-6 w-12" />
              <Skeleton className="h-6 w-12" />
              <Skeleton className="h-6 w-12" />
              <Skeleton className="h-6 w-16" />
            </div>

            <div className="flex items-center gap-3">
              <Skeleton className="h-9 w-20 hidden sm:block" />
              <Skeleton className="h-9 w-9 lg:hidden" />
            </div>
          </div>
        </nav>

        {/* Hero Content Skeleton */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <Skeleton className="h-4 w-32 mx-auto mb-4" />
          <Skeleton className="h-16 sm:h-20 lg:h-24 w-full max-w-4xl mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </section>

      {/* Features Banner Skeleton */}
      <section className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <Skeleton className="h-6 w-32 mx-auto mb-2" />
                <Skeleton className="h-4 w-48 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Skeleton className="h-8 w-64 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Skeleton className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <Skeleton className="h-4 w-24 mb-2" />
                    <Skeleton className="h-3 w-16" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Skeleton className="h-8 w-48 mx-auto mb-12" />

          {/* Category Tabs Skeleton */}
          <div className="flex justify-center mb-8">
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-10 w-20" />
              ))}
            </div>
          </div>

          {/* Menu Items Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-9 w-24" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Skeleton className="h-8 w-56 mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <Skeleton className="w-16 h-16 mx-auto mb-4 rounded-full" />
                <Skeleton className="h-6 w-32 mx-auto mb-2" />
                <Skeleton className="h-4 w-48 mx-auto mb-2" />
                <Skeleton className="h-4 w-40 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section Skeleton */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Skeleton className="h-8 w-48 mb-6" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-4 w-full mb-4" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <Skeleton className="h-10 w-32" />
            </div>
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <Skeleton className="h-6 w-24 mb-4 bg-gray-700" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32 bg-gray-700" />
                  <Skeleton className="h-4 w-28 bg-gray-700" />
                  <Skeleton className="h-4 w-36 bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8">
            <Skeleton className="h-4 w-64 mx-auto bg-gray-700" />
          </div>
        </div>
      </footer>
    </main>
  )
}
