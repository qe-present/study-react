import { createStore } from 'redux';

const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        default:
            return state;
    }
};

const store = createStore(counterReducer);

const counterSubscriber = () => {
    const state = store.getState();
    console.log(state);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
document.getElementById('count').innerText = 'count:'+store.getState().count;