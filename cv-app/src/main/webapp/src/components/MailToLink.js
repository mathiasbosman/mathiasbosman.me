import React from "react";
import PropTypes from "prop-types";

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
        <button onClick={this._sendMail} {...this.props}>
          {this.props.children}
        </button>
    )
  };
}

MailToLink.propTypes = {
  mail: PropTypes.string.isRequired,
}