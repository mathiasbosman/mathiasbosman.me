import {Box, Link, StyledOcticon} from "@primer/react";
import React from "react";
import {MarkGithubIcon} from "@primer/octicons-react";
import {URL_GITHUB_PROFILE} from "../Constants";

export default class Footer extends React.Component {
  render() {
    return <Box
        borderStyle="solid" borderColor="border.default"
        as="footer" borderWidth={0} borderTopWidth={1} mt={5} pt={5} color="fg.muted">
        <Box flex={1} display="flex" justifyContent="center">
          <Link sx={{color: "fg.subtle"}} hoverColor="fg.muted" href={URL_GITHUB_PROFILE} target="_blank">
            <StyledOcticon size={24} icon={MarkGithubIcon} />
          </Link>
        </Box>
    </Box>;
  }
}
