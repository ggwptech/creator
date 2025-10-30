import { Button } from "@/components/ui/button"
import { Play, TrendingUp, Users, DollarSign, Youtube } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Youtube className="h-4 w-4" />
            </div>
            <span className="text-lg font-semibold">Creator CRM</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-8 px-4 py-24 text-center md:px-6 lg:py-32">
          {/* Logo/Icon */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
            <Play className="h-10 w-10 text-primary" fill="currentColor" />
          </div>

          {/* Heading */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Creator CRM
            </h1>
            <p className="text-pretty text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-2xl mx-auto">
              Manage your YouTube channels, track revenue, and grow your creator business all in one place
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid w-full max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:scale-105">
              <Users className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-base">Channel Management</h3>
              <p className="text-sm text-muted-foreground text-center">
                Manage multiple channels in one dashboard
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:scale-105">
              <DollarSign className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-base">Revenue Tracking</h3>
              <p className="text-sm text-muted-foreground text-center">
                Track earnings across all your channels
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:scale-105">
              <TrendingUp className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-base">Analytics</h3>
              <p className="text-sm text-muted-foreground text-center">
                Deep insights into your performance
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:scale-105">
              <Play className="h-10 w-10 text-primary" />
              <h3 className="font-semibold text-base">Video Insights</h3>
              <p className="text-sm text-muted-foreground text-center">
                Optimize your content strategy
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 flex flex-col gap-4 items-center">
            <Link href="/dashboard">
              <Button size="lg" className="h-14 px-10 text-lg font-semibold">
                Join Now
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Start managing your YouTube creator business today
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <p className="text-sm text-muted-foreground">
            © 2025 Creator CRM. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
