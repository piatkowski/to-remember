//createStore - deprecated. Use: npm install @reduxjs/toolkit react-redux


// npm install redux react-redux

//./src/store/index.js

import { createStore } from 'redux';
//import { legacy_createStore as createStore } from 'redux';

const reducer = (state = defaultState, action) => {
    //.... if(action.type === '...') {...}
    return state;
};

const store = createStore(reducer);


//./src/index.js

import { Provider } from 'react-redux';
import store from './store/index.js';
//... wrap in <Provider />
root.render(<Provider store={store}><App /></Provider>);



// get value in component
import { useSelector, useDispatch } from 'react-redux';
const counter = useSelector(state => state.counter);
const dispatch = useDispatch();

dispatch({type: 'increase', amount: 5});


/// ------ REDUX TOOLKIT ----------


// 1. Slices, reducers and configureStore

import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0},
    reducers: {
        increment: (state) => {
            state.counter++;
        },
        decrement: (state) => {
            state.counter--;
        },
        increase: (state, action) => {
            state.counter = state.counter + action.amount;
        }
    }
});


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
    // or reducer: counterSlice.reducer
});

export const counterActions = counterSlice.actions;
export default store;


//2. Dispatch

import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from "../store/index";

const Counter = () => {

    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
    };

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const increaseHandler = () => {
        dispatch(counterActions.increase(5));
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increment by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
