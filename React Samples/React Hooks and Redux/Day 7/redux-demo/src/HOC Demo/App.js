import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

const App = () => {
    return (
        <div>
            <h1>Higher Order Components Demo</h1>
            <ClickCounter name="Anup"/>
            <HoverCounter name="John"/>
        </div>
    )
}

export default App
