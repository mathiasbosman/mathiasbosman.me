import React from "react";
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'

import BLOGRest from "./scripts/blog-rest";
import Cv from "./Cv";
import Blog from "./Blog";
import Copyright from "./components/Copyright";
import Sticker from "./components/Sticker";

import "./styles/web.scss";
import LoginForm from "./Login";
import Dashboard from "./containers/admin/Dashboard";
import OAuth2CallbackHandler from "./components/OAuth2CallbackHandler";
import PrivateRoute from "./components/PrivateRoute";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
    }

    this._getLoggedInUser = this._getLoggedInUser.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
    this._renderUserInfo = this._renderUserInfo.bind(this);
  }

  _getLoggedInUser() {
    BLOGRest.fetchUser().then((user) => {
      this.setState({
        currentUser: user,
        authenticated: true,
      });
    });
  }

  _handleLogout() {
    this.setState({
      currentUser: null
    });
  }

  _renderUserInfo() {
    if (this.state.currentUser) {
      return <li>{this.state.currentUser.name}</li>
    }
  }

  componentDidMount() {
    this._getLoggedInUser();
  }

  render() {

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
                {this._renderUserInfo()}
              </ul>
            </nav>

            <Switch>
              <Route path="/blog">
                <Blog/>
              </Route>
              <Route path="/login" render={(props) => <LoginForm {...props}/>}/>
              <PrivateRoute path="/admin"
                            user={this.state.currentUser}
                            authenticated={this.state.authenticated}
                            component={Dashboard}/>
              <Route path="/oauth2/callback" component={OAuth2CallbackHandler}/>
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
}
