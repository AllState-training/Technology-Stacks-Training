import React, { useState } from 'react'

function HookExample2() {

    let [count,setCount] = useState(0);

    let incrementCount = (prevState) =>{

        for(let i = 0 ; i < 5 ; i++){
            setCount(
                prevState => prevState + 1
            );
        }

    }

    return (
        <div>
            <h2>Hooks Exmple 2</h2>
            <button onClick={incrementCount}>
                Click Here
            </button>
            <h2>{count}</h2>
        </div>
    )
}

export default HookExample2
