import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface Exercise {
  id: string
  name: string
  muscle: string
  gif_url: string
  description1: string
  description2: string
}

interface SearchResultsProps {
  results: Exercise[]
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-16 h-16 bg-secondary/30 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl">🔍</span>
        </div>
        <h3 className="text-lg font-semibold text-white mb-1">No exercises found</h3>
        <p className="text-muted-foreground text-sm">Try searching for a different muscle or exercise name.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold text-white">Search Results</h2>
        <span className="text-xs text-muted-foreground bg-secondary/30 px-2 py-1 rounded-full">
          {results.length} found
        </span>
      </div>
      
      <div className="grid gap-4">
        {results.map((exercise) => (
          <Card key={exercise.id} className="overflow-hidden border-white/5 bg-card/40 backdrop-blur-sm hover:bg-card/60 transition-all duration-300 group">
            <CardContent className="p-0 flex items-center h-24">
              <div className="w-24 h-24 relative shrink-0 bg-secondary/20 overflow-hidden">
                <Image 
                  src={exercise.gif_url} 
                  alt={exercise.name}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  unoptimized
                />
              </div>
              
              <div className="flex-1 px-4 py-2 flex flex-col justify-center">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-accent-blue transition-colors duration-300 line-clamp-1">
                      {exercise.name}
                    </h3>
                    <Badge variant="secondary" className="mt-1 text-[10px] h-5 bg-secondary/50 text-muted-foreground">
                      {exercise.muscle}
                    </Badge>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
