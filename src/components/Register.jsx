import React, { useState } from 'react';
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Register() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });


    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;
        try {
            const { data: responseData } = await axios.post('http://localhost:3000/userauth/register', {  // Adjust the URL as needed
                name, email, password
            });

            if (responseData.error) {
                toast.error(responseData.error);
            } else {
                setData({  // Use this to reset the state
                    name: '',
                    email: '',
                    password: '',
                });

                toast.success('Register Successful');
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={registerUser}>
                <label>Nome</label>
                <input
                    type="text"
                    placeholder="Enter Name..."
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter Email..."
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter Password..."
                    value={data.password}
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Register;
