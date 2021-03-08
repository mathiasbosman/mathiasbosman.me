import React from "react";
import {LAYOUT_WIDTH, PREFERED_THEME} from "../Constants";
import {BorderBox, Box, Heading, Link, Text} from "@primer/components";
import "@primer/css/blankslate/index.scss";

export default class ErrorPage extends React.Component {
  render() {
    return <BorderBox boxShadow={PREFERED_THEME.shadows.medium} as="main"
                      bg="canvas" maxWidth={LAYOUT_WIDTH} mx="auto"
                      my={3} p={3}>
      <div className="blankslate">
        <img src="/assets/images/code_nav.webp" alt="Error"/>
        <Heading as="h1" my={1} fontSize={3}>Beep Boop #!@£%</Heading>
        <Box mb={3}>
          <Text>
            An error has occured on the server and has been logged.
          </Text>
        </Box>
        <Link href="/">Return to the homepage</Link>
      </div>
    </BorderBox>
  }
}