import React from 'react'
import { NavLink } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <>
            <div>HomeScreen</div>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/sign-up'}>Sign-up</NavLink>
        </>
    )
}

export default HomeScreen