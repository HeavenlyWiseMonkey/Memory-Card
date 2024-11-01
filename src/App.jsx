import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import MemoryCards from './components/MemoryCards'
import DifficultySelect from './components/DifficultySelect'

function App() {
  const [difficulty, setDifficulty] = useState();
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function handleDifficulty(e) {
    setDifficulty(e.target.value);
  }

  function handleScore(num) {
    setScore(num);
  }

  function handleHighScore() {
    setHighScore(score);
  }

  return (
    (!difficulty) ?
    <DifficultySelect handleDifficulty={handleDifficulty} /> :
    <>
      <Header score={score} highScore={highScore} />
      <MemoryCards difficulty={difficulty} score={score} highScore={highScore} handleDifficulty={handleDifficulty} handleScore={handleScore} handleHighScore={handleHighScore} />
    </>
  )
}

export default App
