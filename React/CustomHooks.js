// file: src/hooks/use-counter.js

import {useState, useEffect} from 'react';

//name of custom hook must start with "use"
const useCounter = () => {
    
    // custom hook shares logic, not states
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prevCounter) => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    //hook returns some value, in this case value of "counter"
    return counter;
  
};
export default useCounter;



// Usage in component

const counter = useCounter();
return <Card>{counter}</Card>
