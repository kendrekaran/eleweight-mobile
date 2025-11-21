import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import exerciseData from "@/app/exercise.json"

// Map the keys from exercise.json to display names and images
const categoryImages: Record<string, string> = {
  chest: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=150&q=80",
  back: "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=150&q=80",
  legs: "https://i.pinimg.com/736x/ba/c5/42/bac542e38bce99c4384398e9706bd029.jpg",
  shoulders: "https://i.pinimg.com/736x/13/0e/a2/130ea2df2f276e90b4c477590b756ae3.jpg",
  arms: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=150&q=80",
  core: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&q=80",
}

export function CategoryCarousel() {
  const categories = Object.keys(exerciseData.exercises).map((key) => ({
    id: key,
    name: key.charAt(0).toUpperCase() + key.slice(1),
    image: categoryImages[key] || "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=150&q=80",
  }))

  return (
    <div className="w-full overflow-x-auto pb-4 pt-2 scrollbar-hide snap-x will-change-scroll">
      <div className="flex gap-4 px-4 min-w-max">
        {categories.map((cat) => (
          <Link 
            href={`/category/${cat.id}`} 
            key={cat.id} 
            className="flex flex-col items-center gap-2 group cursor-pointer snap-start will-change-transform"
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-transparent group-hover:border-accent-blue group-active:scale-95 transition-all duration-200">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-xs font-medium text-muted-text group-hover:text-foreground transition-colors">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
