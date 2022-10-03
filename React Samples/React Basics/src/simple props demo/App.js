import React from 'react'
import Greet from './Greet'
import Parent from './Parent';

function App() {
    const greetMessage = "Hello Good Evening";
    return (
        <div>
            {/* <Greet greet={greetMessage} message="Some Message"/> */}
            <Parent/>
        </div>
    )
}

export default App

