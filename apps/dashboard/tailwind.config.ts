import sharedConfig from "@rightbrainai/tailwind-config"

import type { Config } from "tailwindcss"

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.tsx", "../../packages/ui/components/**/*.{ts,tsx}"],
  presets: [sharedConfig],
}

export default config
