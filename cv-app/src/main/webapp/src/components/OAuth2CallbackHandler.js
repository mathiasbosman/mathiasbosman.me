import React from "react";
import {Redirect} from "react-router-dom";

// This component is loaded when the user has completed the OAuth2 authentication
// flow with the server. The server redirects the user to this page with an access token
// if the authentication was successful, or an error if it failed.
export default class OAuth2CallbackHandler extends React.Component {
  _getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(this.props.location.search);
    return results === null ? '' : decodeURIComponent(
        results[1].replace(/\+/g, ' '));
  }

  render() {
    const error = this._getUrlParameter("error");
    if (!error) {
      return <Redirect to={{
        pathname: "/",
        state: {from: this.props.location}
      }}/>;
    } else {
      return <Redirect to={{
        pathname: "/login",
        state: {
          from: this.props.location,
          error: error
        }
      }}/>;
    }
  }
}