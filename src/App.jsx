import { useState } from 'react'
import WriteComponent from './Components/Write-Component/Write-Component'
import './App.css'
import Read from './Components/Write-Component/Read'
//import app from './FireBase-Config'
import Crud from './Write-Component/Crud'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <WriteComponent/>
      <Read/> */}
      <Crud></Crud>
    </>
  )
}

export default App
