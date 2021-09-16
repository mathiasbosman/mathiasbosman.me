import React from "react";
import PropTypes from "prop-types";
import {Link} from "@primer/components";

class GoogleMapsLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postalCode: props.postalCode,
      locationName: props.locationName,
      country: props.country
    }
    this._buildUrl = this._buildUrl.bind(this);
  }

  _buildUrl() {
    let urlStart = "https://www.google.com/maps/place/";
    return urlStart +
        [this.state.postalCode, this.state.locationName]
        .filter(Boolean)
        .join("+");
  }

  render() {
    return <Link {...this.props} href={this._buildUrl()}>
      {[this.state.locationName, this.state.country].filter(Boolean).join(", ")}
    </Link>
  }
}

GoogleMapsLocation.propTypes = {
  postalCode: PropTypes.string,
  locationName: PropTypes.string.isRequired,
  country: PropTypes.string
}

export default GoogleMapsLocation;