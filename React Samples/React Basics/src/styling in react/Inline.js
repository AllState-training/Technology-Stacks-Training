import React from 'react'

import style from './appStyle.module.css'

const Inline = () => {

    const heading1 = {
        fontSize:'72px', 
        color:'blue',
        border:'2px solid brown'
    }

    return (
        <div>

            <h1 className='error'>Inside Child Error</h1>
            <h2 style={heading1}
            >Inline Styling...</h2>

            <h2 className={style.error}>Module Level CSS</h2>
        </div>
    )
}

export default Inline
