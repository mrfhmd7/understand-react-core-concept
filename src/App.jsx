import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mobile from './components/Device/Mobile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mobile name="Xiaomi" price="13000"></Mobile>
      <Mobile name="Nokia" price="13000"></Mobile>
    </>
  )
}

export default App
