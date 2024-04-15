import React, { useEffect, useState } from 'react'
import { useForm } from '../../../hooks/useForms';
import { IHeroes } from '../../../types/IHeroes';
import { heroesData } from '../../../data/heroes';
import ListHeroes from '../../ui/ListHeroes/ListHeroes';

const Search = () => {
    const { values, handleChange } = useForm({
        search: "",
    });

    const { search } = values;

    const [heroes, setHeroes] = useState<IHeroes[]>([]);


    useEffect(() => {
        const result = heroesData.filter((h) => h.superhero.toLowerCase().includes(search))
        setHeroes(result);
        console.log(result);
    }, [search])

    return (
        <>
            <div className='flex justify-end w-full items-center my-4 fixed z-20 '>
                <input type="text" className='outline-none p-2 text-2xl rounded-md border w-1/4 mx-10' placeholder='Buscar...'
                    onChange={handleChange} name='search' />
            </div>

            {heroes.length > 0 ? (
                <div className='mt-24'>
                    <div className=''>
                        <ListHeroes heroes={heroes} title='Heroes buscados' key={1} />
                    </div>
                </div>
            )
                : (
                    <div className='flex justify-center items-center my-auto h-screen'>
                        <div className='p-16 shadow-lg rounded-lg border'>
                            <h1 className='text-gray-900 font-semibold text-3xl'>No se encontró héroe llamado {search}</h1>
                        </div>
                    </div>
                )}

        </>
    )
}

export default Search