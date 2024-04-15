import React, { FC } from 'react'
import { IHeroes } from '../../../types/IHeroes'
import CardHero from './CardHero';

interface IListHeroes {
    heroes: IHeroes[];
    title: string,
}

const ListHeroes: FC<IListHeroes> = ({ heroes, title }) => {
    return (
        <div className=''>
            <div className='flex flex-wrap justify-center '>
                {
                    heroes.map((hero: IHeroes) => (
                        <CardHero
                            key={hero.id}
                            alter_ego={hero.alter_ego} characters={hero.characters}
                            id={hero.id} first_appearance={hero.first_appearance} publisher={hero.publisher}
                            superhero={hero.superhero} />
                    ))
                }
            </div>
        </div>
    )
}

export default ListHeroes