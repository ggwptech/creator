import { Topbar } from "@/components/topbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Video, Eye, ThumbsUp, MessageSquare } from "lucide-react"

const videoStats = [
  {
    title: "Total Videos",
    value: "342",
    description: "Published across all channels",
    icon: Video,
  },
  {
    title: "Total Views",
    value: "15.8M",
    description: "Last 30 days",
    icon: Eye,
  },
  {
    title: "Total Likes",
    value: "1.2M",
    description: "Engagement metric",
    icon: ThumbsUp,
  },
  {
    title: "Comments",
    value: "84.5K",
    description: "Community interactions",
    icon: MessageSquare,
  },
]

export default function VideosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Video Management</h2>
            <p className="text-muted-foreground">Track and analyze video performance across all channels</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Upload Video
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {videoStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Videos</CardTitle>
            <CardDescription>Latest videos published across all your channels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-[300px] text-muted-foreground">
              Video management features coming soon
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
