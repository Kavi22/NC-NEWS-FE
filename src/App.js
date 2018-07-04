import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Articles from './components/Articles';
import Topics from './components/Topics';
import Users from './components/Users';

import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';

class App extends Component {
  render() {
      return <BrowserRouter>
          <div className="main-container">
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <a className="navbar-brand" href="www.northcoders.com">NC</a>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link to='/' className="nav-link" >Home</Link>
                          </li>
                          <li className="nav-item">
                              <Link to='/articles' className="nav-link" >Articles</Link>
                          </li>
                          <li className="nav-item">
                              <Link to='/topics' className="nav-link">Topics</Link>
                          </li>
                          <li className="nav-item">
                              <Link to='/users' className="nav-link">Users</Link>
                          </li>
                      </ul>
                  </div>
              </nav>

              <Switch>
                  <Route exact path='/' component={Home}/>
                  <Route exact path='/articles' component={Articles}/>
                  <Route exact path='/topics' component={Topics}/>
                  <Route exact path='/users' component={Users}/>
              </Switch>

          </div>
      </BrowserRouter>;
  }
}

export default App;
