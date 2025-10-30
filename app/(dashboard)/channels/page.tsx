import { Topbar } from "@/components/topbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChannelsTable } from "@/components/channels-table"
import { Plus, Youtube, TrendingUp, Users, DollarSign } from "lucide-react"

const channelStats = [
  {
    title: "Total Channels",
    value: "8",
    description: "Active channels managed",
    icon: Youtube,
  },
  {
    title: "Total Subscribers",
    value: "4.8M",
    description: "Across all channels",
    icon: Users,
  },
  {
    title: "Monthly Revenue",
    value: "$64,800",
    description: "Combined earnings",
    icon: DollarSign,
  },
  {
    title: "Avg Growth",
    value: "+12.4%",
    description: "Subscriber growth rate",
    icon: TrendingUp,
  },
]

export default function ChannelsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Channel Management</h2>
            <p className="text-muted-foreground">Manage and monitor all your YouTube channels</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add New Channel
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {channelStats.map((stat, index) => (
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
            <CardTitle>All Channels</CardTitle>
            <CardDescription>
              View and manage all your YouTube channels with detailed metrics and performance data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChannelsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
