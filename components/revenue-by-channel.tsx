import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

const channelRevenue = [
  {
    name: "Tech Reviews Pro",
    avatar: "/tech-youtube-channel-logo.jpg",
    revenue: 15200,
    percentage: 23.5,
    growth: "+12%",
  },
  {
    name: "Gaming Central",
    avatar: "/gaming-youtube-channel-logo.jpg",
    revenue: 12800,
    percentage: 19.8,
    growth: "+8%",
  },
  {
    name: "Music Covers Studio",
    avatar: "/placeholder.svg?height=40&width=40",
    revenue: 9200,
    percentage: 14.2,
    growth: "+15%",
  },
  {
    name: "Cooking with Sarah",
    avatar: "/cooking-youtube-channel-logo.jpg",
    revenue: 8500,
    percentage: 13.1,
    growth: "+5%",
  },
  {
    name: "Fitness Journey",
    avatar: "/fitness-youtube-channel-logo.jpg",
    revenue: 6200,
    percentage: 9.6,
    growth: "+18%",
  },
  {
    name: "Travel Diaries",
    avatar: "/travel-youtube-channel-logo.jpg",
    revenue: 5800,
    percentage: 8.9,
    growth: "+7%",
  },
  {
    name: "DIY Home Projects",
    avatar: "/placeholder.svg?height=40&width=40",
    revenue: 4800,
    percentage: 7.4,
    growth: "+3%",
  },
  {
    name: "Comedy Sketches",
    avatar: "/placeholder.svg?height=40&width=40",
    revenue: 2100,
    percentage: 3.2,
    growth: "-12%",
  },
]

export function RevenueByChannel() {
  return (
    <div className="space-y-6">
      {channelRevenue.map((channel, index) => (
        <div key={index} className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={channel.avatar || "/placeholder.svg"} alt={channel.name} className="object-cover" />
                <AvatarFallback>
                  {channel.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{channel.name}</p>
                <p className="text-xs text-muted-foreground">{channel.percentage}% of total</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold">${channel.revenue.toLocaleString()}</p>
              <p className={`text-xs ${channel.growth.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                {channel.growth}
              </p>
            </div>
          </div>
          <Progress value={channel.percentage} className="h-2" />
        </div>
      ))}
    </div>
  )
}
