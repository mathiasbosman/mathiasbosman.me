import {Box, Link, Text} from "@primer/components";
import React from "react";
import Copyright from "./Copyright";

export default class Footer extends React.Component {
  render() {
    return <Box
        borderStyle="solid" borderColor="border.default"
        as="footer" borderWidth={0} borderTopWidth={1} mt={5} pt={5} color="fg.muted">
      <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="center">
        <Box display="flex" flexWrap="wrap" flex={1}>
          <Text><Copyright name="Mathias Bosman"/></Text>
        </Box>
        <Box display="flex" flexwrap="wrap" flex={1} justifyContent="flex-end">
          <Link href="https://www.linkedin.com/in/mathiasbosman" target="_blank" mr={2}>LinkedIn</Link>
          <Link href="https://github.com/mathiasbosman" target="_blank" ml={2}>GitHub</Link>
        </Box>
      </Box>
    </Box>;
  }
}
