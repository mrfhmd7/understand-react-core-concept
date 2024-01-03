import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mobile from './components/Device/Mobile'
import Watch from './components/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Mobile name="Xiaomi" price="13000"></Mobile>
      <Mobile name="Nokia" price="13000"></Mobile>
      <Watch></Watch>
    </>
  )
}

export default App
