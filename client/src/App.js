import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

const App = () => {
    const solve = function (s, indices) {
        let finalArr = [];
        for (let i = 0; i < s.length; i++) {
            finalArr[indices[i]] = s[i];
        }
        return finalArr.join('');
    };
    const s = 'codeleet';
    const indices = [4, 5, 6, 7, 0, 2, 1, 3];
    console.log(solve(s, indices));
    return (
        <>
            <Nav />
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            <Route path='/dashboard' exact component={Dashboard} />
        </>
    );
};

export default App;
