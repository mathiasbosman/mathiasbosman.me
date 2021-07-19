import React from "react";
import PropTypes from "prop-types";
import {Avatar} from "@primer/components";

class HoverAvatar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
      mainSrc: props.src,
      altSrc: props.altSrc
    }
    this._replaceImage = this._replaceImage.bind(this);
    this._resetImage = this._resetImage.bind(this);
  }

  _replaceImage() {
    this.setState({src: this.state.altSrc})
  }

  _resetImage() {
    this.setState({src: this.state.mainSrc})
  }

  render() {
    return <Avatar className="avatar" itemProp="image"
                   onMouseOver={this._replaceImage}
                   onMouseLeave={this._resetImage}
                   alt="Mathias Bosman"
                   src={this.state.src}/>
  }
}

HoverAvatar.propTypes = {
  src: PropTypes.string.isRequired,
  altSrc: PropTypes.string.isRequired
}

export default HoverAvatar;