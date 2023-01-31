import React from "react";
import {Constants} from "../Constants";
import {Box, Heading, Link, Text} from "@primer/react";

export const NotFound = () => (
    <Box
        borderWidth={[0, 0, 1]} borderStyle="solid" borderColor="border.default" borderRadius={2}
        boxShadow="shadows.medium" as="main" maxWidth={Constants.LAYOUT_WIDTH} mx="auto" bg="canvas.default" my={3} p={3}
        textAlign="center" lineHeight={2}>
        <img src="/assets/images/security_researcher.svg" alt="All for one!"/>
        <Heading as="h1" sx={{my: 1, fontSize: 3}}>This page was not found!</Heading>
        <Box mb={3}>
          <Text>
            The page you are trying to visit does not exist or you do not have the permission to view it.
          </Text>
        </Box>
        <Link href="/">Return to the homepage</Link>
    </Box>
)

export default NotFound