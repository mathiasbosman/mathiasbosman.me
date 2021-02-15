import PropTypes from "prop-types";

export default function ExperienceElement({children, percentage}) {
  return (
      <li className={"s" + percentage}>
        {children}
      </li>
  );
}

ExperienceElement.propTypes = {
  percentage: PropTypes.number.isRequired
}