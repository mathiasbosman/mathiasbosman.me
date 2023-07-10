import {Box, Heading, Link, Text, Timeline, Tooltip} from "@primer/react";
import {
  CodeIcon,
  CodeReviewIcon,
  GoalIcon,
  MortarBoardIcon,
  OrganizationIcon
} from "@primer/octicons-react";
import React from "react";
import {Constants} from "../../Constants";

const ExperienceAndEducation = () => (
    <Box as="section" mt={5}>
      <Heading as="h2"
               sx={{textAlign: ["center", "center", "left"]}}>Experience &amp; education</Heading>
      <Timeline clipSidebar>

        <Timeline.Item>
          <Timeline.Badge>
            <GoalIcon/>
          </Timeline.Badge>
          <Timeline.Body sx={{color: "fg.default"}}>
            <Heading as="h3" sx={{fontSize: 1, fontWeight: "normal"}}>
              <Text fontWeight="bold" mr={1}>Project manager</Text>
              at <Link href={Constants.URL_FLANDERS} target="_blank"
                       sx={{fontWeight: "bold"}}>the
              Flemish Government</Link>
            </Heading>
            <Text as="i">2023 - present</Text>
            <Box
                borderWidth="1px" borderStyle="solid" borderColor="border.default" borderRadius={2}
                as="aside" aria-label="Employment details" p={3} mt={2}>
              <Text>Project manager for a development team that develops and maintains applications
                for the <strong>department of Environment</strong>.</Text>
            </Box>
          </Timeline.Body>
        </Timeline.Item>


        <Timeline.Item>
          <Timeline.Badge>
            <CodeIcon/>
          </Timeline.Badge>
          <Timeline.Body sx={{color: "fg.default"}}>
            <Heading as="h3" sx={{fontSize: 1, fontWeight: "normal"}}>
              <Text mr={1}>Java programmer</Text>
              at <Link href={Constants.URL_FLANDERS} target="_blank">the
              Flemish Government</Link>
            </Heading>
            <Text as="i">2018 - 2022</Text>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <CodeReviewIcon/>
          </Timeline.Badge>
          <Timeline.Body sx={{color: "fg.default"}}>
            <Text mr={1}>Application manager</Text>
            at <Link href={Constants.URL_FLANDERS} target="_blank">
            the Flemish Government
          </Link>
            <br/>2016 - 2018
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <OrganizationIcon/>
          </Timeline.Badge>
          <Timeline.Body sx={{color: "fg.default"}}>
            <Text mr={1}>Expert employee system / IT-support</Text>
            at <Link href={Constants.URL_FLANDERS} target="_blank">
            the Flemish Government
          </Link>
            <br/>2013 - 2016
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Break/>
        <Timeline.Item>
          <Timeline.Badge>
            <MortarBoardIcon/>
          </Timeline.Badge>
          <Timeline.Body sx={{color: "fg.default"}}>
            <Text mr={1}>Stage lighting</Text>
            at <Link href="https://gsauk.org/" target="_blank">
            GSA
          </Link>
            <br/>2017
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Break/>
        <Timeline.Item>
          <Timeline.Badge>
            <CodeIcon/>
          </Timeline.Badge>
          <Timeline.Body sx={{color: "fg.default"}}>
            <Text mr={1}>PHP Web developer</Text>
            at <Link href="http://www.echoweb.be" target="_blank">Echoweb</Link>
            <br/>2013
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <CodeIcon/>
          </Timeline.Badge>
          <Timeline.Body sx={{color: "fg.default"}}>
            <Text mr={1}>Web developer</Text>
            at <Link href="https://www.procius.com/" target="_blank">
            Procius Limited</Link>
            <br/>2012 (internship)
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Break/>
        <Timeline.Item>
          <Timeline.Badge>
            <MortarBoardIcon/>
          </Timeline.Badge>
          <Timeline.Body sx={{color: "fg.default"}}>
            <Text mr={1}><Tooltip aria-label="Bachelor of Applied Science">B.A.Sc.</Tooltip>
              &nbsp;Multimedia &amp; Programming</Text>
            at the <Link href="https://www.ugent.be/en" target="_blank">
            University of Ghent
          </Link>
            <br/>2009 - 2012
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <MortarBoardIcon/>
          </Timeline.Badge>
          <Timeline.Body sx={{color: "fg.default"}}>
            <Text mr={1}>Applied Computer Science</Text>
            at <Link href="https://www.ktad.be/" target="_blank">
            KT@ Dendermonde
          </Link>
            <br/>2007 - 2009
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Break/>
      </Timeline>

      <Text sx={{fontStyle: 'italic', color: 'fg.muted'}}>For more information check out <Link href={Constants.URL_LINKEDIN_PROFILE} target="_blank">my LinkedIn profile</Link>.</Text>
    </Box>
)

export default ExperienceAndEducation