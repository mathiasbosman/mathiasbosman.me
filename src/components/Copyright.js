import React from "react";
import PropTypes from "prop-types";
import {Text} from "@primer/components";

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: new Date().getFullYear(),
      name: props.name,
    };
  }

  render() {
    return <Text>&copy; {this.state.year} {this.state.name}</Text>
  }
}

Copyright.propTypes = {
  name: PropTypes.string.isRequired
}

export default Copyright;
