import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-base font-bold shadow-xl ring-offset-background transition-all duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md bg-opacity-80",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 text-white border-none hover:from-blue-600 hover:to-purple-600 hover:shadow-blue-400/40 hover:scale-105",
        destructive:
          "bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-pink-600 hover:to-red-700 shadow-lg hover:shadow-pink-400/40 hover:scale-105",
        outline:
          "border-2 border-blue-400 bg-white/60 text-blue-700 hover:bg-blue-50 hover:text-blue-900 shadow hover:shadow-blue-200/40",
        secondary:
          "bg-gradient-to-r from-green-400 to-teal-500 text-white hover:from-teal-500 hover:to-green-400 shadow-lg hover:shadow-green-200/40 hover:scale-105",
        ghost: "bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700",
        link: "text-blue-600 underline underline-offset-4 hover:text-blue-800 hover:decoration-2",
      },
      size: {
        default: "h-12 px-8 py-2.5",
        sm: "h-10 rounded-xl px-5 text-sm",
        lg: "h-14 rounded-3xl px-12 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
) 
Button.displayName = "Button"

export { Button, buttonVariants }
