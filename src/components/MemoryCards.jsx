import {useState, useEffect} from 'react'
import getCardInfo from '../getCardInfo'
import '../styles/MemoryCards.css'

function Card({url, name}) {
    return <div className="card">
        <img src={url} />
        <p>{name}</p>
    </div>
}

function CardData(url, name) {
    return {url, name};
}

export default function MemoryCards({difficulty}) {
    const [cardList, setCardList] = useState(Array.from({length: difficulty}, () => CardData('','')));

    const cards = cardList.map((data, i=0) =>
        <Card key={i++} url={data.url} name={data.name} />
    );

    useEffect(() => {
        getCardInfo(difficulty).then((data) => {
            const newCardList = data.map((info) => CardData(info.sprites.front_default, info.name));
            setCardList(newCardList);
        });
    }, []);

    return <div className="memoryCards">
        {cards}
    </div>
}