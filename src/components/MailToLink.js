import React from "react";
import PropTypes from "prop-types";
import {Button, StyledOcticon} from "@primer/components";
import {PaperAirplaneIcon} from "@primer/octicons-react";

export default class MailToLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mail: props.mail,
      safe: props.safe
    }
    this._sendMail = this._sendMail.bind(this);
  }

  _sendMail() {
    let email = this.state.mail;
    if (this.state.safe) {
      // remove brackets
      email = email.replace(/[{}]+/g, "");
    }
    window.open("mailto:" + email, '_blank');
  }

  render() {
    return (
        <Button onClick={this._sendMail} {...this.props}>
          <StyledOcticon icon={PaperAirplaneIcon}/> {this.props.children}
        </Button>
    )
  };
}

MailToLink.propTypes = {
  mail: PropTypes.string.isRequired,
  safe: PropTypes.bool
}