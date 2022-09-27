import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const Dashboard = () => {
    const history = useHistory();
    const [quote, setQuote] = useState('');

    const populateQuote = async () => {
        const response = await fetch('http://localhost:5000/api/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        });
        const data = await response.json();
        if (data.status === 'ok') {
            setQuote(data.quote);
        } else {
            alert(data.error);
        }
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

    return <div>Your quote: {quote || 'No quote found!'}</div>;
};

export default Dashboard;
