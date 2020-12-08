import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MainNav from "./shared/components/Header/MainNav";
import Home from "./shared/pages/Home";

const App = () => {
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
