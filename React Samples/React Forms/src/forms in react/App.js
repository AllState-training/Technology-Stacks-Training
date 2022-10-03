import React from 'react'
import ControlledForm from './ControlledForm'
import ListUserData from './ListUserData'
import UncontrolledForm from './UncontrolledForm'

const App = () => {
    return (
        <div>
            <h1>React Forms</h1>
            {/* <UncontrolledForm/> */}
            <ControlledForm/>
            <ListUserData/>
        </div>
    )
}

export default App
