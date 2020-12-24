import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "jquery";
import "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";

import MainNav from "./shared/components/Header/MainNav";
import Home from "./shared/pages/Home";
import Auth from "./users/pages/Auth/Auth";
import "aos/dist/aos.css";
import "./styles.css";

const App = () => {
  AOS.init();

  return (
    <Router>
      <MainNav />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
