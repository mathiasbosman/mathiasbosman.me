import React from "react";

import BLOGRest from "./scripts/blog-rest";
import {BaseStyles} from "@primer/components";
import {HashRouter, Route, Switch} from "react-router-dom";
import Blog from "./Blog";
import LoginForm from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import OAuth2CallbackHandler from "./components/OAuth2CallbackHandler";
import Home from "./pages/Home";
import NotFound from "./NotFound";

import {userContext} from "./Contexts";

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
        authenticated: true,
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
    const userProviderObject = {
      user: this.state.currentUser,
      logoutMethod: this._handleLogout
    }
    return (
        <>
          <userContext.Provider value={userProviderObject}>
            <BaseStyles>
              <HashRouter>
                <Switch>
                  <Route path="/blog" component={Blog}/>
                  <Route path={["/login", "/signin"]}
                         render={(props) => <LoginForm {...props}/>}/>
                  <PrivateRoute path="/admin"
                                user={this.state.currentUser}
                                authenticated={this.state.authenticated}
                                component={NotFound}/>
                  <Route path="/oauth2/callback"
                         component={OAuth2CallbackHandler}/>
                  <Route exact path="/" component={Home}/>
                  <Route component={NotFound}/>
                </Switch>
              </HashRouter>
            </BaseStyles>
          </userContext.Provider>
        </>
    );
  }
}
