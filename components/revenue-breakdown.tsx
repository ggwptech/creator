"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Ad Revenue", value: 52300, color: "hsl(var(--chart-1))" },
  { name: "Sponsorships", value: 9500, color: "hsl(var(--chart-2))" },
  { name: "Memberships", value: 2100, color: "hsl(var(--chart-3))" },
  { name: "Merchandise", value: 900, color: "hsl(var(--chart-4))" },
]

export function RevenueBreakdown() {
  return (
    <div className="space-y-4">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="rounded-lg border bg-background p-2 shadow-sm">
                    <div className="grid gap-2">
                      <div className="flex flex-col">
                        <span className="text-[0.70rem] uppercase text-muted-foreground">{payload[0].name}</span>
                        <span className="font-bold">${payload[0].value?.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )
              }
              return null
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid gap-4 md:grid-cols-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm font-medium">{item.name}</span>
            </div>
            <span className="text-sm font-bold">${item.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
