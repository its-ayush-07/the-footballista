import React from 'react'
import NavBar from './components/NavBar'
import LiveScores from './components/LiveScores'
import Standings from './components/Standings'
import Fixtures from './components/Fixtures'
import Results from './components/Results'
import Footer from './components/Footer'

const App = () => {
    return (
        <>
            <NavBar />
            <LiveScores />
            <Standings />
            <Fixtures />
            <Results />
            <Footer />
        </>
    )
}

export default App
