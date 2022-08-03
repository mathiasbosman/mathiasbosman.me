import React from "react";
import PropTypes from "prop-types";

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      version: props.version
    }
  }

  render() {
    return <span data-version={this.state.version}>
      &copy; {new Date(Date.now()).getFullYear()} {this.state.name}
    </span>;
  }
}

Copyright.propTypes = {
  name: PropTypes.string.isRequired,
  version: PropTypes.string
}

export default Copyright;
