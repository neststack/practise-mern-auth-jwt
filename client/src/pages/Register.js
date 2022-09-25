import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('test');
    const [email, setEmail] = useState('test@test.com');
    const [password, setPassword] = useState('password');

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                password,
            }),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type='text'
                    placeholder='First Name'
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    placeholder='Email'
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                    placeholder='Password'
                />
                <br />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Register;
