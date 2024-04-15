import React, { useEffect, useState } from 'react'
import { IHeroes } from '../../../types/IHeroes';
import { heroesData } from '../../../data/heroes';
import ListHeroes from '../../ui/ListHeroes/ListHeroes';

const DC = () => {

    const [heroes, setHeroes] = useState<IHeroes[]>([]);


    const handleFilter = () => {
        const result = heroesData.filter((hero) => hero.publisher === "DC Comics");
        setHeroes(result);
    }

    useEffect(() => {
        handleFilter();
    }, [])
    

    return <div className='mt-24'><ListHeroes heroes={heroes} title='DC' key={1} /></div>
}

export default DC