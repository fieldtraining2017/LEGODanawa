import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import App from './App';
import Main from './components/pages/Main';
import Search from './components/pages/Search';
import About from './components/pages/About';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="/search/:id" component={Search} />
      <Route path="about" component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
