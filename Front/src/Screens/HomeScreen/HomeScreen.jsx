import React from 'react'

import {NavHeader,Header} from '../index.js'
import MainUserCards from '../../Components/HomeSections/mainUserCards/MainUserCards.jsx'

const HomeScreen = () => {
    return (
        <>
            <NavHeader />
            <Header />
            <MainUserCards />
        </>
    )
}

export default HomeScreen