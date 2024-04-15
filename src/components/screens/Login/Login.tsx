import React, { FormEvent } from 'react'
import { useForm } from '../../../hooks/useForms'
import { useAppDispatch } from '../../../hooks/redux'
import { setLogin } from '../../../redux/slices/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const { values, handleChange } = useForm({
        user: "",
        password: "",
    })

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { user, password } = values;
    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch("/user.json");
        const userData = await response.json();
        const userFound = userData.users.
            find((u: { username: string, password: string }) =>
                u.username === user && u.password === password);

        if (userFound) {
            dispatch(setLogin(user));
            navigate("/");
        }
    }

    return (
        <div className='h-screen w-full flex justify-center items-center p-5 bg-black bg-opacity-25'>
            <form className="  border p-12 rounded-lg w-1/4 bg-white"
                onSubmit={handleSubmitForm}>
                <div className="mb-5">
                    <label htmlFor="user" className="block mb-2 text-lg font-medium text-gray-900 ">Usuario</label>
                    <input
                        onChange={handleChange}
                        value={user}
                        name='user'
                        type="text" id="user" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Ejemplo usuario" required />

                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-lg font-medium text-gray-900 ">Contraseña</label>
                    <input
                        onChange={handleChange}
                        value={password}
                        name='password'
                        type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                </div>

                <div className='flex self-center justify-center items-center w-full'>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center">Ingresar</button>
                </div>
            </form>
        </div>
    )
}

export default Login