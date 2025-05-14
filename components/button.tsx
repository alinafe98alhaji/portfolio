"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { ComponentProps } from "react";
import { cn } from "../lib/utils";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "sm" | "default" | "lg" | "icon";

type ButtonProps = ComponentProps<"button"> &
  HTMLMotionProps<"button"> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    isLoading?: boolean;
  };

export const Button = ({
  className,
  variant = "default",
  size = "default",
  isLoading = false,
  disabled = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
        variant === "default" &&
          "bg-primary text-primary-foreground hover:bg-primary/90",
        variant === "outline" &&
          "border border-input hover:bg-accent hover:text-accent-foreground",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        size === "sm" && "h-9 px-3 py-2",
        size === "default" && "h-10 px-4 py-2",
        size === "lg" && "h-12 px-8 py-4 text-base",
        size === "icon" && "h-10 w-10 p-2", // Square aspect ratio for icon buttons
        isLoading && "relative text-transparent",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading &&
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        </div>}
      {children}
    </motion.button>
  );
};
