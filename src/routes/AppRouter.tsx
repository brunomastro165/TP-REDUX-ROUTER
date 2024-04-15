import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/screens/Login/Login'
import Home from '../components/screens/home/Home'
import Navbar from '../components/ui/Navbar/Navbar'
import { useAppSelector } from '../hooks/redux'
import ProtectedRoutes from './ProtectedRoutes'

const AppRouter = () => {

    const isLogged = useAppSelector(state => state.auth.isLogged);

    console.log(isLogged)
    return (
        <>
            <Routes>
                {isLogged
                    ? <Route path='/*' element={<ProtectedRoutes />} />
                    : <Route path='/*' element={<Login />} />}
            </Routes>
        </>
    )
}

export default AppRouter