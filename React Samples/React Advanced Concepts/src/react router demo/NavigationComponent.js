import React from 'react'
import {Link } from 'react-router-dom';
const NavigationComponent = () => {
    const  id = 123;
    return (
        <div>
            <Link to="/">Home</Link> &nbsp;&nbsp;
            <Link to="/about">About</Link> &nbsp;&nbsp;
            <Link to="/contact">Contact</Link> &nbsp;&nbsp;
            <Link to="/users">Users</Link> &nbsp;&nbsp;
            <Link to={`user/${id}`}>Go to First User</Link>
            <a href="http://www.google.com"> Google</a> &nbsp;&nbsp;
        </div>
    )
}

export default NavigationComponent
