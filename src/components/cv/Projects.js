import React from "react";
import {AlertIcon, RepoIcon} from "@primer/octicons-react";
import Projects, {ProjectElement} from "./ProjectElement";
import {Box, Heading, Link, StyledOcticon, Text} from "@primer/components";

export default class ProjectsSection extends React.Component {

  render() {
    return <Box mt={5}>
      <Heading>Projects</Heading><Projects>
      <ProjectElement
          name="File Services"
          labels="Java"
          link="https://github.com/mathiasbosman/file-services"
          icon={RepoIcon}>
        <Text>Simple and lightweight library for open source file services
          such as S3 and Java NIO.</Text>
      </ProjectElement>
      <ProjectElement
          name="mathiasbosman.be"
          labels="Html, CSS, Javascript, React"
          link="https://github.com/mathiasbosman/file-services"
          icon={RepoIcon}>
        <Text>This very website!<br/>
          Created using Facebook&apos;s <Link href="https://reactjs.org"
                                              target="_blank">React
            library</Link> and GitHub&apos;s <Link href="https://primer.style"
                                                   target="_blank">Primer.Style</Link>.</Text>
      </ProjectElement>
      <ProjectElement name="Cryptobot"
                      labels="Java"
                      link="https://github.com/mathiasbosman/cryptobot"
                      icon={RepoIcon}>
        <Box mb={2}><Text>A trial crypto currency bot for the Bitvavo API.
          <br/>
          Purely for academic purposes.. truly.
        </Text></Box>
        <Text>
          <StyledOcticon sx={{color:"attention.emphasis", mr: 1}} icon={AlertIcon} />
          Very much work in progress
        </Text>
      </ProjectElement>
    </Projects>
    </Box>
  }
}