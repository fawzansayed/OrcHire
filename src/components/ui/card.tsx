import * as React from "react";
import { motion } from "motion/react";
import { cn } from "./utils";

const Card = React.forwardRef<
  HTMLDivElement, 
  React.ComponentProps<"div"> & {
    variant?: "default" | "glass" | "dark-glass" | "premium-glass" | "apple-glass"
    interactive?: boolean
  }
>(({ className, variant = "default", interactive = false, ...props }, ref) => {
  const baseClasses = "flex flex-col gap-6 rounded-xl transition-all duration-300 relative overflow-hidden"
  
  const variantClasses = {
    default: "bg-card text-card-foreground border hover:shadow-xl shadow-lg",
    glass: "bg-white/40 backdrop-blur-sm border border-white/30 text-gray-800 hover:shadow-2xl shadow-lg",
    "dark-glass": "bg-black/20 backdrop-blur-md border border-white/10 text-white hover:shadow-2xl shadow-black/20 shadow-lg",
    "premium-glass": "bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-2xl shadow-black/10 hover:shadow-black/20",
    "apple-glass": `
      bg-card/20 backdrop-blur-xl
      border border-border/20
      shadow-[0_8px_32px_rgba(0,0,0,0.1)]
      dark:bg-card/10 dark:backdrop-blur-xl
      dark:border-white/10
      dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),0_1px_0_rgba(255,255,255,0.05)_inset,0_-1px_0_rgba(0,0,0,0.1)_inset]
      hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)]
      dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.4),0_1px_0_rgba(255,255,255,0.08)_inset,0_-1px_0_rgba(0,0,0,0.15)_inset]
      hover:scale-[1.02] hover:-translate-y-1
    `
  }
  
  const CardComponent = interactive ? motion.div : "div"
  const motionProps = interactive ? {
    whileHover: { scale: 1.02, y: -4 },
    transition: { type: "spring", stiffness: 300, damping: 20 }
  } : {}

  return (
    <>
      <CardComponent
        data-slot="card"
        className={cn(baseClasses, variantClasses[variant], className)}
        ref={ref}
        {...motionProps}
        {...props}
      >
        {/* Apple-style glass reflection - only for apple-glass variant */}
        {variant === "apple-glass" && (
          <>
            {/* Top glass reflection */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent dark:via-white/10" />
            
            {/* Left glass reflection */}
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent dark:via-white/10" />
            
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent dark:from-white/[0.04] rounded-xl pointer-events-none" />
            
            {/* Content container */}
            <div className="relative z-10 h-full w-full">
              {props.children}
            </div>
          </>
        )}
        
        {/* For non-apple-glass variants, render children normally */}
        {variant !== "apple-glass" && props.children}
      </CardComponent>
    </>
  )
})

Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        data-slot="card-header"
        className={cn(
          "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, React.ComponentProps<"h4">>(
  ({ className, ...props }, ref) => {
    return (
      <h4
        data-slot="card-title"
        className={cn("leading-none", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.ComponentProps<"p">>(
  ({ className, ...props }, ref) => {
    return (
      <p
        data-slot="card-description"
        className={cn("text-muted-foreground", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardDescription.displayName = "CardDescription";

const CardAction = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        data-slot="card-action"
        className={cn(
          "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

CardAction.displayName = "CardAction";

const CardContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        data-slot="card-content"
        className={cn("px-6 [&:last-child]:pb-6", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => {
    return (
      <div
        data-slot="card-footer"
        className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

CardFooter.displayName = "CardFooter";

// Premium Glassmorphism Card Component inspired by the provided design
const GlassCard = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    size?: "sm" | "md" | "lg" | "xl"
    interactive?: boolean
    darkMode?: boolean
  }
>(({ className, size = "md", interactive = true, darkMode = false, children, ...props }, ref) => {
  const sizeClasses = {
    sm: "p-4 rounded-xl min-h-[120px]",
    md: "p-6 rounded-2xl min-h-[160px]", 
    lg: "p-8 rounded-3xl min-h-[200px]",
    xl: "p-12 rounded-3xl min-h-[240px]"
  }
  
  const baseStyle = darkMode 
    ? "bg-black/40 backdrop-blur-xl border border-white/10 text-white shadow-2xl shadow-black/20"
    : "bg-white/30 backdrop-blur-xl border border-white/40 text-gray-800 shadow-2xl shadow-black/10"
    
  const CardComponent = interactive ? motion.div : "div"
  const motionProps = interactive ? {
    whileHover: { 
      scale: 1.02, 
      y: -2,
      boxShadow: darkMode 
        ? "0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(255, 255, 255, 0.1)"
        : "0 35px 60px -12px rgba(0, 0, 0, 0.15), 0 0 20px rgba(59, 130, 246, 0.1)"
    },
    transition: { type: "spring", stiffness: 300, damping: 20 }
  } : {}

  return (
    <CardComponent
      ref={ref}
      className={cn(baseStyle, sizeClasses[size], "relative overflow-hidden group", className)}
      {...motionProps}
      {...props}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-inherit opacity-60" />
      
      {/* Inner glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-teal-400/10 rounded-inherit opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </CardComponent>
  )
})
GlassCard.displayName = "GlassCard"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  GlassCard,
};