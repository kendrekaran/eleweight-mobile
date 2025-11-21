import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, PlayCircle } from "lucide-react"
import exerciseData from "@/app/exercise.json"
import { Exercise, ExerciseData } from "@/types/exercise"
import { Button } from "@/components/ui/button"

// Helper to find exercise by ID
const findExercise = (id: string): Exercise | undefined => {
  const data = exerciseData as ExerciseData
  for (const category in data.exercises) {
    const found = data.exercises[category].find((ex: Exercise) => ex.id === id)
    if (found) return found
  }
  return undefined
}

export default async function ExercisePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const exercise = findExercise(id)

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center text-muted-text">
        Exercise not found
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background text-foreground pb-20 relative">
      {/* Header Image/GIF Area */}
      <div className="relative w-full aspect-square max-h-[50vh] bg-white/5">
        <Image
            src={exercise.gif_url}
            alt={exercise.name}
            fill
            className="object-contain"
            unoptimized
        />
        <div className="absolute top-4 left-4">
             <Link href="/" className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-colors inline-flex">
                <ChevronLeft className="w-6 h-6" />
             </Link>
        </div>
      </div>

      <div className="p-6 space-y-6 -mt-6 relative bg-background rounded-t-3xl border-t border-white/10">
        <div className="space-y-2">
            <div className="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue text-xs font-medium">
                {exercise.muscle}
            </div>
            <h1 className="text-3xl font-bold text-white">{exercise.name}</h1>
        </div>

        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Instructions</h2>
            <div className="space-y-4 text-muted-text leading-relaxed">
                <div className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-bold text-white shrink-0">1</div>
                    <p>{exercise.description1}</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-white/10 text-xs font-bold text-white shrink-0">2</div>
                    <p>{exercise.description2}</p>
                </div>
            </div>
        </div>

        <div className="pt-4">
            <Button className="w-full h-12 text-lg font-semibold bg-accent-blue hover:bg-accent-blue/90 text-white rounded-xl shadow-lg shadow-accent-blue/20">
                <PlayCircle className="w-5 h-5 mr-2" />
                Start Exercise
            </Button>
        </div>
      </div>
    </main>
  )
}
