import {
  BorderBox,
  Heading,
  Link,
  StyledOcticon,
  Text,
  Timeline,
  Tooltip
} from "@primer/components";
import {
  CodeIcon,
  CodeReviewIcon,
  MortarBoardIcon,
  OrganizationIcon
} from "@primer/octicons-react";
import React from "react";
import {URL_FLANDERS} from "../../Constants";

export default class ExperienceAndEducation extends React.Component {

  render() {
    return <>
      <Heading mt={5}>Experience &amp; education</Heading>
      <Timeline clipSidebar>
        <Timeline.Item>
          <Timeline.Badge bg="yellow.4">
            <StyledOcticon icon={CodeIcon}/>
          </Timeline.Badge>
          <Timeline.Body>
            <Heading as="h3" fontSize={1} fontWeight="normal">
              <Text fontWeight="bold" mr={1}>Java programmer</Text>
              at <Link href={URL_FLANDERS} target="_blank"
                       fontWeight="bold">the
              Flemish Government</Link>
            </Heading>
            <Text as="i">2018 - present</Text>
            <BorderBox as="aside" p={3} mt={2}>
              <Text>Currently I'm employed as a Java programmer for the
                department
                of Environment where I work on in-house applications.
                Mostly using frameworks such as Spring.</Text>
            </BorderBox>
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge bg="yellow.4">
            <StyledOcticon icon={CodeReviewIcon}/>
          </Timeline.Badge>
          <Timeline.Body>
            <Text mr={1}>Application
              manager</Text>
            at <Link href={URL_FLANDERS} target="_blank">the
            Flemish Government</Link>
            <br/>2016 - 2018
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge bg="yellow.4">
            <StyledOcticon icon={OrganizationIcon}/>
          </Timeline.Badge>
          <Timeline.Body>
            <Text mr={1}>Expert employee system /
              IT-support</Text>
            at <Link href={URL_FLANDERS} target="_blank">the
            Flemish Government</Link>
            <br/>2013 - 2016
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Break/>
        <Timeline.Item>
          <Timeline.Badge bg="green.3">
            <StyledOcticon icon={CodeIcon}/>
          </Timeline.Badge>
          <Timeline.Body>
            <Text mr={1}>PHP Web developer</Text>
            at <Link href="http://www.echoweb.be" target="_blank">Echoweb</Link>
            <br/>2013
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge bg="blue.3">
            <StyledOcticon icon={CodeIcon}/>
          </Timeline.Badge>
          <Timeline.Body>
            <Text mr={1}>Web developer</Text>
            at <Link href="https://www.procius.com/" target="_blank">Procius
            Limited</Link>
            <br/>2012 (internship)
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Break/>
        <Timeline.Item>
          <Timeline.Badge>
            <StyledOcticon icon={MortarBoardIcon}/>
          </Timeline.Badge>
          <Timeline.Body>
            <Text mr={1}><Tooltip as="abbr"
                                  aria-label="Bachelor of Applied Science">B.A.Sc.</Tooltip>
              &nbsp;Multimedia &amp; Programming</Text>
            at the <Link href="https://www.ugent.be/en" target="_blank">
            University of Ghent
          </Link>
            <br/>2009 - 2012
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <StyledOcticon icon={MortarBoardIcon}/>
          </Timeline.Badge>
          <Timeline.Body>
            <Text mr={1}>Stage lighting</Text>
            at <Link href="https://gsauk.org//en" target="_blank">
            GSA
          </Link>
            <br/>2014 - 2017
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Badge>
            <StyledOcticon icon={MortarBoardIcon}/>
          </Timeline.Badge>
          <Timeline.Body>
            <Text mr={1}>Applied Computer Science</Text>
            at <Link href="https://www.ktad.be/" target="_blank">
            KT@ Dendermonde
          </Link>
            <br/>2014 - 2017
          </Timeline.Body>
        </Timeline.Item>
        <Timeline.Break/>
      </Timeline>
    </>
  };
}