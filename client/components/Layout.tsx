import { Outlet } from 'react-router-dom'
import App from './App'
import Parent from './Parent'

export default function Layout() {
  return (
    <>
      <header>
        <h1>Fullstack Boilerplateee</h1>
      </header>
      <main>
        <App />
        <Parent />
        <Outlet />
      </main>
      <footer></footer>
    </>
  )
}
