import React from "react";

import BLOGRest from "./scripts/blog-rest";
import {BaseStyles} from "@primer/components";
import {HashRouter, Route, Switch} from "react-router-dom";
import Blog from "./Blog";
import LoginForm from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./containers/admin/Dashboard";
import OAuth2CallbackHandler from "./components/OAuth2CallbackHandler";
import Home from "./pages/Home";
import NotFound from "./NotFound";

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
    //todo
    // this._getLoggedInUser();
  }

  render() {
    return (
        <>
          <BaseStyles>
            <HashRouter>
              <Switch>
                <Route path="/blog" component={Blog}/>
                <Route path={["/login", "/signin"]}
                       render={(props) => <LoginForm {...props}/>}/>
                <PrivateRoute path="/admin"
                              user={this.state.currentUser}
                              authenticated={this.state.authenticated}
                              component={Dashboard}/>
                <Route path="/oauth2/callback"
                       component={OAuth2CallbackHandler}/>
                <Route exact path="/" component={Home}/>
                <Route component={NotFound}/>
              </Switch>
            </HashRouter>
          </BaseStyles>
        </>
    );
  }
}
