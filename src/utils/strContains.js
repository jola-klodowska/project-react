const strContain = (card, searchPhrase) => {
    if(card.toLowerCase().includes(searchPhrase.toLowerCase())){
        return card;
    };
}

export default strContain;