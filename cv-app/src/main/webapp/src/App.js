import React from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Cv from "./Cv";
import Blog from "./Blog";

export default function App() {
  return (
      <>
        <Router>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/"
                         activeClassName="selected">
                  CV
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog"
                         activeClassName="selected">
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/blog">
              <Blog/>
            </Route>
            <Route path="/">
              <Cv/>
            </Route>
          </Switch>
        </Router>
      </>
  );
}
