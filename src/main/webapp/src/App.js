import React from "react";

import BLOGRest from "./scripts/blog-rest";
import {BaseStyles, Box, theme} from "@primer/components";
import {HashRouter, Route, Switch} from "react-router-dom";
import LoginForm from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import OAuth2CallbackHandler from "./components/OAuth2CallbackHandler";
import Home from "./pages/Home";
import NotFound from "./NotFound";

import {userContext} from "./Contexts";
import Blog from "./components/blog/Blog";
import {ThemeProvider} from "styled-components";
import {theme as darkTheme} from "@primer/components/lib/theme-dark-preval";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      prefersDarkTheme: window.matchMedia(
          "(prefers-color-scheme: dark)").matches
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
            <ThemeProvider
                theme={this.state.prefersDarkTheme ? darkTheme : theme}>

              <Box height="100%"
                   bg={this.state.prefersDarkTheme ? "" : "gray.1"} p="1">
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
              </Box>
            </ThemeProvider>
          </userContext.Provider>
        </>
    );
  }
}
