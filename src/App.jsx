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
import Auth from './users/pages/Auth/Auth';
import Footer from './shared/components/HomePage/Footer';
import Dashboard from './users/pages/Dashboard/Dashboard';
import { useAuth } from './hooks/useAuth';
import 'aos/dist/aos.css';
import './styles.css';

const App = () => {
  AOS.init();
  const auth = useAuth();

  let routes;

  if (auth.user) {
    routes = (
      <>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route to="/usr/dashboard">
          <Dashboard />
        </Route>
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </>
    );
  }

  return (
    <Router>
      <MainNav />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes}
            <Redirect to="/" />
          </Switch>
        </Suspense>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
