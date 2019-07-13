import React from 'react';

// React Router Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux Store
import { Provider } from 'react-redux';
import store from './store';

// Pages
import Home from './pages/Home';
import Search from './pages/Search';
import Bookmarks from './pages/Bookmarks';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/bookmarks' component={Bookmarks} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
