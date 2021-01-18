import { useState } from 'react';

const Person = () =>{

    const [count, setCount] = useState(0);

    increment = () => {
        setCount(count = count + 1);
    }
    
    return (
        <>
            <div>Result: { count }</div>
            <button onClick={increment}>+</button>
        </>
    )
}

export default Person