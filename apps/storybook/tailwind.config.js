import sharedConfig from "@rightbrainai/tailwind-config"

const config = {
  content: ["./src/**/*.tsx", "../../packages/ui/components/**/*.{ts,tsx}"],
  presets: [sharedConfig],
}

export default config
