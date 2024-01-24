    import axios from 'axios';
    import React, { createContext, useState, useEffect } from 'react';

    export const UserContext = createContext({});

    export function UserContextProvider({ children }) {
        const [user, setUser] = useState(null);

        useEffect(() => {
            if (!user) {
                axios.get('http://localhost:3000/userauth/profile')
                .then((data) => {
                    console.log(data)
                    setUser(data); 
                })
            }
        }, []);

        return (
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        );
    }
