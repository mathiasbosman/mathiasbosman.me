import React from "react";
import {userContext} from "../Contexts";

export default class Banner extends React.Component{
  render() {
    return <userContext.Consumer>
      {({user, logoutMethod}) => (
          user ? this._renderUserinfo(user, logoutMethod) : null
      )}
    </userContext.Consumer>
  }
}