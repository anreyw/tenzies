'use client'

import dynamic from 'next/dynamic'

const Dice = dynamic(() => import('@/app/ui/dice'), { ssr: false })

export default function Home() {
  return (
    <main className="bg-zinc-100 size-4/5 rounded-lg flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Tenzies</h1>
      <Dice />
    </main>
  )
}
