'use client'

import Die from '@/app/ui/die'
import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function Dice() {
  const [diceNums, setDiceNums] = useState(generateNums())

  function generateNums() {
    return Array.from({length: 10},
      () => ({
	value: Math.ceil(Math.random() * 5),
	isHeld: false,
	id: nanoid()
      })
    )
  }

  const dice = diceNums.map(die => (
    <Die value={die.value} key={die.id} />
  ))

  function handleClick() {
    setDiceNums(generateNums())
  }
  
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
	{dice}
      </div>
      <button onClick={handleClick} className="bg-indigo-600 px-6 py-2 rounded-lg text-white text-2xl">Roll</button>
    </>
  )
}
