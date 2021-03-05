import React from "react";
import {TITLE_BASE, TITLE_SEPERATOR} from "../Constants";
import PropTypes from "prop-types";

export default class DocTitle extends React.Component {

  constructor(props) {
    super(props);
    // override constants if passed
    const seperator = props.seperator ? props.seperator : TITLE_SEPERATOR;
    const title = props.title ? props.title : TITLE_BASE;
    let subTitle = props.subTitle;

    if (Array.isArray(props.subTitle)) {
      subTitle = props.subTitle.join(" " + seperator + " ");
    }
    document.title = title + (subTitle ? " " + seperator + " " + subTitle : "");
  }

  render() {
    return false;
  }
}

DocTitle.propTypes = {
  seperator: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string
}