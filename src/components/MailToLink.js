import React from "react";
import PropTypes from "prop-types";

export default class MailToLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mail: props.mail
    }
    this.sendMail = this.sendMail.bind(this);
  }

  sendMail() {
    window.open("mailto:" + this.state.mail, '_blank');
  }

  render() {
    return (
        <button onClick={this.sendMail} {...this.props}>
          {this.props.children}
        </button>
    )
  };
}

MailToLink.propTypes = {
  mail: PropTypes.string.isRequired,
}