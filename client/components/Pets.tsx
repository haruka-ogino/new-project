import { pet1, pet2, pet3, pet4 } from './pet-class'

export default function Pets() {
  // is it possible to do object oriented programming with a relational database? Where one table would hold the classes, another the class extensions, and another that holds the instances of these classes?
  // explore the above
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
          {pet4.greet()}
          <br />
          {pet4.speak()}
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
      </ul>
    </>
  )
}
