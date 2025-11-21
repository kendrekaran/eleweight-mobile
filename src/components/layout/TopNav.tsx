"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"

interface TopNavProps {
  activeTab: "gym" | "home"
  onTabChange: (tab: "gym" | "home") => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function TopNav({ searchQuery = "", onSearchChange }: TopNavProps) {
  return (
    <div className="flex items-center px-4 py-4 bg-background/95 backdrop-blur-xl border-b border-white/5 shadow-lg will-change-transform">
      <div className="relative w-full max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <Input 
          value={searchQuery}
          placeholder="Search for any exercise..." 
          className="pl-10 pr-10 border-gray-600 focus:bg-background transition-all duration-300 rounded-full"
          onChange={(e) => onSearchChange?.(e.target.value)}
        />
        {searchQuery && (
          <button 
            onClick={() => onSearchChange?.("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors active:scale-95"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
