import React, { Fragment, useEffect } from 'react';

// React Router Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux Store
import { Provider } from 'react-redux';
import store from './store';

// Pages
import Home from './pages/Home';
import Bookmarks from './pages/Bookmarks';
import PageNotFound from './pages/PageNotFound';

import TopNav from './layout/TopNav';
import { getNewsSource, setTheme } from './actions/news';
import { getBookmarkItems } from './actions/bookmarks';
const App = () => {
  useEffect(() => {
    store.dispatch(getNewsSource());
    store.dispatch(setTheme());
    store.dispatch(getBookmarkItems());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <TopNav />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/bookmarks' exact component={Bookmarks} />
            <Route component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
