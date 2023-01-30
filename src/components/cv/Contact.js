import React from "react";
import {Box, Flash, Heading, Text} from "@primer/react";
import MailToLink from "../MailToLink";
import {CONTACT_EMAIL} from "../../Constants";
import {PaperAirplaneIcon} from "@primer/octicons-react";

export default class Contact extends React.Component {

  render() {
    return <Box as="section" mt={5}>
      <Heading as="h2"
               sx={{textAlign: ["center", "center", "left"]}}>Contact</Heading>
      <Text>If you would like to ask for my phone number or setup a small
        to medium sized network at your home or office you can send me a
        message.
      </Text>

      <Flash sx={{my: 3}} variant="warning">
        Be advised that I will only be able to setup a network during weekends
        or official holidays as this is my secondary occupation.
      </Flash>

      <MailToLink safe={true} size="small" mail={CONTACT_EMAIL}
                  leadingIcon={PaperAirplaneIcon}>
        Send me an email to get in touch
      </MailToLink>
      <Box borderWidth={1} borderStyle="dotted" borderColor="border.default"
           borderRadius={2} as="code" sx={{display: "inline-block"}}
           bg={"canvas.subtle"} p={3} my={3} fontSize={1}>
        <Text color={"fg.subtle"}>&#47;&#47; or you can parse the following
          line</Text><br/>
        <Text color={"done.fg"}>const</Text>
        <Text> email = </Text>
        <Text color={"success.fg"}>&quot;mathias&quot;</Text>&nbsp;+&nbsp;
        <Text color={"open.fg"}>&quot;@&quot;</Text>&nbsp;+&nbsp;
        <Text color={"open.fg"}>&quot;mathiasbosman.be&quot;</Text>;
      </Box>

    </Box>;
  }
}