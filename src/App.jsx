import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";

import MainNav from "./shared/components/Header/MainNav";
import Home from "./shared/pages/Home";
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
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default App;
