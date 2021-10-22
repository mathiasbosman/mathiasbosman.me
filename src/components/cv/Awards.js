import React from "react";
import {Box, Heading, Link, Text} from "@primer/components";

export default class Awards extends React.Component {

  render() {
    return <Box mt={5}>
      <Heading as="h2">Awards</Heading>
      <Box
          borderWidth="1px" borderStyle="solid" borderColor="border.default" borderRadius={2}
          p={3}>
        <Text>2011 ·</Text>
        <Link sx={{mx: 1, fontWeight: "bold"}} href="https://cera-award.be/" target="_blank">CERA Award</Link>
        <Box>
          <Text>
            During my high school education our project team won the CERA Award for
            creating a PHP web portal for evaluating employees.
          </Text>
        </Box>
      </Box>
    </Box>;
  }
}