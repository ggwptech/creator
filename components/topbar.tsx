"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function Topbar() {
  return (
    <div className="flex items-center justify-between p-6 border-b bg-background">
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input placeholder="Search channels, videos, analytics..." className="pl-10" />
        </div>
      </div>
    </div>
  )
}
