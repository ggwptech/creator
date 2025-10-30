import { Topbar } from "@/components/topbar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { RevenueChart } from "@/components/revenue-chart"
import { RevenueByChannel } from "@/components/revenue-by-channel"
import { RevenueBreakdown } from "@/components/revenue-breakdown"
import { DollarSign, TrendingUp, CreditCard, Wallet } from "lucide-react"

const revenueStats = [
  {
    title: "Total Revenue",
    value: "$64,800",
    description: "+18.2% from last month",
    icon: DollarSign,
  },
  {
    title: "Ad Revenue",
    value: "$52,300",
    description: "80.7% of total revenue",
    icon: CreditCard,
  },
  {
    title: "Sponsorships",
    value: "$9,500",
    description: "14.7% of total revenue",
    icon: Wallet,
  },
  {
    title: "Revenue Growth",
    value: "+24.5%",
    description: "Year over year growth",
    icon: TrendingUp,
  },
]

export default function RevenuePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Revenue Analytics</h2>
            <p className="text-muted-foreground">Track and analyze revenue across all channels</p>
          </div>
          <CalendarDateRangePicker />
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="by-channel">By Channel</TabsTrigger>
            <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
            <TabsTrigger value="projections">Projections</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {revenueStats.map((stat, index) => (
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
                <CardTitle>Revenue Trend</CardTitle>
                <CardDescription>Monthly revenue performance over the last 12 months</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <RevenueChart />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="by-channel" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue by Channel</CardTitle>
                <CardDescription>Compare revenue performance across all your channels</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueByChannel />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="breakdown" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Breakdown</CardTitle>
                <CardDescription>Detailed breakdown of revenue sources and categories</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueBreakdown />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projections" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Projections</CardTitle>
                <CardDescription>Forecasted revenue based on current trends and historical data</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-[300px] text-muted-foreground">
                  Revenue projection features coming soon
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
