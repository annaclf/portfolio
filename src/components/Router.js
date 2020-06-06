import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Nav from './Nav';
import Cv from './Cv';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
      <div className="app-wrap">
        <Nav />
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={App} />
        </Switch>
      </div>
    </BrowserRouter>
)


export default Router;