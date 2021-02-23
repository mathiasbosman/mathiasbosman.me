import React from "react";
import PropTypes from "prop-types";
import {Button, StyledOcticon} from "@primer/components";
import {PaperAirplaneIcon} from "@primer/octicons-react";

export default class MailToLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mail: props.mail
    }
    this._sendMail = this._sendMail.bind(this);
  }

  _sendMail() {
    window.open("mailto:" + this.state.mail, '_blank');
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
}