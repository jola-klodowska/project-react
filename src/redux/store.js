import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import strContain from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, searchPhrase }, columnId) => cards
    .filter(card => card.columnId === columnId && strContain(card.title, searchPhrase));
export const getAllColumns = state => state.columns;
export const getListById = ({ lists }, listId) => lists.find(list => list.id === listId);
export const getColumnsByList = ({ columns }, listId) => columns.filter(column => column.listId === listId)
export const getAllLists = state => state.lists;
export const getSearchPhrase = state => state.searchPhrase;

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload })
export const toUpdateSearchPhrase = payload => ({ type: 'UPDATE_SEARCHPHRASE', payload });
export const addList = payload => ({ type: 'ADD_LIST', payload });

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_COLUMN':
            return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] };
        case 'ADD_CARD':
            return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
        case 'UPDATE_SEARCHPHRASE':
            return { ...state, searchPhrase: action.payload };
        case 'ADD_LIST':
            return {...state, lists: [...state.lists, {...action.payload, id:shortid() }] };
        default:
            return state;
    }
};

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;