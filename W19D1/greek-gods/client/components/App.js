import React from "react";
import { Route, Switch } from 'react-router-dom';
import GodsList from './gods/GodsList';
import GodDetail from './gods/GodDetail';
import Create from './create/Create';
import NavBar from './nav/navbar';

const App = () => (
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/gods/:id" component={GodDetail} />
            <Route exact path="/new" component={Create} />
            <Route exact path="/" component={GodsList} />
        </Switch>
    </div>
);

export default App;