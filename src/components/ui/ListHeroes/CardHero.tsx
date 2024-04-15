import React, { FC } from 'react'
import { IHeroes } from '../../../types/IHeroes'
import { useNavigate } from 'react-router-dom';

const CardHero: FC<IHeroes> = ({ id, alter_ego, characters, first_appearance, publisher, superhero }) => {

    console.log(id);

    const navigate = useNavigate();

    const handleNavigateHero = () => {
        navigate(`/hero/${id}`)
    }

    return (
        <div className='border pb-4  m-5 rounded-lg h-auto shadow-lg cursor-pointer hover:shadow-xl transition-all hover:scale-105 z-0' onClick={handleNavigateHero}>

            <div>
                <img src={`assets/heroes/${id}.jpg`} alt="id" className='h-full w-full rounded-t-lg' />
            </div>

            <div className='flex flex-col justify-center items-center mt-2 h-auto  '>
                <h1 className='font-semibold text-2xl'>{superhero}</h1>
                <h2>{publisher}</h2>

            </div>
        </div>
    )
}

export default CardHero