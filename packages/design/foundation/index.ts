import StyleDictionaryModule from "style-dictionary"
import { makeSdTailwindConfig } from "sd-tailwindcss-transformer"

const PREFIX = "rb-"

const sdConfig = makeSdTailwindConfig({
  type: "all",
  formatType: "js",
  prefix: PREFIX,
  source: [`./tokens/**/*.json`],
  transforms: ["attribute/cti", "name/cti/kebab"],
  buildPath: `./build/`,
})

sdConfig.platforms["css"] = {
  prefix: PREFIX,
  transformGroup: "css",
  buildPath: "./build/styles/",
  files: [
    {
      destination: "tailwind.css",
      format: "css/variables",
    },
  ],
}

const StyleDictionary = StyleDictionaryModule.extend(sdConfig)
StyleDictionary.buildAllPlatforms()
