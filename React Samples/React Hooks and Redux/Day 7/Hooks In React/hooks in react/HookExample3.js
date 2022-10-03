import React, { useState } from 'react'

function HookExample3() {
    
    let [name,setName] = useState({
                firstName:'',
                lastName:''    
            });

    let changeHandler = (e) =>{
         
         setName({
            ...name,[e.target.name] : e.target.value    
         })
    }         


    return (
        <div>
            <h2>Hook Example 3</h2>
            <form>
                <label>First Name</label>
                <input type="text"
                       defaultValue={name.firstName}
                       onChange={changeHandler}
                       name="firstName"/>

                 <label>Last Name</label>
                 <input type="text"
                       defaultValue={name.lastName}
                       onChange={changeHandler}
                       name="lastName"/>
                <div>First Name : {name.firstName}</div>               
                <div>Last Name : {name.lastName}</div>               
            </form>    

        </div>
    )
}

export default HookExample3
