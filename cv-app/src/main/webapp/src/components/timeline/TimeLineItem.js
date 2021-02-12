import PropTypes from "prop-types";

export default function TimeLineItem({
  children,
  organisation,
  title,
  from,
  to
}) {
  return (
      <>
        <aside>
          <h3><span>{organisation}</span></h3>
          <h4>{title}</h4>
          <h5>{from} {to ? to !== from ? " - " + to : "" : " - present"}</h5>
        </aside>
        <p>{children}</p>
      </>
  );
}

TimeLineItem.propTypes =
    {
      organisation: PropTypes.string.isRequired,
      title: PropTypes.oneOfType(
          [PropTypes.string, PropTypes.object]
      ),
      from: PropTypes.string.isRequired,
      to: PropTypes.string
    }