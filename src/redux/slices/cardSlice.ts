
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CardType = 'TRUTH_MODE' | 'MODE_OF_ACTION' | 'CALL_MODE';

export interface Card {
    id: number;
    text: string;
    type: CardType;
}

interface CardState {
    cards: Card[];
}

const initialState: CardState = {
    cards: [],
};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload);
        },
        removeCard: (state, action: PayloadAction<number>) => {
            state.cards = state.cards.filter(card => card.id !== action.payload);
        },
    },
});

export const { addCard, removeCard } = cardSlice.actions;
export default cardSlice.reducer;
