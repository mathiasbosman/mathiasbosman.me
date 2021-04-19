import {BorderBox, Flex, Link, StyledOcticon, Text} from "@primer/components";
import React from "react";
import Copyright from "./Copyright";
import {HeartFillIcon} from "@primer/octicons-react";

export default class Footer extends React.Component {
  render() {
    return <BorderBox as="footer" borderWidth={0} borderTopWidth={1} mt={5}
                      pt={5} borderRadius={0} color="text.secondary">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex flex={1}>
          <Text><Copyright name="Mathias Bosman"/></Text>
        </Flex>
        <Flex flex={1} justifyContent="center">
          <Link href="https://github.com/mathiasbosman"
                target="_blank" mr={2}>GitHub</Link>
          <Link href="https://www.linkedin.com/in/mathiasbosman"
                target="_blank" ml={2}>LinkedIn</Link>
        </Flex>
        <Flex flex={1} justifyContent="flex-end">
          <Text textAlign="right">
            Made with<StyledOcticon ml={1} color="text.danger"
                                    icon={HeartFillIcon}/>
            <Link mx={1} href="https://reactjs.org/"
                  target="_blank">React</Link>
            and <Link href="https://primer.style/"
                      target="_blank">Primer.style</Link>
          </Text>
        </Flex>
      </Flex>
    </BorderBox>;
  }
}