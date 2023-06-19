import React from "react";
import {Button} from "@primer/react";
import {decrypt} from "../Utils";
import {PaperAirplaneIcon} from "@primer/octicons-react";

/**
 * Creates a button to send an email.
 * If "safe" the given property "email" will be decrypted
 */

type LinkProps = {
  mail: string,
  safe: boolean,
  children?:React.ReactNode
}

const MailToLink = (properties:LinkProps) => {

  function _sendMail(email:string, safe:boolean) {
    if (safe) {
      email = decrypt(email);
    }
    window.open(`mailto:${email}`, '_blank');
  }

  return (
      <Button leadingIcon={PaperAirplaneIcon} onClick={() => _sendMail(properties.mail, properties.safe)}>
        {properties.children}
      </Button>
  )
}

export default MailToLink