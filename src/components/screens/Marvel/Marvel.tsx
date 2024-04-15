
import React, { useEffect, useState } from 'react'
import { IHeroes } from '../../../types/IHeroes';
import { heroesData } from '../../../data/heroes';
import ListHeroes from '../../ui/ListHeroes/ListHeroes';

const Marvel = () => {
    const [heroes, setHeroes] = useState<IHeroes[]>([]);

    const handleFilter = () => {
        const result = heroesData.filter((hero) => hero.publisher === "Marvel Comics");
        setHeroes(result);
    }

    useEffect(() => {
        handleFilter();
    }, [])


    return <div className='mt-24'><ListHeroes heroes={heroes} title='Marvel' key={1} /></div>
}

export default Marvel

