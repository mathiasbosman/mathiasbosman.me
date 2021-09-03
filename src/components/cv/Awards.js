import React from "react";
import {Box, Heading, Link, Text} from "@primer/components";

export default class Awards extends React.Component {

  render() {
    return <Box>
      <Heading mt={5}>Awards</Heading>

      <Box
          borderWidth="1px" borderStyle="solid" borderColor="border.primary" borderRadius={2}
          p={3}>
        <Text>2011 ·</Text>
        <Link mx={1} href="https://cera-award.be/" target="_blank"
              fontWeight="bold">CERA Award</Link>
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