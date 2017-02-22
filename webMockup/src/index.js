import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Main from './components/pages/MainPage';
import Search from './components/pages/SearchPage';
import Detail from './components/pages/DetailPage';
import About from './components/pages/AboutPage';
import NotFound from './components/pages/NotFoundPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main}/>
      <Route path="/search/:div/:value" component={Search}/>
      <Route path="/detail/:div/name=:name&num=:num&imgnum=:imgurl" component={Detail}/>
      <Route path="about" component={About}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
