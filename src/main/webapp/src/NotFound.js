import React from "react";
import {LAYOUT_WIDTH} from "./Constants";
import {BorderBox, Box, Heading, Link, Text} from "@primer/components";
import {theme} from "@primer/components/lib/theme-preval";
import "@primer/css/blankslate/index.scss";

export default class NotFound extends React.Component {
  render() {
    return <BorderBox boxShadow={theme.shadows.medium} as="main"
                      backgroundColor="white" maxWidth={LAYOUT_WIDTH} mx="auto"
                      my={3} p={3}>
      <div className="blankslate">
        <img src="/assets/images/all_for_one.webp" alt="All for one!"/>
        <Heading as="h1" my={1} fontSize={3}>This page was not found!</Heading>
        <Box mb={3}>
          <Text>
            The page you are trying to visit does not exist or you do not have
            the permission to view it.
          </Text>
        </Box>
        <Link href="/">Return to the homepage</Link>
      </div>
    </BorderBox>
  }
}