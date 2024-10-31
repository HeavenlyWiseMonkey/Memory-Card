import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MemoryCards from './components/MemoryCards'
import DifficultySelect from './components/DifficultySelect'

function App() {
  const [difficulty, setDifficulty] = useState();

  function handleDifficulty(e) {
    setDifficulty(e.target.value);
  }
  return (
    (!difficulty) ?
    <DifficultySelect handleDifficulty={handleDifficulty} /> :
    <>
      <Header />
      <MemoryCards difficulty={difficulty} />
    </>
  )
}

export default App
