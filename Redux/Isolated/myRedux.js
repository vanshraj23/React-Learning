const redux = require('redux');

const INITIAL_VALUE = {
    counter: 0
};

function reducer(state = INITIAL_VALUE,action) {
    const { type, payload } = action || {};
    switch (type) {
        case 'INCREMENT':
        return {counter: state.counter + 1};
            
        case 'DECREMENT':
        return {counter: state.counter - 1};
    
        case 'ADDITION':
        return {counter: state.counter + (payload?.number || 0)}    

        default:
        return state;
    }
}

function subscriber() {
    const state = store.getState();   
    console.log(state);
}

const store = redux.createStore(reducer);

store.subscribe(subscriber);

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'ADDITION', payload: {number: 7}});
store.dispatch({type: 'DECREMENT'});