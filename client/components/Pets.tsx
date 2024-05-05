import { pet1, pet2, pet3, pet4 } from './pet-class'

export default function Pets() {
  return (
    <>
      <h2>PETS!</h2>
      <ul>
        <li>
          {pet1.greet()}
          <br />
          {pet1.speak()}
        </li>
        <li>
          {pet2.greet()}
          <br />
          {pet2.speak()}
        </li>
        <li>
          {pet3.greet()}
          <br />
          {pet3.speak()}
        </li>
        <li>
          {pet4.greet()}
          <br />
          {pet4.speak()}
        </li>
      </ul>
    </>
  )
}
