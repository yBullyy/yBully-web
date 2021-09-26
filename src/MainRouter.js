import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Admin from './admin/Admin';
import Home from './home/Home';

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
        </Switch>
    </div>
);

export default MainRouter;