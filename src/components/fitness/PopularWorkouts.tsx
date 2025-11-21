import * as React from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function PopularWorkouts() {
  return (
    <div className="px-4 space-y-4">
      <h2 className="text-xl font-semibold text-white">Most Popular</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Card 1 - Bench Press */}
        <Link href="/exercise/chest_01">
          <Card className="relative overflow-hidden border-0 aspect-[4/5] group cursor-pointer h-full will-change-transform active:scale-[0.98] transition-transform duration-200">
            <Image
              src="https://i.pinimg.com/originals/8e/34/bb/8e34bb41d30ceb2f65aa7873a87a4371.gif"
              alt="Bench Press"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-lg font-bold text-white leading-tight mb-1">
                Bench <br /> Press
              </h3>
              <p className="text-xs text-gray-300">Chest</p>
            </div>
          </Card>
        </Link>

        {/* Card 2 - Squat */}
        <Link href="/exercise/legs_01">
          <Card className="relative overflow-hidden border-0 aspect-[4/5] group cursor-pointer h-full will-change-transform active:scale-[0.98] transition-transform duration-200">
            <Image
              src="https://i.pinimg.com/originals/f3/7d/87/f37d87dddee5f2ce952034f12072f38a.gif"
              alt="Squat"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-lg font-bold text-white leading-tight mb-1">
                Barbell <br /> Squat
              </h3>
              <p className="text-xs text-gray-300">Legs</p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  )
}
