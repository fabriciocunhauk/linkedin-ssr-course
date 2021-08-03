import { createWrapper } from 'next-redux-wrapper';
import { createStore } from 'redux';
import data from './pages/API/data.json';

// Initial startState
const startState = {
    cards: []
};

// Actions

export const initialCards = () => {
    return {
        type: 'INITIALCARDS',
        cards: data
    }
};

// Reducers
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALCARDS':
            return {
                cards: action.cards,
            }
        default: return state
    }
}

// Create store
const store = (initialState = startState) => {
    return createStore(reducer, initialState);
};

export const initStore = createWrapper(store);