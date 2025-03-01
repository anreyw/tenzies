interface DieProps {
  value: number;
}

export default function Die(props: DieProps) {
  return (
    <button className="cursor-pointer size-12 bg-white rounded-md shadow-md text-2xl font-bold">{props.value}</button>    
  )
}
