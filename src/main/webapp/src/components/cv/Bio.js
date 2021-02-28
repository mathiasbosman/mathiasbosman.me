import {
  Avatar,
  BorderBox,
  Box,
  Flex,
  Heading,
    Text,
  Link,
  Pagehead
} from "@primer/components";
import Age from "../Age";
import {URL_FLANDERS} from "../../Constants";
import React from "react";

export default class Bio extends React.Component {
  render() {
    return <Flex mx={3} className="flexWrapper">
      <Box>
        <BorderBox className="avatarContainer" mr={0}>
          <Avatar className="avatar" itemProp="image"
                  alt="Mathias Bosman"
                  src="/assets/images/avatar.webp"/>
        </BorderBox>
      </Box>
      <Box flexGrow={1}>
        <Pagehead fontSize={3} as="h1" flexGrow={1} px={3}>
            <span itemProp="givenName">Mathias</span>&nbsp;
            <span itemProp="familyName">Bosman</span>

        </Pagehead>
        <Heading as="aside" fontSize={2} mb={2} px={3}>Web designer,
          Java
          developer &amp; network engineer</Heading>
        <Box px={3}>
          <Text fontSize={1} as="p" itemProp="description">
            Known as "The little one", I'm a web designer and Java
            developer
            living in the outskirts of <Link target="_blank"
                                             itemProp="homeLocation"
                                             href="https://www.google.com/maps/place/9200+Dendermonde/">Dendermonde,
            Belgium</Link> and
            currently <Age birthdate="1990-12-05"/> of age. Welcome
            to my
            online personal resume!<br/>
            At the moment I'm full-time employed at the Department
            of
            Environment of the <Link target="_blank"
                                     href={URL_FLANDERS}>Flemish
            Government</Link>.
            In my spare time you will find me on my (not so) super
            expensive
            Decathlon race bike or setting up some small network
            somewhere.
          </Text>
        </Box>
      </Box>
    </Flex>;
  }
}