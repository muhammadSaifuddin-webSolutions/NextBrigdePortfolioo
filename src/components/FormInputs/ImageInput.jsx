import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from "next/image"


export default function ImageInput({
  title,
  imageUrl,
  setImageUrl,
  endpoint,
  className,
  size = "lg",
}) {
  if (size == "sm") {
    return (
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-center">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            <Image
              alt={title}
              className={cn("h-20 w-full rounded-md object-cover", className)}
              height="500"
              src={imageUrl || "/placeholder.svg"}
              width="500"
            />
            <input
              type="url"
              placeholder="Enter image URL"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </CardContent>
      </Card>
    )
  }
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          <Image
            alt={title}
            className={cn("h-40 w-full rounded-md object-cover", className)}
            height="500"
            src={imageUrl || "/placeholder.svg"}
            width="500"
          />
          <input
            type="url"
            placeholder="Enter image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </CardContent>
    </Card>
  )
}
