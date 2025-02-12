import React, {useState}  from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
    
    return(

        <section id="counter" className="counter">
            <h1> Counter </h1>
            <p> {count}</p>
            <button onClick={() => setCount(count + 1)}> Increment </button>
            <button onClick={() => setCount(count - 1)}> Decrement </button>
        </section>


    );

}