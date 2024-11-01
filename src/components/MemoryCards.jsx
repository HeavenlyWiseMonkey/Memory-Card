import {useState, useEffect} from 'react'
import getCardInfo from '../getCardInfo'
import '../styles/MemoryCards.css'

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
        // Pick a remaining element...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
  
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
}

function CardData(url, name) {
    return {url, name};
}

function Card({url, name, handleClick}) {
    let capitalizedName;
    (name) ? capitalizedName = name[0].toUpperCase() + name.slice(1) : capitalizedName = name;
    return <div className="card" onClick={() => handleClick(name)}>
        <img src={url} />
        <p>{capitalizedName}</p>
    </div>
}

function End({difficulty, score, handleEnd}) {
    let text;

    (difficulty==score) ? text = 'You win!' : text = 'You were overwhelmed by your defeat!';
    return <dialog className="end" open>
        <p>{text}</p>
        <p>Score: {score}</p>
        <button type="button" value="" onClick={(e) => handleEnd(e)}>Try again</button>
    </dialog>
}

export default function MemoryCards({difficulty, score, highScore, handleDifficulty, handleScore, handleHighScore}) {
    const [cardList, setCardList] = useState(Array.from({length: difficulty}, () => CardData('','')));
    const [seen, setSeen] = useState(new Set());
    const [status, setStatus] = useState(true);
    const [loading, setLoading] = useState(true);

    function handleClick(name) {
        if (status) {
            if (seen.has(name)) {
                if (score > highScore) handleHighScore(score);
                setStatus(false);
            }
            else {
                seen.add(name);
                setSeen(new Set(seen));
                handleScore(score+1);
            }
            shuffle(cardList);
        }
    }

    function handleEnd(e) {
        handleDifficulty(e);
        if (score > highScore) handleHighScore(score);
        handleScore(0);
    }

    const cards = cardList.map((data, i=0) =>
        <Card key={i++} url={data.url} name={data.name} handleClick={handleClick} />
    );

    useEffect(() => {
        getCardInfo(difficulty).then((data) => {
            const newCardList = data.map((info) => CardData(info.sprites.front_default, info.name));
            setCardList(newCardList);
            setLoading(false);
        });
    }, []);

    return <div className="memoryCards" id={(loading) && 'loading'}>
        {(loading) ? <p>Loading</p> : cards}
        {(difficulty==score || !status) && <End difficulty={difficulty} score={score} handleEnd={handleEnd} />}
    </div>
}