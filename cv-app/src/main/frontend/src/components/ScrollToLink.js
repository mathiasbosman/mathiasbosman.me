import React from "react";
import PropTypes from "prop-types";

class ScrollToLink extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      targetAnchor: props.targetAnchor,
      behavior: props.behavior ? props.behavior : "auto"
    }
    this._scroll = this._scroll.bind(this);
  }

  _scroll() {
    document.getElementById(this.state.targetAnchor).scrollIntoView({
      behavior: this.state.behavior
    });
    return false;
  }

  render() {
    return (
        <button className={this.props.className} onClick={this._scroll}>
          {this.props.children}
        </button>
    )
  };
}

ScrollToLink.propTypes = {
  targetAnchor: PropTypes.string.isRequired,
  behavior: PropTypes.string
}

export default ScrollToLink;