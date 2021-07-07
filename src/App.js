 import React from 'react';

import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";


function App() {
  return (
    //BEM
    <BrowserRouter>
      <Header/>
    <Switch>
        <Route path="/" exact>
          <Home/> 
        </Route>
        <Route path= "/checkout" exact>
        <Checkout/>
        </Route>
     </Switch>
   
   </BrowserRouter>
  );
}


export default App;
