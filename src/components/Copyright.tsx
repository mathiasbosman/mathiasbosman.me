import React from "react";

type CopyrightProps = {
  name: string,
}

const Copyright = ({name}: CopyrightProps) => (
    <span>
      &copy; {new Date(Date.now()).getFullYear()} {name}
    </span>
)

export default Copyright