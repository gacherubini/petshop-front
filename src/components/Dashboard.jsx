import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const DashBoard = () => {
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log('User in DashBoard:', user);
    }, [user]);

    return (
        <div>
            <h1>DashBoard</h1>
            {!!user && (<h2>Hi {user.name}!</h2>)}
        </div>
    );
}

export default DashBoard;
