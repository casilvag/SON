"use client"

import type * as React from "react"
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

interface ExtendedThemeProviderProps extends Omit<ThemeProviderProps, "children"> {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ExtendedThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
