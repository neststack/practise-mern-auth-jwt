import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Dashboard = () => {
    const history = useHistory();

    const populateQuote = async () => {
        const response = await fetch('http://localhost:5000/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        });
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = jwt.decode(token);
            if (!user) {
                localStorage.removeItem('token');
                history.replace('/login');
            } else {
                populateQuote();
            }
        }
    }, []);

    return <div>Dashboard</div>;
};

export default Dashboard;
