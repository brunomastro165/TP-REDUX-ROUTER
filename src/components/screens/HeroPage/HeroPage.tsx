import React, { useState, useEffect } from 'react'
import { IHeroes } from '../../../types/IHeroes'
import { useParams } from 'react-router-dom';
import { heroesData } from '../../../data/heroes';

const HeroPage = () => {

    const [hero, setHero] = useState<IHeroes | null>(null);

    const { id } = useParams();

    const getById = () => {
        const result = heroesData.find((h) => h.id === id);
        result ? setHero(result) : setHero(null);
    }

    useEffect(() => {
        getById();
    }, [])

    return hero &&
        <div className='flex justify-center items-center  rounded-lg'>
            <img src={`/assets/heroes/${id}.jpg`} alt={id}
                className='rounded-lg' />
        </div>

}

export default HeroPage