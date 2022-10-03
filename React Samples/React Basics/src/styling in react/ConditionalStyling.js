import React from 'react'
import './myStyles.css'
const ConditionalStyling = (props) => {

    let cname =  props.primary?'primary':'';
    console.log(cname);
    return (
        <div>
            <h2 className="error">Conditional Styling</h2>
            <h3 className={`${cname} font-xl`}>
                Applying Conditional Styling ..
            </h3>
        </div>
    )
}

export default ConditionalStyling
