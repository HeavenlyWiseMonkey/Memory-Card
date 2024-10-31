export default function DifficultySelect({handleDifficulty}) {
    const easy = 6;
    const medium = 12;
    const hard = 18;
    return <div className="difficultySelect">
        <h1>Select Difficulty</h1>
        <button type="button" value={easy} onClick={(e) => handleDifficulty(e)}>Easy</button>
        <button type="button" value={medium} onClick={(e) => handleDifficulty(e)}>Medium</button>
        <button type="button" value={hard} onClick={(e) => handleDifficulty(e)}>Hard</button>
    </div>
}