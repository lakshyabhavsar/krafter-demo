'use client'

import { SplineScene } from "./splite";
import { Card } from "./card"
import { Spotlight } from "./spotlight"
 
export function RobotSection() {
  return (
    <Card className="w-full h-[100vh] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        size={400}
        springOptions={{ bounce: 0.5, damping: 10 }}
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          AI is not future AI is present
          </h1>
          <p className="mt-2 text-sm md:mt-4 md:text-base text-neutral-300 max-w-lg">
          Either you are a individual or Organisation, develop an AI agent to match the pace of world.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
          
        </div>
      </div>
    </Card>
  )
}