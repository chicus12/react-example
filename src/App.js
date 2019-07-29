import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'

import Home from './screens/Home'
import Actor from "./screens/Actor";
import Show from './screens/Show'

import Layout from './components/layout/Nav'
import NotFound from './components/NotFound'

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/actors/:show" exact component={Actor} />
          <Route path="/shows" exact component={Show} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
