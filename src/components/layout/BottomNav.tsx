"use client"

import * as React from "react"
import { Home, Dumbbell, Activity, Calendar, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function BottomNav() {
  const [activeTab, setActiveTab] = React.useState("home")

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "workouts", icon: Dumbbell, label: "Workouts" },
    { id: "progress", icon: Activity, label: "Progress" },
    { id: "schedule", icon: Calendar, label: "Schedule" },
    { id: "profile", icon: User, label: "Profile" },
  ]

  return (
    <div 
      className="bg-background/95 backdrop-blur-xl border-t border-white/5 px-6 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] will-change-transform"
      style={{
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
      }}
    >
      <div className="flex items-center justify-between max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center gap-1 relative group will-change-transform active:scale-95 transition-transform"
              aria-label={item.label}
            >
              <div
                className={cn(
                  "p-2 rounded-full transition-all duration-300",
                  isActive
                    ? "text-accent-yellow drop-shadow-[0_0_8px_rgba(217,255,63,0.5)]"
                    : "text-muted-text group-hover:text-white"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              {isActive && (
                <span className="absolute -bottom-2 w-1 h-1 bg-accent-yellow rounded-full shadow-[0_0_5px_#D9FF3F]" />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}
