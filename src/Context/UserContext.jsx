import {createContext, useContext, useState} from 'react'

const UserContext = createContext(null)

export const ContextProvider = ({children}) => {
    const [firstName, setFirstName] = useState(null)
    // const [lastName, setLastName] = useState('')

    const Login = (firstName) => {
        setFirstName(firstName)
    }
    const  Logout = () => {
        setFirstName(null)
    }

    return (
    <UserContext.Provider value={{firstName, Login, Logout}} >{children}</UserContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(UserContext)
}