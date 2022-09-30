import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

const App = () => {
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
