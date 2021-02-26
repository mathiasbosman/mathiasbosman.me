import React from "react";
import PropTypes from "prop-types";

class Error extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: props.message,
      level: props.level ? props.level : "info"
    };
  }

  render() {
    return <div className={"flash " + this.state.level}>
      <p>{this.state.message}</p>
    </div>
  }
}

Error.propTypes = {
  message: PropTypes.string.isRequired,
  level: PropTypes.string
}

export default Error;