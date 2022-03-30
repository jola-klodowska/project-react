// selectors
export const getSearchPhrase = state => state.searchPhrase;

// actions
const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCHPHRASE = createActionName('UPDATE_SEARCHPHRASE');

// action creators
export const toUpdateSearchPhrase = payload => ({ type: UPDATE_SEARCHPHRASE, payload });
const searchPhraseReducer = (statePart = '', action) => {
    switch (action.type) {
        case UPDATE_SEARCHPHRASE:
            return action.payload
        default:
            return statePart;
    }
}

export default searchPhraseReducer;