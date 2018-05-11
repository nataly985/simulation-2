import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import { Link } from 'react-router-dom';

export default(
    <Switch>
        <Link to='/'> <p>Route</p> component={ Dashboard }></Link>
        <Link to='/wizard'> <p>Route2</p> component={ Wizard }></Link>
    </Switch>
)