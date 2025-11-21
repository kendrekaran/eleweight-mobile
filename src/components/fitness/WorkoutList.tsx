import * as React from "react"
import Link from "next/link"
import { WorkoutCard } from "./WorkoutCard"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const workouts = [
  {
    title: "Huge Shoulders",
    count: 10,
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=150&q=80",
    hasAi: true,
    href: "/category/shoulders"
  },
  {
    title: "Pure Resilience",
    count: 5,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=150&q=80",
    hasAi: false,
    href: "/category/core"
  },
  {
    title: "Leg Day",
    count: 10,
    image: "https://i.pinimg.com/736x/ba/c5/42/bac542e38bce99c4384398e9706bd029.jpg",
    hasAi: false,
    href: "/category/legs"
  },
  {
    title: "Back Builder",
    count: 10,
    image: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=150&q=80",
    hasAi: false,
    href: "/category/back"
  },
]

export function WorkoutList() {
  return (
    <div className="px-4 pb-24">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-white">Getting Started Pack</h2>
        <Button variant="link" className="text-muted-text text-xs h-auto p-0 hover:text-white">
          View all <ArrowRight size={12} className="ml-1" />
        </Button>
      </div>
      
      <div className="flex flex-col">
        {workouts.map((workout, i) => (
          <Link href={workout.href} key={i}>
            <WorkoutCard {...workout} />
          </Link>
        ))}
      </div>
    </div>
  )
}
