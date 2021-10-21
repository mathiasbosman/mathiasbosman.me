import React from "react";
import {LAYOUT_WIDTH} from "../Constants";
import {Box, Heading, Link, Text} from "@primer/components";
import "@primer/css/blankslate/index.scss";
import BugHunterImage from "../assets/bug_hunter.svg";
/* @deprecated */
export default class ErrorPage extends React.Component {
  render() {
    return <Box
        borderWidth="1px" borderStyle="solid" borderColor="border.default" borderRadius={2}
        boxShadow="shadows.medium" as="main" bg="canvas.default" maxWidth={LAYOUT_WIDTH} mx="auto" my={3} p={3}>
      <div className="blankslate">
        <img src={BugHunterImage} alt="Error"/>
        <Heading as="h1" sx={{my :1, fontSize: 3}}>Beep Boop #!@£%</Heading>
        <Box mb={3}>
          <Text>
            An error has occurred on the server and has been logged.
          </Text>
        </Box>
        <Link href="/">Return to the homepage</Link>
      </div>
    </Box>
  }
}
