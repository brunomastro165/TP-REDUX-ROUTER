import React from 'react'
import ListHeroes from '../../ui/ListHeroes/ListHeroes'
import { heroesData } from '../../../data/heroes'

const Home = () => {

    return (
        <div className='mt-24'>
            <ListHeroes heroes={heroesData} title='Todos los heroes' />
        </div>
    )

}

export default Home