import Image from "next/image"
import { Card } from "@/components/ui/card"

export function ProfileCard() {
  return (
    <Card className="relative overflow-hidden border-border">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/profile-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/90 via-card/70 to-card/50" />
      </div>

      {/* Content */}
      <div className="relative flex items-center gap-5 p-6">
        {/* Profile Photo */}
        <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-border">
          <Image
            src="/james-headshot.jpg"
            alt="James Edington"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Name and Title */}
      <div className="text-center md:text-left space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                  James Edington
                </h1>
<p className="text-xl text-slate-300 font-medium">
                  Sales Director & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">AI Architect</span>
</p>
              </div>
      </div>
    </Card>
  )
}
