import { useFruits } from '../hooks/useFruits.ts'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
      </div>
    </>
  )
}

export default App
