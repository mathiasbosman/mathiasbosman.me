import React from "react";
import {appContext} from "../Contexts";
import {Flash, Link, StyledOcticon} from "@primer/components";
import {ShieldCheckIcon} from "@primer/octicons-react";

export default class Banner extends React.Component {

  constructor(props) {
    super(props);
    this._renderUserinfo = this._renderUserinfo.bind(this);
  }

  _renderUserinfo(user, logoutMethod) {
    console.log(logoutMethod);
    return <Flash full mb={3}>
      <StyledOcticon icon={ShieldCheckIcon}/>
      Logged in as {user.name} (<Link href="#" variant="small"
                                      onClick={logoutMethod}>Logout</Link>)
    </Flash>;
  }

  render() {
    return <appContext.Consumer>
      {({user, logoutMethod}) => (
          user ? this._renderUserinfo(user, logoutMethod) : null
      )}
    </appContext.Consumer>
  }
}