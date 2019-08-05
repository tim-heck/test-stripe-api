import { combineReducers } from 'redux';

const checkoutSession = (state = [], action) => {
    switch (action.type) {
        case 'SET_SESSION':
            return action.payload;
        default:
            return state;
    }
}

const merch = (state = [], action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
}

const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return action.payload;
        case 'CLEAR_CART':
            // console.log('clear cart:', action.payload);
            state = action.payload;
            return state;
        default:
            return state;
    }
}

// Create one store that all components can use
export default combineReducers({
    checkoutSession,
    merch,
    cart,
});