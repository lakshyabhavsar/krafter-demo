"use client"

import * as React from "react"

import { motion } from "framer-motion"
import {  clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Button } from "./button"
import Link from "next/link"

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  gradient?: boolean
  blur?: boolean
  title: string
  subtitle?: string
  actions?: Array<{
    label: string
    href: string
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  }>
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={twMerge(clsx(
          "relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black py-16 md:py-24",
          className,
        ))}
        {...props}
      >
        {gradient && (
          <motion.div 
            className="absolute top-0 isolate z-0 flex w-screen flex-1 items-start justify-center bg-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            {/* Main glow */}
            <motion.div 
              className="absolute inset-auto z-50 h-24 md:h-36 w-[16rem] md:w-[28rem] -translate-y-[10%] rounded-full bg-white opacity-90 blur-3xl"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 0.9 }}
              viewport={{ once: false }}
              transition={{ duration: 1.2 }}
            />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: "6rem", opacity: 0 }}
              whileInView={{ width: "12rem", opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="absolute top-0 z-30 h-24 md:h-36 translate-y-[10%] rounded-full bg-white blur-2xl"
            />

            {/* Top line */}
            <motion.div 
              initial={{ width: "10rem", opacity: 0 }}
              whileInView={{ width: "20rem", opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.8, delay: 0.5 }}
              className="absolute inset-auto z-50 h-1 -translate-y-[-10%] bg-white"
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "10rem" }}
              whileInView={{ opacity: 1, width: "20rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-40 md:h-56 overflow-visible w-[20rem] md:w-[30rem] bg-gradient-conic from-white via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: "10rem" }}
              whileInView={{ opacity: 1, width: "20rem" }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-40 md:h-56 w-[20rem] md:w-[30rem] bg-gradient-conic from-transparent via-transparent to-white [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </motion.div>
        )}

        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: "easeInOut", delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-8 mt-24"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <h3
              className={twMerge(clsx(
                "text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-20 tracking-tight text-white dark:text-white",
                titleClassName,
            ))}
            >
              {title}
            </h3>
            {subtitle && (
              <p
                className={twMerge(clsx(
                  "text-xl text-gray-300 dark:text-gray-300",
                  subtitleClassName,
                ))}
              >
                {subtitle}
              </p>
            )}
            
            <div className="flex flex-col items-center justify-center gap-8 mt-8 mb-3">
              <div className="w-full flex justify-center">
                <img 
                  src="images/home/man.gif" 
                  alt="Hero" 
                  className="w-[200px] h-auto rounded-lg shadow-xl object-contain"
                />
              </div>
              <div className="flex flex-col items-center gap-4">
                {actions && actions.length > 0 && (
                  <div className={twMerge(clsx("flex gap-4", actionsClassName))}>
                    {actions.map((action, index) => (
                      <Button
                        key={index}
                        variant={action.variant || "default"}
                        asChild
                      >
                        <Link href={action.href}>{action.label}</Link>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    )
  }
)
Hero.displayName = "Hero"

export { Hero }
