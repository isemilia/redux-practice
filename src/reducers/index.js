const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    activeFilter: 'all',
    filteredHeroes: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_POSTED':
            return {
                ...state,
                heroes: [...state.heroes, action.payload],
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROES_DELETED': 
            return {
                ...state, 
                heroes: state.heroes.filter((hero) => hero.id !== action.payload)
            }
        case 'SET_ACTIVE_FILTER': 
            return {
                ...state, 
                activeFilter: action.payload
            }
        case 'FILTERS_FETCHING': 
            return {
                ...state, 
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHING_ERROR': 
            return {
                ...state, 
                filtersLoadingStatus: 'error'
            }
        case 'FILTERS_FETCHED': 
            return {
                ...state, 
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        default: return state
    }
}

export default reducer;