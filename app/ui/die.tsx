import clsx from 'clsx'

interface DieProps {
  value: number;
  isHeld: boolean;
}

export default function Die(props: DieProps) {
  const dieClasses = clsx(
    "cursor-pointer size-12 rounded-md shadow-md text-2xl font-bold",
    props.isHeld ? 'bg-green-300' : 'bg-white')
  
  return (
    <button className={dieClasses}
    >{props.value}</button>  
  )
}
