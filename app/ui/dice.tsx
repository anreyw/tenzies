'use client'

import Die from '@/app/ui/die'
import { useState } from 'react'
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function Dice() {
  const [diceNums, setDiceNums] = useState(() => generateNums())

  const gameWon = diceNums.every(die => die.isHeld)
    && diceNums.every(die => die.value === diceNums[0].value)
  
  function generateNums() {
    return Array.from({length: 10},
      () => ({
	value: Math.ceil(Math.random() * 6),
	isHeld: false,
	id: nanoid()
      })
    )
  }

  function rollDice() {
    if (gameWon) {
      setDiceNums(generateNums())
    } else {
      setDiceNums(prev => prev.map(die =>
	die.isHeld ? die : {
	  ...die,
	  value: Math.ceil(Math.random() * 6)
	}
      ))      
    }
  }
  
  // Flips the isHeld property on the die in diceNums
  function hold(id: string) {
    setDiceNums(prev => prev.map(die =>
      die.id === id? {...die, isHeld: !die.isHeld } : die
    ))
  }

  const dice = diceNums.map(die => (
    <Die
      value={die.value}
      isHeld={die.isHeld}
      key={die.id}
      hold={() => hold(die.id)}
    />
  ))

  return (
    <>
      {gameWon && <Confetti />}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
	{dice}
      </div>
      <button onClick={rollDice} className="bg-indigo-600 px-6 py-2 rounded-lg text-white text-2xl shadow-md">								{gameWon ? "New Game" : "Roll"}
      </button>
    </>
  )
}
