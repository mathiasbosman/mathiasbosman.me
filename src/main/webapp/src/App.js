import React from "react";

import BLOGRest from "./scripts/blog-rest";
import {BaseStyles} from "@primer/components";
import {HashRouter, Route, Switch} from "react-router-dom";
import LoginForm from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import OAuth2CallbackHandler from "./components/OAuth2CallbackHandler";
import Home from "./pages/Home";
import NotFound from "./NotFound";

import {appContext} from "./Contexts";
import Blog from "./components/blog/Blog";
import ErrorPage from "./pages/Error";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
    }

    this._getLoggedInUser = this._getLoggedInUser.bind(this);
    this._handleLogout = this._handleLogout.bind(this);
  }

  _getLoggedInUser() {
    BLOGRest.fetchUser().then((user) => {
      this.setState({
        currentUser: user,
        authenticated: user != null,
      });
    });
  }

  _handleLogout() {
    BLOGRest.logout().then(() => {
      this.setState({
        currentUser: null,
        authenticated: false
      });
    });
  }

  componentDidMount() {
    this._getLoggedInUser();
  }

  render() {
    const appProviderObject = {
      user: this.state.currentUser,
      logoutMethod: this._handleLogout
    }
    return (
        <>
          <appContext.Provider value={appProviderObject}>
            <BaseStyles>
              <HashRouter>
                <Switch>
                  <Route path="/blog" component={Blog}/>
                  <Route path={["/login", "/signin"]}
                         render={(props) => <LoginForm {...props}/>}/>
                  <PrivateRoute path="/admin"
                                user={this.state.currentUser}
                                authenticated={this.state.authenticated}
                                component={ErrorPage}/>
                  <Route path="/oauth2/callback"
                         component={OAuth2CallbackHandler}/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/404" component={NotFound}/>
                  <Route component={ErrorPage}/>
                </Switch>
              </HashRouter>
            </BaseStyles>
          </appContext.Provider>
        </>
    );
  }
}
