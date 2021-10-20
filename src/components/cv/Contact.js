import React from "react";
import {Box, Flash, Heading, Text} from "@primer/components";
import MailToLink from "../MailToLink";
import {CONTACT_EMAIL} from "../../Constants";

export default class Contact extends React.Component {

  render() {
    return <Box mt={5}>
      <Heading>Contact</Heading>
      <Text>If you would like to ask for my phone number or setup a small
        to medium sized network at your home or office you can send me a
        message.
      </Text>

      <Flash sx={{my: 3}} className="warning" variant="warning">
        Be advised that I will only be able to setup a network during weekends
        or official holidays as this is my secondary occupation.
      </Flash>
      <Text>Still interested?
        <MailToLink safe={true} variant="small" mx={1} mail={CONTACT_EMAIL}>
          Send me an email
        </MailToLink>to get in touch!</Text>
    </Box>;
  }
}