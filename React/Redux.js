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
