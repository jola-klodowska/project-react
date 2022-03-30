const searchPhraseReducer = (statePart = '', action) => {
    switch (action.type) {
        case 'UPDATE_SEARCHPHRASE':
            return action.payload
        default:
            return statePart;
    }
}

export default searchPhraseReducer;