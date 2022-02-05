import React from "react";
import PropTypes from "prop-types";

class Age extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: new Date(props.birthdate)
    }
    this._calculateAge = this._calculateAge.bind(this);
  }

  _calculateAge() {
    const today = new Date(Date.now());
    const monthDiff = today - this.state.birthdate.getTime();
    const yearDiff = new Date(monthDiff).getUTCFullYear();
    const years = Math.abs(yearDiff - 1970);
    if (years > 0) {
      return years + " " + (
        years > 1
        ? "years"
        : "year");
    }
    let months = today.getMonth() - this.state.birthdate.getMonth() + (12 * (today.getFullYear() - this.state.birthdate.getFullYear()));
    months = months === 0
      ? 1
      : months;
    return months + " " + (
      months > 1
      ? "months"
      : "month");
  }

  render() {
    return <span>{this._calculateAge()}</span>;
  }
}

Age.propTypes = {
  birthdate: PropTypes.string.isRequired
}

export default Age;
