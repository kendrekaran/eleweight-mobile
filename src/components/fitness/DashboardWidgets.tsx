import * as React from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Flame, Target, Clock } from "lucide-react"

export function DashboardWidgets() {
  return (
    <div className="px-4 space-y-6 pb-24">
      {/* Calories Card */}
      <Card className="bg-card border-0 p-6 relative overflow-hidden">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 text-muted-text text-sm mb-1">
              <Flame className="text-accent-yellow w-4 h-4" />
              <span>Calories Burned</span>
            </div>
            <h3 className="text-foreground text-2xl font-bold">
              Your Daily <br /> Calories
            </h3>
          </div>
          <div className="text-right">
            <span className="text-3xl font-bold text-accent-yellow">3,250</span>
            <span className="text-xs text-muted-text ml-1">kcal</span>
          </div>
        </div>
        
        {/* Mock Progress Arc */}
        <div className="w-full h-4 bg-secondary/20 rounded-full overflow-hidden mt-4">
          <div className="w-[75%] h-full bg-accent-yellow rounded-full shadow-[0_0_10px_#D9FF3F]" />
        </div>
      </Card>

      {/* Today's Targets */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-foreground">Today&apos;s Targets</h2>
          <span className="text-xs text-muted-text">See All</span>
        </div>
        
        <div className="space-y-3">
          {[
            { title: "Deadlift", sets: "2 sets x 2 reps", icon: Target },
            { title: "Barbell Rows", sets: "3 sets x 10 reps", icon: Clock },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-card p-4 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent-yellow/20 flex items-center justify-center text-accent-yellow">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-medium">{item.title}</h4>
                  <p className="text-xs text-muted-text">{item.sets}</p>
                </div>
              </div>
              <Button size="sm" className="bg-transparent border border-border hover:bg-secondary/10 text-foreground text-xs h-8">
                Start Workout
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
