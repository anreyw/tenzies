'use client'

import Die from '@/app/ui/die'
import { useState, useEffect } from 'react'

// useEffect is needed to prevent a client-server mismatch that is
// caused by random number generator running before *and* after
// hydration.  I suspect that there is a better way of doing this that
// probably involves using the dynamic componenp import and no ssr.

export default function Home() {
  const [diceNums, setDiceNums] = useState([1,1,1,1,1,1,1,1,1,1,])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // This only runs on the client after hydration
    setDiceNums(generateNums())
    setIsClient(true)
  }, [])

  function generateNums() {
    return Array.from({length: 10}, item => Math.ceil(Math.random() * 5))
  }

  const dice = diceNums.map(num => (
    <Die value={num} />
  ))

  function handleClick() {
    setDiceNums(generateNums())
  }
  
  return (
    <main className="bg-zinc-100 size-4/5 rounded-lg flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Tenzies</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
	{dice}
      </div>
      <button onClick={handleClick} className="bg-indigo-600 px-6 py-2 rounded-lg text-white text-2xl">Roll</button>
    </main>
  )
}
