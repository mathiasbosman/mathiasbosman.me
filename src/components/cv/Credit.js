import {Box, Heading, Link} from "@primer/components";
import React from "react";

export default class Credit extends React.Component {
  render() {
    return <>
      <Heading mt={5}>Credits</Heading>
      <Box>Credit where credit is due.<br/>I created this resume using
        <Link mx={1} href="https://reactjs.org/" target="_blank">
          React.js
          </Link>
        and Github's
        <Link mx={1} href="https://primer.style/"
                       target="_blank">Primer.style</Link>
        React components.<br/>
        The avatar was designed using the
        <Link mx={1} href="https://getavataaars.com/" target="_blank">
          Avataaars&nbsp;Generator
        </Link>
        developed by
        <Link ml={1} href="https://twitter.com/fangpenlin" target="_blank">
          Fang-Pen Lin</Link>,
        based on the Sketch library
        <Link mx={1} href="https://avataaars.com/" target="_blank">Avataaars</Link>
        designed by
        <Link ml={1} href="https://twitter.com/pablostanley" target="_blank">
          Pablo&nbsp;Stanley</Link>.<br/>
      </Box>
      <Box mt={2}>The source code of this resume can be found on
        <Link mx={1} href="https://github.com/mathiasbosman/mathiasbosman.github.io/" target="_blank">
        Github
        </Link>.</Box>
    </>
  }
}