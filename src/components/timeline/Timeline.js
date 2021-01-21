import React from "react";
import PropTypes from "prop-types";

export default function Timeline({
    children, ...props
}) {
  return(
      <ul {...props}>
        {React.Children.map(children, child =>
          <li>
            {child}
          </li>
        )}
      </ul>
  );
}

Timeline.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.element),
      PropTypes.element.isRequired
  ]),
}