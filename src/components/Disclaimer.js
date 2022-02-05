import {Box, Text} from "@primer/react";
import React from "react";
import {LAYOUT_WIDTH} from "../Constants";
import Copyright from "./Copyright";
import packageJson from "../../package.json";

export default class Disclaimer extends React.Component {
  render() {
    return <Box
        borderWidth={0}
        borderTopWidth={[1, 1, 0]}
        borderStyle="solid" borderColor="border.default"
        flex={1} display="flex" justifyContent="center" mx="auto" p={3} maxWidth={LAYOUT_WIDTH}>
      <Text fontSize={0} color={"fg.muted"}>
        <Copyright name={packageJson.author}/> - rev {packageJson.version}</Text>
    </Box>;
  }
}
