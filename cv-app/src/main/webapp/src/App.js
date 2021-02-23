import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import BLOGRest from "./scripts/blog-rest";
import Blog from "./Blog";
import LoginForm from "./Login";
import Dashboard from "./containers/admin/Dashboard";
import OAuth2CallbackHandler from "./components/OAuth2CallbackHandler";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import {BaseStyles} from "@primer/components";

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
    return (
        <>
          <BaseStyles>
            <Router>
              <Switch>
                <Route path="/blog">
                  <Blog/>
                </Route>
                <Route path="/login"
                       render={(props) => <LoginForm {...props}/>}/>
                <PrivateRoute path="/admin"
                              user={this.state.currentUser}
                              authenticated={this.state.authenticated}
                              component={Dashboard}/>
                <Route path="/oauth2/callback"
                       component={OAuth2CallbackHandler}/>
                <Route path="/">
                  <Home/>
                </Route>
              </Switch>
            </Router>
          </BaseStyles>
        </>
    );
  }
}
