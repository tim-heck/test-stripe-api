import { combineReducers } from 'redux';

const checkoutSession = (state = [], action) => {
    switch (action.type) {
        case 'SET_SESSION':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
export default combineReducers({
    checkoutSession,
});