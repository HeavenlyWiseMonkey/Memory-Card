import '../styles/Header.css'

function ScoreCounter({score, highScore}) {
    return <div className="score">
        <h2>Score: {score}</h2>
        <h2>HighScore: {highScore}</h2>
    </div>
}

export default function Header({score, highScore}) {
    return <div className="header">
        <h1>Pokémon Memory Game</h1>
        <p>Increase Score by clicking on a card you haven't seen before.</p>
        <ScoreCounter score={score} highScore={highScore} />
    </div>
}