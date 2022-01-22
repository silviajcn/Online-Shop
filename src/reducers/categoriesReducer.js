import { typesProducts } from '../types/types';

const initialState = {
    menus: []
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case typesProducts.menus:
            return {
                menus: [...action.payload]
            }
    
        default:
            return state;
    }
}