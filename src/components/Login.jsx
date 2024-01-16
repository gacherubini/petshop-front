import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const {email, password} = data;
        try {
            const{data} = await axios.post('http://localhost:3000/userauth/login',{
                email, 
                password
            })
            if(data.error){
                toast.error(data.error)
            } else{
                setData({});
                toast.success('Login Successful');
                navigate('/dashboard')
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='div-login'>
            <form onSubmit={loginUser}>
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
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
