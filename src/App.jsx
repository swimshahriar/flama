import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';

import MainNav from './shared/components/Header/MainNav';
import Home from './shared/pages/Home';
import Footer from './shared/components/HomePage/Footer';
import Loader from './shared/components/Loader/Loader';
import { useAuth } from './hooks/useAuth';
import 'aos/dist/aos.css';
import './styles.css';

// lazy imports
const Auth = React.lazy(() => import('./users/pages/Auth/Auth'));
const UserDashboard = React.lazy(() =>
  import('./users/pages/Dashboard/UserDashboard')
);

const App = () => {
  AOS.init();
  const auth = useAuth();

  let routes;

  if (auth.user) {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/usr/dashboard">
          <UserDashboard />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return auth.loading ? (
    <Loader />
  ) : (
    <Router>
      <MainNav />
      <main>
        <Suspense fallback={<Loader />}>{routes}</Suspense>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
