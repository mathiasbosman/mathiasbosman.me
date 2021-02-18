import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Redirect} from "react-router-dom";
import BLOGRest from "./scripts/blog-rest";

import "./styles/admin.scss";
import {
  OAUTH2_AUTHORIZE_URL,
  OAUTH2_PROVIDERS,
  OAUTH2_REDIRECT_URL
} from "./Constants";
import Error from "./components/Error";

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      providers: []
    }
    this._renderError = this._renderError.bind(this);
  }

  componentDidMount() {
    // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error
    // Here we display the error and then remove the error query parameter from the location.
    if (this.props.location.state && this.props.location.state.error) {
      setTimeout(() => {
        this.props.history.replace({
          pathname: this.props.location.pathname,
          state: {
            error: this.props.location.state.error
          }
        });
      }, 100);
    }

    BLOGRest.fetchOAuth2Providers().then((providers) => {
      this.setState({providers: providers});
    });
  }

  _renderError() {
    if (this.props.location.state && this.props.location.state.error) {
      return <Error message={this.props.location.state.error} level="error"/>
    }
  }

  _renderProvider(provider) {
    const href = OAUTH2_AUTHORIZE_URL + provider.toLowerCase()
        + "?redirect_uri=" + OAUTH2_REDIRECT_URL + provider.toLowerCase();
    const providerClass = OAUTH2_PROVIDERS[provider];
    return <a className="linkButton" href={href}>
      <FontAwesomeIcon icon={providerClass.icon}/> Login
      with {providerClass.name}
    </a>
        ;
  }

  render() {
    if (this.props.authenticated) {
      return <Redirect to={{
        pathname: "/",
        state: {from: this.props.location}
      }}/>;
    }
    return (
        <main id="login" className="card form">
          <h1>Login</h1>
          {this._renderError()}
          <ul className="socialProviders">
            {this.state.providers.map(
                p => <li key={p}>{this._renderProvider(p)}</li>)}
          </ul>
        </main>
    );
  }
}