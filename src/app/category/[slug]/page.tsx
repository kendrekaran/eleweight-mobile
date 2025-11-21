import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from "lucide-react"
import exerciseData from "@/app/exercise.json"
import { Exercise, ExerciseData } from "@/types/exercise"

// Helper to get exercises safely
const getExercises = (slug: string): Exercise[] => {
  const data = exerciseData as ExerciseData
  return data.exercises[slug] || []
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const exercises = getExercises(slug)
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1)

  return (
    <main className="min-h-screen bg-background text-foreground pb-20 relative">
       {/* Background Gradients */}
       <div className="fixed top-0 left-0 w-full h-96 bg-gradient-to-b from-accent-blue/10 to-transparent pointer-events-none" />
       
       <div className="p-4 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-white">{categoryName} Exercises</h1>
        </div>

        {/* Exercise List */}
        <div className="grid grid-cols-1 gap-4">
          {exercises.map((exercise) => (
            <Link 
              href={`/exercise/${exercise.id}`} 
              key={exercise.id}
              className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/5 shrink-0">
                <Image
                  src={exercise.gif_url}
                  alt={exercise.name}
                  fill
                  className="object-cover"
                  unoptimized // GIFs might need this if external
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white truncate">{exercise.name}</h3>
                <p className="text-sm text-muted-text truncate">{exercise.muscle}</p>
              </div>
            </Link>
          ))}
          
          {exercises.length === 0 && (
            <div className="text-center py-10 text-muted-text">
              No exercises found for this category.
            </div>
          )}
        </div>
       </div>
    </main>
  )
}
