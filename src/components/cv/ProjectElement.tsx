import React from "react";
import {Box, Heading, Link, StyledOcticon, Text} from "@primer/react";
import {Icon} from "@primer/octicons-react";

type ElementProps = {
  name: string,
  icon?: Icon,
  statusBadge?: string,
  link?: string,
  footer?: string,
  children?: React.ReactNode
}

export const ProjectElement = ({
  icon,
  name,
  statusBadge,
  link,
  footer,
  children
}: ElementProps) => (
    <Box borderWidth={1} borderStyle="solid" borderColor="border.default"
         borderRadius={2} backgroundColor="canvas.default"
         display="flex" flexDirection="column"
         as="article">
      <Box borderBottomWidth={1} borderBottomStyle="solid"
           borderBottomColor="border.default"
           borderTopLeftRadius={2}
           borderTopRightRadius={2}
           p={3}
           backgroundColor="canvas.subtle"
           as="header">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h3" sx={{fontSize: 1, fontWeight: "bold"}}
                   aria-label={name}>
            {icon ? <StyledOcticon sx={{mr: 2}} icon={icon}/> : null}
            {link
                ? <Link href={link} target="_blank">{name}</Link>
                : <Text>{name}</Text>}
          </Heading>

          {statusBadge
              ? <img alt={`Status badge for ${name}`} src={statusBadge}/>
              : null}
        </Box>
      </Box>
      <Box p={3} as="section" flexGrow="1">
        {children}
      </Box>
      {footer ?
          <Box
              as="aside" aria-label={`used technologies in ${name}`}
              borderTopStyle="solid" borderTopColor="border.default"
              borderTopWidth={1} maxHeight=""
              p={3}>
            <Text fontSize={0} color="fg.muted">{footer}</Text>
          </Box> : null}
    </Box>
)

type Props = {
  children: React.ReactNode
}
const Projects = ({children}: Props) => (

    <Box display="grid"
         gridTemplateColumns={["none", "none", "1fr 1fr"]}
         sx={{gap: 3}}>{children}</Box>
)

export default Projects