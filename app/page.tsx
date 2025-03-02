'use client'

import dynamic from 'next/dynamic'

const Dice = dynamic(() => import('@/app/ui/dice'), { ssr: false })

export default function Home() {
  return (
    <main className="bg-zinc-100 p-12 rounded-lg flex flex-col items-center justify-center gap-8 max-w-4/5">
      <h1 className="text-3xl font-bold">Tenzies</h1>
      <p className="text-xl max-w-md text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <Dice />
    </main>
  )
}
