import React from "react";
import {AlertIcon, RepoIcon} from "@primer/octicons-react";
import Projects, {ProjectElement} from "./ProjectElement";
import {Box, Heading, Link, StyledOcticon, Text} from "@primer/react";
import {Constants} from "../../Constants";

const ProjectsSection = () => (
    <Box as="section" mt={5}>
      <Heading as="h2" sx={{textAlign: ["center", "center", "left"]}}>Projects</Heading>
      <Projects>
        <ProjectElement
            name="mathiasbosman.be"
            footer={["Html", "CSS", "Javascript", "TypeScript", "React", "Cypress"]}
            link={Constants.URL_GITHUB_PROFILE + "/mathiasbosman.github.io"}
            icon={RepoIcon}>
          <Text>This very website!<br/>
            Created using Facebook&apos;s
            <Link href="https://reactjs.org" target="_blank">React library</Link> and
            GitHub&apos;s <Link href="https://primer.style"
                                target="_blank">Primer.Style</Link>.</Text>
        </ProjectElement>
        <ProjectElement name="lit-sandbox"
                        footer={["lit", "TypeScript", "Vite", "Vitest"]}
                        link={Constants.URL_GITHUB_PROFILE + "/lit-sandbox"}
                        statusBadge={Constants.URL_GITHUB_PROFILE
                            + "/lit-sandbox/actions/workflows/ci.yml/badge.svg"}
                        icon={RepoIcon}>
          <Box mb={2}>
            <Text>Sandbox project I used to learn some <Link href="https://lit.dev"
                                                             target="_lank">lit</Link>.<br/>
              Uses <Link href="https://vitejs.dev" target="_blank">Vite</Link> and <Link
                  href="http://vitest.dev" target="_blank">Vitest</Link>.</Text>
          </Box>
        </ProjectElement>
        <ProjectElement
            name="File Services"
            footer={["Java"]}
            link={Constants.URL_GITHUB_PROFILE + "/file-services"}
            statusBadge={Constants.URL_GITHUB_PROFILE
                + "/file-services/actions/workflows/build.yml/badge.svg"}
            icon={RepoIcon}>
          <Text>Simple and lightweight library for open source file services
            such as S3 and Java NIO.</Text>
        </ProjectElement>
        <ProjectElement name="Cryptobot"
                        footer={["Java", "Spring"]}
                        link={Constants.URL_GITHUB_PROFILE + "/cryptobot"}
                        icon={RepoIcon}>
          <Box mb={2}><Text>A trial crypto currency bot integration for
            the <Link
                href="https://bitvavo.com/" target="_blank">Bitvavo</Link> API.
            <br/>
            Purely for academic purposes... truly.
          </Text></Box>
          <Text>
            <StyledOcticon sx={{color: "attention.emphasis", mr: 1}}
                           icon={AlertIcon}/>
            Very much work in progress
          </Text>
        </ProjectElement>
        <ProjectElement name="MQTT Stresstest"
                        footer={["Java", "Mqtt", "Spring"]}
                        link={Constants.URL_GITHUB_PROFILE + "/mqtt-stresstest"}
                        statusBadge={Constants.URL_GITHUB_PROFILE
                            + "/mqtt-stresstest/actions/workflows/codeql-analysis.yml/badge.svg"}
                        icon={RepoIcon}>
          <Box mb={2}>
            <Text>A Spring Boot application to stresstest a MQTT service.<br/>
              Originally used to stresstest ThingsBoard.</Text>
          </Box>
        </ProjectElement>
        <ProjectElement name="Inverter data export"
                        footer={["Java", "REST", "Spring"]}
                        link={Constants.URL_GITHUB_PROFILE + "/inverter-data-export"}
                        statusBadge={Constants.URL_GITHUB_PROFILE
                            + "/inverter-data-export/actions/workflows/build.yml/badge.svg"}
                        icon={RepoIcon}>
          <Box mb={2}>
            <Text>An application that enables the export of data from converter to external systems.<br/>
              Currently supports the <Link href="https://www.alpha-ess.com"
                                           target="_blank">AlphaESS</Link> battery / inverter
              and <Link href="https://www.energyid.eu" target="_blank">the EnergyID platform</Link>.</Text>
          </Box>
          <Text>
            <StyledOcticon sx={{color: "attention.emphasis", mr: 1}}
                           icon={AlertIcon}/>
            Improvements possible
          </Text>
        </ProjectElement>
        <ProjectElement name="Blog API"
                        footer={["Java", "REST", "Spring"]}
                        link={Constants.URL_GITHUB_PROFILE + "/blog-api"}
                        statusBadge={Constants.URL_GITHUB_PROFILE
                            + "/blog-api/actions/workflows/build.yml/badge.svg"}
                        icon={RepoIcon}>
          <Box mb={2}>
            <Text>Very simplistic Blog API.<br/>
              The intended use was to be an integration with this website.</Text>
          </Box>
        </ProjectElement>
      </Projects>
    </Box>
)

export default ProjectsSection