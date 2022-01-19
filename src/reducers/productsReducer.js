import { types } from "../types/types";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.register:
            return {
                products: [action.payload]
            }
        
        case types.list:
            return {
                products: [...action.payload]
            }
        case types.detail:
            return {
                products: action.payload
            }
        
        case types.delete:
            return {
                ...state
            }
        
        case types.search:
            return {
                products: action.payload
            }
    
        default:
            return state;
    }
}