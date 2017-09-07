import React from 'react';
import { Router, Route } from 'dva/router';
import App from './routes/App';
import IndexPage from './routes/IndexPage';
import Page2 from './routes/Page2';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
        <Route path="/menu1" component={IndexPage} />
        <Route path="/menu2" component={Page2} />
      </App>
    </Router>
  );
}

export default RouterConfig;
