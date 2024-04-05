import { useState } from 'react'
import Child from './Child'

export default function Parent() {
  const [parentValue, setParentValue] = useState<string>()

  function handleClick(value: string) {
    setParentValue(value)
  }

  return (
    <>
      <h1>PARENT!</h1>

      <>{parentValue && <p>{parentValue}</p>}</>

      <Child onClick={handleClick} />
    </>
  )
}
