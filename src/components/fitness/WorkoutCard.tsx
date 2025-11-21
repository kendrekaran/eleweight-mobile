import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

interface WorkoutCardProps {
  title: string
  count: number
  image: string
}

export function WorkoutCard({ title, count, image }: WorkoutCardProps) {
  return (
    <Card className="flex items-center p-3 gap-4 bg-card hover:bg-card-hover transition-colors border-0 group cursor-pointer mb-3">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-foreground font-semibold text-base truncate">{title}</h4>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="secondary" className="bg-secondary text-black rounded-sm hover:bg-secondary/80 text-xs font-normal">
            {count} exercises
          </Badge>
        </div>
      </div>

      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent-blue group-hover:text-white transition-colors">
        <ChevronRight size={16} className="text-black group-hover:text-white" />
      </div>
    </Card>
  )
}
