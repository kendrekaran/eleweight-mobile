"use client"

import * as React from "react"
import { TopNav } from "@/components/layout/TopNav"
import { BottomNav } from "@/components/layout/BottomNav"
import { MobileOnly } from "@/components/layout/MobileOnly"
import { CategoryCarousel } from "@/components/fitness/CategoryCarousel"
import { PopularWorkouts } from "@/components/fitness/PopularWorkouts"
import { AiRoutineCard } from "@/components/fitness/AiRoutineCard"
import { WorkoutList } from "@/components/fitness/WorkoutList"
import { DashboardWidgets } from "@/components/fitness/DashboardWidgets"

import exerciseData from "./exercise.json"
import { SearchResults } from "@/components/fitness/SearchResults"

export default function Home() {
  const [activeTab, setActiveTab] = React.useState<"gym" | "home">("gym")
  const [searchQuery, setSearchQuery] = React.useState("")
  const scrollContainerRef = React.useRef<HTMLDivElement>(null)

  // Filter exercises based on search query
  const filteredExercises = React.useMemo(() => {
    if (!searchQuery.trim()) return []
    
    const query = searchQuery.toLowerCase()
    const allExercises = Object.values(exerciseData.exercises).flat()
    
    return allExercises.filter(ex => 
      ex.name.toLowerCase().includes(query) || 
      ex.muscle.toLowerCase().includes(query)
    )
  }, [searchQuery])

  // Scroll to top when changing tabs or search
  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [activeTab, searchQuery])

  return (
    <MobileOnly>
      <main className="fixed inset-0 flex flex-col bg-background text-foreground overflow-hidden">
        {/* Fixed Top Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 will-change-transform">
          <TopNav 
            activeTab={activeTab} 
            onTabChange={setActiveTab} 
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* Scrollable Content Area */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth will-change-scroll"
          style={{
            paddingTop: '80px', // Space for fixed header
            paddingBottom: '80px', // Space for fixed footer
            WebkitOverflowScrolling: 'touch',
          }}
        >
          <div className="max-w-md mx-auto space-y-6 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {searchQuery ? (
              <SearchResults results={filteredExercises} />
            ) : (
              activeTab === "gym" ? (
                <>
                  <CategoryCarousel />
                  <PopularWorkouts />
                  <AiRoutineCard />
                  <WorkoutList />
                </>
              ) : (
                <DashboardWidgets />
              )
            )}
          </div>
        </div>

        {/* Fixed Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 z-50 will-change-transform">
          <BottomNav />
        </div>
      </main>
    </MobileOnly>
  )
}
