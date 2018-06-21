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
              <nav>
                  <div>
                      <ul>
                          <li>
                              <Link to='/'>Home</Link>
                          </li>
                          <li>
                              <Link to='/articles'>Articles</Link>
                          </li>
                          <li>
                              <Link to='/topics'>Topics</Link>
                          </li>
                          <li>
                              <Link to='/users'>Users</Link>
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
