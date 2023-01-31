import { useState } from 'react';
import useAuthContext  from './useAuthContext';

export const useSignUp = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email: string, password: string, role: string) => {
        setIsLoading(true)
        setError(null)

        console.log(email, password, role)

        try {
            const response = await fetch('http://localhost:8000/user' , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        email,
                        password,
                        role
                 })
                })
                const responseData = await response.json()

                if (!response.ok) {
                    throw new Error(responseData.message)
                }
                if (response.ok) {
                    dispatch({ type: 'LOGIN', payload: responseData })
                    localStorage.setItem('user',JSON.stringify(responseData))
                    setIsSuccess(true)
                }

        } catch (err) {
            console.error(err)
        }
    }

    return { signup, error, isLoading, isSuccess}
}