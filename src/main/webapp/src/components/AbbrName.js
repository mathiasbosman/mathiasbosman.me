import React from "react";
import PropTypes from "prop-types";

class AbbrName extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: props.firstName,
      lastName: props.lastName
    }
    this._abbreviate = this._abbreviate.bind(this);
  }

  _abbreviate() {
    return this.state.firstName + (
        this.state.lastName ?
            " " + this.state.lastName.substr(0, 1) + "."
            : ""
    );
  }

  render() {
    return this._abbreviate();
  };
}

AbbrName.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string
}

export default AbbrName;