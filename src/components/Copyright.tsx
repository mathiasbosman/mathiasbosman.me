import React from "react"

type CopyrightProps = {
  name: string,
  version?: string
}

const Copyright = ({name, version}: CopyrightProps) => (
    <span>
      &copy; {new Date(Date.now()).getFullYear()} {name}{version ? ` v${version}` : ''}
    </span>
)

export default Copyright