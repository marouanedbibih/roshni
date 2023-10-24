import React, { useContext, useState,createContext } from 'react'

// create Context
const StateContext = createContext({
    user: null,
    token: null,
    role: null,
    _setToken: () => { },
    setUser: () => { },
    _setRole: ()=>{}
})

export default function ContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [role, setRole] = useState(localStorage.getItem('ACCESS_ROLE'));

    const _setToken = (token) => {
        setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN',token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    const _setRole = (role) => {
        setRole(role);
        // console.log('Context SetRole',role)
        if (role) {
            localStorage.setItem('ACCESS_ROLE', role);
        } else {
            localStorage.removeItem('ACCESS_ROLE');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            role,
            _setToken,
            setUser,
            _setRole
        }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);