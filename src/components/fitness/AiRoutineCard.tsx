import * as React from "react"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function AiRoutineCard() {
  return (
    <div className="px-4 py-2">
      <div className="relative w-full bg-accent-yellow rounded-2xl p-6 overflow-hidden shadow-lg shadow-accent-yellow/10">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10" />
        <div className="absolute bottom-0 left-10 w-24 h-24 bg-accent-blue/10 rounded-full blur-xl" />

        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h3 className="text-black font-bold text-lg max-w-[70%] leading-tight">
              Get My AI-Powered Routine
            </h3>
            <div className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded-lg text-[10px] font-bold text-black uppercase tracking-wider shadow-sm">
              Daily Workout
            </div>
          </div>

          <div className="flex items-center justify-between mt-2">
            <Button variant="default" className="bg-accent-blue text-white hover:bg-accent-blue/90 px-8 shadow-lg shadow-accent-blue/20">
              Start
            </Button>
            
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center backdrop-blur-sm border border-white/20">
                <Sparkles className="text-accent-blue w-6 h-6" />
              </div>
              <div className="absolute -top-1 -right-1 bg-accent-purple text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                AI
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
