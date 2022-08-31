/**
*    useState  -  store one value or object
*/
import React, { useState } from 'react';

const Component = () => {
    const [value, setValue] = useState(0); // useState(defaultState)
  
    const someHandler = (e) => {
      setValue(e.target.value);
        
      // argument as function if new state depends on previous state
        
        setValue((prevState) => {
           //...
        });
    }
    
    return <input onChange={someHandler} value={value} />
};
  
  
  /**
  *   useEffect - do something when something changes, for example transition
  */
  
  import React, { useEffect } from 'react';
  
  const Component = () => {
      useEffect(() => {
        //do something
        //example: const timer = setTimeout(...)
        return () => {
          //clean up function
          //example: use clearTimeout(timer)
        }
      }, []); //the last argument [] means that useEffect is triggered once on load.
      //If [] is omitted the useEffect is triggered on every Component change
      // [someState] - useEffect is triggered only when "someState" changes
  };
  
  
  /**
  *   useContext  -  access context object from different components
  */
  
  // context file should be placed in src/store directory
  const MyContext = React.Context({
    someValue: 0,
    someFunction: (param) => {}
  });
  
  // Context Provider
  const MyContextProvider = (props) => {
 
    const someFunctionHandler = (param) => {
      //dispatchSomething(...)
    };
    const context = {
        someValue: someState.value, // useState
        someFunction: someFunctionHandler
    }
    
    return <MyContext.Provider value={context}>{props.children}</MyContext.Provider>
  };
  
  // !! Wrap <App> in <MyContextProvider>...</MyContextProvider> in App.js
  
  
  
  
  /**
  *  useReducer  -  as useState alternative
  */
  
  const initialState = {someValue: 0};
  
  const reducer = (state, action) => {
      if(action.type === '...') {
        //return state object {someValue: ...}
      }
  };
  
  const Component = () => {
      const [currentState, dispatch] = useReducer(reducer, initialState);
    
      return (
        <>
          <span>{currentState.someValue}</span>
          <button onClick={() => dispatch({type: 'inc'})}>+</button>
          <button onClick={() => dispatch({type: 'dec'})}>-</button>
        </>
      );
  };


/**
*   useRef - reference to DOM object
*/

const inputRef = useRef(initialValue);
// get input value:  inputRef.current.value
return <input ref={inputRef} />
  
// or
  
return <SomeComponent ref={someRef} />
//and then forward ref in Component
const SomeComponent = React.forwardRef((props, ref) => {});



/**
*    React.memo - used when the Component returns the same DOM when props are the same. Performance optimization
*/

//IT DOES NOT WORK WITH FUNCTIONS IN PROPS (i.e. onClick={buttonHandler})
//just wrap at the export
export default React.memo(MyComponent);
