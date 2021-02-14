import React from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'
import Cv from "./Cv";
import Blog from "./Blog";
import Copyright from "./components/Copyright";
import Sticker from "./components/Sticker";

import "./styles/web.scss";

export default function App() {
  const navActiveClassName = "selected";
  return (
      <>
        <Sticker/>
        <Router>
          <nav role="navigation">
            <ul>
              <li>
                <NavLink exact to="/"
                         activeClassName={navActiveClassName}>
                  CV
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog"
                         activeClassName={navActiveClassName}>
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
        <footer className="hideOnPrint">
          <Copyright name="Mathias Bosman"/>
        </footer>
      </>
  );
}
