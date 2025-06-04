import { createStore } from 'redux';

const INITIAL_VALUE = {counter: 0};

function counterReducer(state = INITIAL_VALUE,action) {
    const { type, payload } = action || {};
    switch(type) {
        case 'INCREMENT':
        return {counter : state.counter + (payload?.number || 0)};
        
        case 'DECREMENT':
        return {counter : state.counter - (payload?.number || 0)};
        
        case 'ADDITION':
        return {counter : state.counter + (payload?.number || 0)};

        case 'SUBSTRACTION':
        return {counter : state.counter - (payload?.number || 0)};
            
        default:
        return state;
    }
}

const counterStore = createStore(counterReducer);

export default counterStore;