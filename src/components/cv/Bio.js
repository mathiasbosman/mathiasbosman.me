import {Avatar, Box, Heading, Link, Pagehead, Text} from "@primer/react";
import Age from "../Age";
import {URL_FLANDERS} from "../../Constants";
import React from "react";

export default class Bio extends React.Component {
  render() {
    return <Box display="flex" mx={3} flexWrap={["wrap", "wrap", "nowrap"]}>
      <Box mx={"auto"} py={2}>
        <Box
            borderWidth="1px" borderStyle="solid" borderColor="border.default"
            borderRadius="50%" >
          <Avatar size="150" src="/assets/images/mathias.png" />
        </Box>
      </Box>
      <Box flexGrow={1}>
        <Pagehead as="h1" sx={{flexGrow: 1, p: [0,0,3], textAlign: ["center", "center", "left"]}}>
          <Text fontSize={5} fontWeight="bold"
                itemProp="givenName">Mathias</Text>&nbsp;
          <Text fontSize={5} fontWeight="bold"
                itemProp="familyName">Bosman</Text>
        </Pagehead>
        <Heading sx={{fontSize: 2, mb: 2, px: [0,0,3]}}>Web designer,
          Java developer &amp; network engineer</Heading>
        <Box px={[0,0,3]}>
          <Text as="p" itemProp="description">
            Known as &quot;The little one&quot;, I&apos;m a web designer and
            Java
            developer
            living in <span itemProp="homeLocation">Lebbeke, Belgium</span> and
            currently <Age birthdate="1990-12-05"/> of age.
            Welcome to my online personal resume!<br/>
            At the moment I&apos;m full-time employed at the Department of
            Environment of the <Link target="_blank"
                                     href={URL_FLANDERS}>Flemish
            Government</Link>.<br/>
            In my spare time you will find me on my (not so) super
            expensive Decathlon race bike or setting up some small network
            somewhere.
          </Text>
        </Box>
      </Box>
    </Box>;
  }
}
