import { shadcnPlugin } from "./shadcn-plugin"

import typographyPlugin from "@tailwindcss/typography"
import type { Config } from "tailwindcss"
import animatePlugin from "tailwindcss-animate"

export const shadcnPreset = {
  content: [],
  plugins: [animatePlugin, typographyPlugin, shadcnPlugin],
} satisfies Config
