import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './admin/Admin';
import Error from './error/Error';
import Home from './home/Home';
import Login from './login/Login';

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route component={Error} />
        </Switch>
    </div>
);

export default MainRouter;