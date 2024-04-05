import { useState } from 'react'

type Props = {
  onClick: (value: string) => void
}

export default function Child({ onClick }: Props) {
  const [childValue, setChildValue] = useState<string>('hello mum')

  return (
    <>
      <p>CHILD!</p>
      <button onClick={() => onClick(childValue)}>Click me!</button>
    </>
  )
}
