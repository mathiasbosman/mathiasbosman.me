import {Box, Link, Text} from "@primer/react";
import React from "react";
import Copyright from "./Copyright";
import {Constants} from "../Constants";
import {version} from "../../package.json";

const Footer = () => (
  <Box fontSize={0}
       display="flex" justifyContent="space-between" alignItems="center"
       as="footer" mt={1} pt={3}
       px={[3, 3, 0]}
       pb={[3, 3, 0]} color="fg.muted">

    <Box display="flex" alignItems="center">
      <Copyright name="Mathias Bosman" version={version}/>
    </Box>

    <Box display="flex" flexWrap="wrap">
      <Text mr={3}><Link muted aria-label="Link to GitHub profile"
                         href={Constants.URL_GITHUB_PROFILE} target="_blank">
        GitHub
      </Link></Text>
      <Text><Link muted aria-label="Link to LinkedIn profile"
                  href={Constants.URL_LINKED_PROFILE}
                  target="_blank">
        LinkedIn
      </Link></Text>
    </Box>
  </Box>
)

export default Footer