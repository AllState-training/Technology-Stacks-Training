import React, { useState } from 'react'

function HookExample1() {

    // console.log(useState('banana'));
   let[fruitName,setFruitName] = useState('banana');

   let changeFruitName = () =>{
        if(fruitName === 'banana')
        {
            setFruitName(
                fruitName = 'apple'
            )
        }else{
            setFruitName(
                fruitName = 'banana'
            )
        }
   }

    return (
        <div>
            <h2>Hooks Example 1</h2>
            <h2>Fruit Name :{fruitName}</h2>
            <button onClick={changeFruitName}>Toggle Fruit Name</button>
        </div>
    )
}

export default HookExample1
