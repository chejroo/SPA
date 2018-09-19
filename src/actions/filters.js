//SET_TEXT_FILTER

export const setTextFilter = (text = '') => ({    
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE

export const sortByDate = (dateType) => ({    
    type: 'SORT_BY_DATE',
    dateType
});

//SORT_BY_PRICE

export const sortByPrice = (priceType) => ({    
    type: 'SORT_BY_PRICE',
    priceType
});