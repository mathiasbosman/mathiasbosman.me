import React from "react";
import {BorderBox, Box, Heading, Link, Text} from "@primer/components";

export default class Awards extends React.Component {

  render() {
    return <>
      <Heading mt={5}>Awards</Heading>

      <BorderBox p={3}>
        <Text>2011 ·</Text>
        <Link mx={1} href="https://cera-award.be/" target="_blank"
              fontWeight="bold">CERA Award</Link>
        <Box>
          <Text>
            During my highschool education our team won the CERA Award for
            creating a PHP web portal for evaluating employees.
          </Text>
        </Box>
      </BorderBox>
    </>;
  }
}