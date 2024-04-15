import React from 'react'
import Navbar from '../components/ui/Navbar/Navbar'
import Home from '../components/screens/home/Home'
import { Route, Routes } from 'react-router-dom'
import Marvel from '../components/screens/Marvel/Marvel'
import DC from '../components/screens/DC/DC'
import HeroPage from '../components/screens/HeroPage/HeroPage'
import Search from '../components/screens/Search/Search'

const ProtectedRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='pt-24'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/DC' element={<DC />} />
                    <Route path='/Marvel' element={<Marvel />} />
                    <Route path='/Search' element={<Search />} />
                    <Route path='/hero/:id' element={<HeroPage />} />
                </Routes>
            </div>
        </>
    )
}

export default ProtectedRoutes