import React from "react";
import {LAYOUT_WIDTH} from "../Constants";
import {BorderBox, Box, Heading, Link, Text} from "@primer/components";
import {theme} from "@primer/components/lib/theme-preval";
import "@primer/css/blankslate/index.scss";

export default class ErrorPage extends React.Component {
  render() {
    return <BorderBox boxShadow={theme.shadows.medium} as="main"
                      backgroundColor="white" maxWidth={LAYOUT_WIDTH} mx="auto"
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