import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { useDispatch } from 'react-redux';
import { setLogOut } from '../../../redux/slices/auth';
import { Link } from 'react-router-dom';
import { useForm } from '../../../hooks/useForms';
import { IHeroes } from '../../../types/IHeroes';
import { heroesData } from '../../../data/heroes';

const Navbar = () => {

    const dispatch = useAppDispatch();
    const handleLogOut = () => {
        dispatch(setLogOut());
    }

    return (
        <div className='fixed  w-full mb-24 z-20'>
            <nav className="flex justify-around items-center p-5 bg-blue-600  w-full text-white font-semibold ">
                <div className=''>TP3</div>
                <div className='flex justify-between space-x-5'>
                    <div className='p-2 rounded-md cursor-pointer'><Link to={"/"}>Todos</Link></div>
                    <div className='p-2 rounded-md cursor-pointer'><Link to={"/DC"}>DC</Link></div>
                    <div className='p-2 rounded-md cursor-pointer'><Link to={"/Marvel"}>Marvel</Link></div>
                    <div className='p-2 rounded-md cursor-pointer'><Link to={"/Search"}>Buscador</Link></div>
                </div>

                <div className='flex justify-between space-x-5'>
                    <div className='p-2 rounded-md cursor-pointer'>
                        <h1>Admin</h1>
                        <h1 onClick={handleLogOut}>LogOut</h1></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar