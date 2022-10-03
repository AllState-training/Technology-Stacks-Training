// import React from 'react'

// function Greet({greet,message}) {
//     //console.log(props);
//     return (
//         <div>
//             <h1> {greet} Guys...</h1>
//             <h2>{message}</h2>
//         </div>
//     )
// }

// export default Greet

import React, { Component } from 'react'

export class Greet extends Component {

    // props
    
    render() {

        // Object Destructring
        let {greet,message} = this.props;
        return (
            <div>
                <h1>{greet} Guys.. </h1>
                <h2>{message}</h2>
            </div>
        )
    }
}

export default Greet

// Greet -> name, heroName
// Welcome Tony Stark a.k.a Iron Man
