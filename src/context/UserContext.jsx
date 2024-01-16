import axios from 'axios';
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            axios.get('http://localhost:3000/userauth/profile')
                .then(({ data }) => {
                    setUser(data);
                    console.log("setnado o usuario",data)
                })
                .catch((error) => {
                    console.error('Erro na requisição:', error);
                });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
