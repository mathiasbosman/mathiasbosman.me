import {BorderBox, Flex, Link, StyledOcticon, Text} from "@primer/components";
import React from "react";
import Copyright from "./Copyright";
import {HeartFillIcon} from "@primer/octicons-react";

export default class Footer extends React.Component {
  render() {
    return <BorderBox as="footer" borderWidth={0} borderTopWidth={1} mt={5}
                      pt={5} borderRadius={0} color="text.secondary">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex justifyContent="left">
          <Link mr={3} href="https://github.com/mathiasbosman">GitHub</Link>
          <Link mx={3}
                href="https://www.linkedin.com/in/mathiasbosman">LinkedIn</Link>
        </Flex>
        <Text textAlign="center">
          <Copyright name="Mathias Bosman"/>
        </Text>
        <Text textAlign="right">
          Made with<StyledOcticon ml={1} color="text.danger"
                                  icon={HeartFillIcon}/>,
          <Link mx={1} href="https://reactjs.org/"
                target="_blank">React</Link>
          and <Link href="https://primer.style/"
                    target="_blank">Primer.style</Link>
        </Text>
      </Flex>
    </BorderBox>;
  }
}