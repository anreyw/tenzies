import clsx from 'clsx'

interface DieProps {
  value: number;
  isHeld: boolean;
  hold: () => void;
}

export default function Die(props: DieProps) {
  const dieClasses = clsx(
    "cursor-pointer size-12 rounded-md shadow-md text-2xl font-bold",
    props.isHeld ? 'bg-green-300' : 'bg-white')
  
  return (
    <button
      className={dieClasses}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die with value ${props.value},
        ${props.isHeld ? "held" : "not held"}`}
    >
      {props.value}
    </button>  
  )
}
