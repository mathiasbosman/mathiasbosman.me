import {BorderBox, Flex, Link, StyledOcticon, Text} from "@primer/components";
import React from "react";
import Copyright from "./Copyright";
import {HeartFillIcon} from "@primer/octicons-react";

export default class Footer extends React.Component {
  render() {
    return <BorderBox as="footer" borderWidth={0} borderTopWidth={1} mt={5}
                      pt={5} borderRadius={0} color="text.secondary">
      <Flex justifyContent="space-between" alignItems="center">
        <Flex justifyContent="left" flex={1}>
          <Link mr={3} href="https://github.com/mathiasbosman"
                target="_blank">GitHub</Link>
          <Link mr={3}
                href="https://www.linkedin.com/in/mathiasbosman"
                target="_blank">LinkedIn</Link>
          <Link mr={3}
                href="https://twitter.com/MathiasBosman"
                target="_blank">Twitter</Link>
        </Flex>
        <Flex flex={1} justifyContent="center">
          <Text textAlign="center"><Copyright name="Mathias Bosman"/></Text>
        </Flex>
        <Flex flex={1} justifyContent="right">
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