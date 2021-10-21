import React from "react";
import PropTypes from "prop-types";
import {Box, Heading, Link, StyledOcticon, Text} from "@primer/components";

export function ProjectElement({
  icon,
  name,
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
             as="section">
          <Box display="flex">
            <Heading as="h3" sx={{fontSize: 1, fontWeight: "bold"}}>
              {icon ? <StyledOcticon sx={{mr: 2}} icon={icon}/> : null}
              {link
                  ? <Link href={link} target="_blank">{name}</Link>
                  : <Text>{name}</Text>}
            </Heading>
          </Box>
        </Box>
        <Box p={3} as="aside">
          {children}
        </Box>
        {footer ?
            <Box
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
  link: PropTypes.string,
  children: PropTypes.any,
  footer: PropTypes.string
}

export default function Projects({children}) {

  return (<Box display="grid"
               className="noColumnsOnBreak"
               gridTemplateColumns="repeat(2, 1fr)"
               gridGap={3}>{children}</Box>);
}

Projects.propTypes = {
  children: PropTypes.any
}