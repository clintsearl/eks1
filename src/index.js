import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "./index.css";
import App from "./App";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Navbar from "./components/Navbar";
import EricProfile from "./components/EricProfile"
import AnneProfile from './components/AnneProfile'

ReactDOM.render( 
    <div>
        <Navbar/>
    <Router>
        <Switch>
              <Route exact path='/' component={App}/>
              <Route path='/EricProfile' component={EricProfile}/>
              <Route path='/AnneProfile' component={AnneProfile}/>
            </Switch>
    
    </Router>
    </div>
, document.getElementById('root'));

registerServiceWorker();