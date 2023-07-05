import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle'
}

const heroesSlice = createSlice({
    name: 'heroes',
    initialState,
    reducers: {
        heroesFetching: state => {
            state.heroesLoadingStatus = 'loading'
        },
        heroesFetched: (state, action) => {
            state.heroes = action.payload;
            state.heroesLoadingStatus = 'idle';
        },
        heroesFetchingError: state => {
            state.heroesLoadingStatus = 'error';
        },
        heroesPosted: (state, action) => {
            state.heroes.push(action.payload);
            state.heroesLoadingStatus = 'idle';
        },
        heroesDeleted: (state, action) => {
            state.heroes = state.heroes.filter((hero) => hero.id !== action.payload);
        }
    }
});

const {actions, reducer} = heroesSlice;

export default reducer;

export const {
    heroesFetching,
    heroesFetched,
    heroesFetchingError,
    heroesPosted,
    heroesDeleted
} = actions;