import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoEllipseSharp } from 'react-icons/io5';

 
const LoginPage = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });

    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLoginSubmit =async(e) => {
        e.preventDefault();
       try{
        const response = await axios.post('http://localhost:8000/login',loginData);
        const {success,message}= response.data;
        if(success){
            console.log('login successfully');
        }
        else{
            console.log(message);
        }
       }
       catch(error){
        console.error('login error',error)

       }
       setLoginData
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleLoginSubmit}>
                <input
                    type="text"
                    name="username"
                    value={loginData.username}
                    placeholder="Username"
                    onChange={handleLoginChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    placeholder="Password"
                    onChange={handleLoginChange}
                    required
                />
                <button type="submit">Login</button>
                <p>
                    Not registered yet?{' '}
                    <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
