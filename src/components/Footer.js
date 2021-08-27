import {BorderBox, Flex, Link, Text} from "@primer/components";
import React from "react";
import Copyright from "./Copyright";
import packageJson from '../../package.json';

export default class Footer extends React.Component {
  render() {
    return <BorderBox as="footer" borderWidth={0} borderTopWidth={1} mt={5} pt={5} borderRadius={0} color="text.secondary">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flex={1}>
          <Text><Copyright name="Mathias Bosman"/> (v.&nbsp;{packageJson.version})</Text>
        </Flex>
        <Flex flex={1} justifyContent="flex-end">
          <Link href="https://www.linkedin.com/in/mathiasbosman" target="_blank" mr={2}>LinkedIn</Link>
          <Link href="https://github.com/mathiasbosman" target="_blank" ml={2}>GitHub</Link>
        </Flex>
      </Flex>
    </BorderBox>;
  }
}
