import React from "react";
import {Flash, Heading, Text} from "@primer/components";
import MailToLink from "../MailToLink";

export default class Contact extends React.Component {

  render() {
    return <>
      <Heading mt={5}>Contact</Heading>
      <Text>If you would like to ask for my phone number or setup a small
        to medium sized network at your home or office you can send me a
        message.
      </Text>

      <Flash my={3} className="warning" variant="warning">Be advised that I will only be able to
        setup
        a network during weekends or official holidays as this is my secondary
        occupation.
      </Flash>
      <Text>Still interested?
        <MailToLink variant="small" mx={1} mail="bosmanmathias{@}gmail{.}com">
          Send me an email
        </MailToLink>to get in touch! </Text>
    </>;
  }
}