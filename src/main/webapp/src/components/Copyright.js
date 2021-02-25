import React from "react";
import PropTypes from "prop-types";

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      name: props.name
    };
  }

  render() {
    return <span>&copy; {this.state.year} {this.state.name}</span>
  }
}

Copyright.propTypes = {
  name: PropTypes.string.isRequired
}

export default Copyright;