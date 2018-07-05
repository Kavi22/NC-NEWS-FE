import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import Nav from './components/Nav';
import Topics from './components/Topics';
import Users from './components/Users';

import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

class App extends Component {
  render() {
      return <BrowserRouter>
          <div className="main-container">
              <Nav></Nav>

              <Switch>
                  <Route exact path='/' component={ArticleList}/>
                  <Route exact path='/articles/:article_id' component={Article} />
                  <Route exact path='/topics' component={Topics}/>
                  <Route exact path='/users' component={Users}/>
              </Switch>

          </div>
      </BrowserRouter>;
  }
}

export default App;
