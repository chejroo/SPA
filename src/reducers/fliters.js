const filtersReducerDefaultState = {
    text: '',
    sortBy: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.dateType
            }
        case 'SORT_BY_PRICE':
            return {
                ...state,
                sortBy: action.priceType
            }            
        default:
            return state;
    }
};