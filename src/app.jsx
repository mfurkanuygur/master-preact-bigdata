import { useState } from 'preact/hooks'
import './app.css'
import Homepage from './components/Homepage'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage />
    </>
  )
}
