import React from "react";
import PropTypes from "prop-types";

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    }
  }

  render() {
    return <span>
      &copy; {new Date(Date.now()).getFullYear()} {this.state.name}
    </span>;
  }
}

Copyright.propTypes = {
  name: PropTypes.string.isRequired
}

export default Copyright;
