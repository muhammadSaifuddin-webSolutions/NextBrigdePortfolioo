"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"



export default function VideoPlayer({
  videoUrl,
  thumbnailImage,
  title = "Watch Our Video",
  description,
}) {
  const [isPlaying, setIsPlaying] = useState(false)

  // Extract YouTube video ID from various URL formats
  const getYouTubeId = (url) => {
    if (!url) return null
    const patterns = [/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/, /youtube\.com\/embed\/([^&\n?#]+)/]
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    return null
  }

  const youtubeId = videoUrl ? getYouTubeId(videoUrl) : null

  if (!videoUrl && !youtubeId) {
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-2xl flex items-center justify-center">
        <p className="text-gray-500">No video available</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      {isPlaying && youtubeId ? (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors z-10"
            aria-label="Close video"
          >
            <X size={24} className="text-black" />
          </button>
        </div>
      ) : (
        <div
          className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          {thumbnailImage && (
            <img
              src={thumbnailImage || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
          {!thumbnailImage && youtubeId && (
            <img
              src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback to lower resolution if maxresdefault fails
                ;(e.target).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
              }}
            />
          )}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 p-6 rounded-full hover:bg-white transition-colors transform group-hover:scale-110">
              <Play size={40} fill="currentColor" className="text-red-600" />
            </div>
          </div>
        </div>
      )}
      {description && <p className="mt-4 text-sm text-gray-600">{description}</p>}
    </div>
  )
}
