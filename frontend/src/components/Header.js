import React from "react";
import {appContext} from "../Contexts";

export default class Banner extends React.Component{
  render() {
    return <appContext.Consumer>
      {({user, logoutMethod}) => (
          user ? this._renderUserinfo(user, logoutMethod) : null
      )}
    </appContext.Consumer>
  }
}