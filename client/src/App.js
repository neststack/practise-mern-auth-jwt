import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

const App = () => {
    const solve = function (s) {
        let arr = s.split(' ');
        let finalArr = new Array(arr.length);
        for (let i = 0; i < arr.length; i++) {
            const index = parseInt(arr[i][arr[i].length - 1], 10);
            finalArr[index - 1] = arr[i].slice(0, arr[i].length - 1);
        }
        return finalArr.join(' ');
    };
    const s = 'is2 sentence4 This1 a3';
    console.log(solve(s));
    return (
        <>
            <Nav />
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/register' exact component={Register} />
            {/* <Route path='/dashboard' exact component={Dashboard} /> */}
        </>
    );
};

export default App;
