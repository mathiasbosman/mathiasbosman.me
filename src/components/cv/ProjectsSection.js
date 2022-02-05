import React from "react";
import {AlertIcon, RepoIcon, TelescopeIcon} from "@primer/octicons-react";
import Projects, {ProjectElement} from "./ProjectElement";
import {Box, Heading, Link, StyledOcticon, Text} from "@primer/react";
import {URL_GITHUB_PROFILE} from "../../Constants";

export default class ProjectsSection extends React.Component {

  render() {
    return <Box mt={5}>
      <Heading as="h2">Projects</Heading>
      <Projects>
        <ProjectElement
            name="File Services"
            footer="Java"
            link={URL_GITHUB_PROFILE + "/file-services"}
            statusBadge={URL_GITHUB_PROFILE + "/file-services/actions/workflows/build.yml/badge.svg"}
            icon={RepoIcon}>
          <Text>Simple and lightweight library for open source file services
            such as S3 and Java NIO.</Text>
        </ProjectElement>
        <ProjectElement
            name="mathiasbosman.be"
            footer="Html, CSS, Javascript, React"
            link={URL_GITHUB_PROFILE + "/mathiasbosman.github.io"}
            statusBadge={URL_GITHUB_PROFILE + "/mathiasbosman.github.io/actions/workflows/ci.yml/badge.svg"}
            icon={RepoIcon}>
          <Text>This very website!<br/>
            Created using Facebook&apos;s <Link href="https://reactjs.org"
                                                target="_blank">React
              library</Link> and GitHub&apos;s <Link href="https://primer.style"
                                                     target="_blank">Primer.Style</Link>.</Text>
        </ProjectElement>
        <ProjectElement name="Cryptobot"
                        footer="Java"
                        link={URL_GITHUB_PROFILE + "/cryptobot"}
                        icon={RepoIcon}>
          <Box mb={2}><Text>A trial crypto currency bot integration for the <Link
              href="https://bitvavo.com/" target="_blank">Bitvavo</Link> API.
            <br/>
            Purely for academic purposes.. truly.
          </Text></Box>
          <Text>
            <StyledOcticon sx={{color: "attention.emphasis", mr: 1}}
                           icon={AlertIcon}/>
            Very much work in progress
          </Text>
        </ProjectElement>
        <ProjectElement name="Coming soon..."
                        icon={TelescopeIcon}>
          <Text>Creating some simple re-usable React components.<br/>
            For more projects you can visit <Link href={URL_GITHUB_PROFILE}
            target="_blank">my GitHub profile</Link>.</Text>
        </ProjectElement>
      </Projects>
    </Box>
  }
}