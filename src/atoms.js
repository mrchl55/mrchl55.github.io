import {atom} from "recoil";
const localStorageEffect = key => ({setSelf, onSet}) => {
    const savedValue = localStorage.getItem(key)
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }

    onSet((newValue, _, isReset) => {
        isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue));
    });
};


export const genresState = atom({
    key: 'genresState',
    default: '',
})
export const yearsState = atom({
    key: 'yearsState',
    default: 0,
})
export const sortByState = atom({
    key: 'sortByState',
    default: '',
})
export const favoritesState = atom({
    key: 'favoritesState',
    default: [],
    effects: [
        localStorageEffect('favoritesState'),
    ]
})
export const watchListState = atom({
    key: 'watchListState',
    default: [],
    effects: [
        localStorageEffect('watchListState'),
    ]
})
export const movies = atom({
    key: "movies",
    default: [],
});

export const searchQueryState = atom({
    key: 'searchQuery',
    default: '',
});

export const moviesFiltersState = atom({
    key: 'moviesFiltersState',
    default: '',
});

