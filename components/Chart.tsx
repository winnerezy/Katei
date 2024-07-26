"use client"

import { useEffect, useMemo, useState } from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { useSelector } from "react-redux"

const chartConfig = {
  assignments: {
    label: "Assignments",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export const Chart = () => {

  const tasks: Task[] = useSelector((state: any) => state.tasks.tasks)

  const chartData = [
    { name: "tasks", assignments: tasks.length, fill: "var(--color-chrome)" },
    { name: "assignments", assignments: tasks.length, fill: "var(--color-safari)" }
  ]

  const totalAssignments = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.assignments, 0)
  }, [])

  return (
      <Card className="flex flex-col md:size-[300px] w-full">
          <CardHeader className="items-center pb-0">
          <CardTitle>Assignments</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 pb-0">
          <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[200px]"
          >
              <PieChart>
              <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                  data={chartData}
                  dataKey="assignments"
                  nameKey="assignments"
                  innerRadius={60}
                  strokeWidth={5}
              >
                  <Label
                  content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                          <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          >
                          <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-foreground text-3xl font-bold"
                          >
                              {totalAssignments}
                          </tspan>
                          <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                          >
                              Assignments
                          </tspan>
                          </text>
                      )
                      }
                  }}
                  />
              </Pie>
              </PieChart>
          </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col gap-2 text-sm">
          </CardFooter>
      </Card>
  )
}
