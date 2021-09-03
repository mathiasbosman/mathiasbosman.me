import React from "react";
import {LAYOUT_WIDTH} from "../Constants";
import {Box, Heading, Link, Text} from "@primer/components";
import "@primer/css/blankslate/index.scss";
import SecurityResearcherImage from "../assets/security_researcher.svg";

export default class NotFound extends React.Component {
  render() {
    return <Box
        borderWidth="1px" borderStyle="solid" borderColor="border.primary" borderRadius={2}
        boxShadow="shadows.medium" as="main" maxWidth={LAYOUT_WIDTH} mx="auto" bg="bg.canvas" my={3} p={3}>
      <div className="blankslate">
        <img src={SecurityResearcherImage} alt="All for one!"/>
        <Heading as="h1" my={1} fontSize={3}>This page was not found!</Heading>
        <Box mb={3}>
          <Text>
            The page you are trying to visit does not exist or you do not have the permission to view it.
          </Text>
        </Box>
        <Link href="/">Return to the homepage</Link>
      </div>
    </Box>
  }
}
