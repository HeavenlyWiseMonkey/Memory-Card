async function getData(num) {
    const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }

        const json = await response.json();
        return json;
    }
    catch(error) {
        console.error(error.message);
    }
}

function getNew(seen) {
    const num = Math.floor((Math.random()*1025)+1);
    if (seen.has(num)) {
        return getNew(seen);
    }
    seen.add(num);
    return num;
}

export default async function getCardInfo(difficulty) {
    const cards = [];
    const seen = new Set();
    for (let i=0; i<difficulty; i++) {
        let num = getNew(seen);
        let data = await getData(num);
        cards.push(data);
    }
    return cards;
}