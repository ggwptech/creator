import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentChannels() {
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/tech-youtube-channel-logo.jpg" alt="Tech Reviews Pro" className="object-cover" />
          <AvatarFallback>TR</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Tech Reviews Pro</p>
          <p className="text-sm text-muted-foreground">850K subscribers</p>
        </div>
        <div className="ml-auto font-medium">+$15,200</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/gaming-youtube-channel-logo.jpg" alt="Gaming Central" className="object-cover" />
          <AvatarFallback>GC</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Gaming Central</p>
          <p className="text-sm text-muted-foreground">1.2M subscribers</p>
        </div>
        <div className="ml-auto font-medium">+$12,800</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/cooking-youtube-channel-logo.jpg" alt="Cooking with Sarah" className="object-cover" />
          <AvatarFallback>CS</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Cooking with Sarah</p>
          <p className="text-sm text-muted-foreground">450K subscribers</p>
        </div>
        <div className="ml-auto font-medium">+$8,500</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/fitness-youtube-channel-logo.jpg" alt="Fitness Journey" className="object-cover" />
          <AvatarFallback>FJ</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Fitness Journey</p>
          <p className="text-sm text-muted-foreground">320K subscribers</p>
        </div>
        <div className="ml-auto font-medium">+$6,200</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/travel-youtube-channel-logo.jpg" alt="Travel Diaries" className="object-cover" />
          <AvatarFallback>TD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Travel Diaries</p>
          <p className="text-sm text-muted-foreground">580K subscribers</p>
        </div>
        <div className="ml-auto font-medium">+$5,800</div>
      </div>
    </div>
  )
}
