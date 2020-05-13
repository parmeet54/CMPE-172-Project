import React, { Component } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Book from './Book';
import Home from './Home';


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <Router>
                <Switch>
                    <Route path = '/' exact={true} component={Home}/>
                    <Route path = '/home' exact={true} component={Home}/>
                    <Route path = '/books' exact={true} component={Book}/>

                </Switch>
            </Router>
         );
    }
}
 
export default App;