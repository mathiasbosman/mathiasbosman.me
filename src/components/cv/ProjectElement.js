import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Heading,
  Link,
  StyledOcticon,
  Text
} from "@primer/components";

export function ProjectElement({
  icon,
  name,
  statusBadge,
  link,
  footer,
  children
}) {
  return (
      <Box borderWidth={1} borderStyle="solid" borderColor="border.default"
           borderRadius={2} backgroundColor="canvas.default"
           as="article">
        <Box borderBottomWidth={1} borderBottomStyle="solid"
             borderBottomColor="border.default"
             borderTopLeftRadius={2}
             borderTopRightRadius={2}
             p={3}
             backgroundColor="canvas.subtle"
             as="header">
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Heading as="h3" sx={{fontSize: 1, fontWeight: "bold"}} aria-label={name}>
              {icon ? <StyledOcticon sx={{mr: 2}} icon={icon}/> : null}
              {link
                  ? <Link href={link} target="_blank">{name}</Link>
                  : <Text>{name}</Text>}
            </Heading>

            {statusBadge
                ? <img alt={"Status badge for " + name} src={statusBadge} />
                : null}
          </Box>
        </Box>
        <Box p={3} as="section">
          {children}
        </Box>
        {footer ?
            <Box
                as="aside"
                borderTopStyle="solid" borderTopColor="border.default"
                borderTopWidth={1}
                p={3}>
              <Text fontSize={0} color="fg.muted">{footer}</Text>
            </Box> : null}
      </Box>);
}

ProjectElement.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.string.isRequired,
  statusBadge: PropTypes.string,
  link: PropTypes.string,
  children: PropTypes.any,
  footer: PropTypes.string
}

export default function Projects({children}) {

  return (<Box display="grid"
               className="noColumnsOnBreak"
               gridTemplateColumns="1fr 1fr"
               gridGap={3}>{children}</Box>);
}

Projects.propTypes = {
  children: PropTypes.any
}