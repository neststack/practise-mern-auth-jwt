import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('password');

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();

        if (data.user) {
            alert('Login successful');
            window.location.href = '/dashboard'
        } else {
            alert('Please check credentials');
        }

        console.log(data);
    };

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;