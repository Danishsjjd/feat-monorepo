import Image from "next/image"

import { Button } from "@rightbrainai/ui/button"
import { Card } from "@rightbrainai/ui/card"

import logo from "./logo.svg"

function Gradient({ conic, className, small }: { small?: boolean; conic?: boolean; className?: string }): JSX.Element {
  return (
    <span
      className={`absolute rounded-[100%] mix-blend-normal will-change-[filter] ${
        small ? "blur-[32px]" : "blur-[75px]"
      } ${conic ? "bg-glow-conic" : ""} ${className}`}
    />
  )
}

const LINKS = [
  {
    title: "Docs",
    href: "#",
    description: "Find in-depth information.",
  },
  {
    title: "Learn",
    href: "#",
    description: "Learn more.",
  },
  {
    title: "Templates",
    href: "#",
    description: "Choose from over 15 examples.",
  },
]

export default function Page(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-800 bg-zinc-800/30 bg-gradient-to-b from-inherit px-4 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:bg-zinc-800/30 lg:p-4">
          @rightbrain/dashboard -&nbsp;
          <code className="font-mono font-bold">App</code>
        </p>
      </div>

      <div className="relative flex place-items-center ">
        <div className="relative z-0 flex w-auto flex-col items-center justify-between gap-8 pb-16 pt-[48px] font-sans md:pb-24 md:pt-16 lg:pb-32 lg:pt-20">
          <div className="z-50 flex w-full items-center justify-center">
            <div className="absolute min-h-[614px] min-w-[614px]">
              <Image alt="rightbrainai" src="circles.svg" height={614} width={614} />
            </div>
            <div className="absolute z-50 flex h-64 w-64 items-center justify-center">
              <Gradient className="h-[120px] w-[120px] opacity-90" conic small />
            </div>

            <div className="z-50 h-[120px] w-[120px]">
              <Image alt="" height={120} priority src={logo} width={120} />
            </div>
          </div>
          <Gradient className="top-[-500px] h-[1000px] w-[1000px] opacity-[0.15]" conic />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {LINKS.map(({ title, href, description }) => (
          <Card href={href} key={title} title={title}>
            {description}
          </Card>
        ))}
      </div>
    </main>
  )
}
