import React from "react";
import {Box, Heading, Link} from "@primer/react";
import {ChecklistIcon, TrophyIcon} from "@primer/octicons-react";

const Awards = () => (
    <Box as="section" mt={5}>
      <Heading as="h2" sx={{textAlign: ["center", "center", "left"]}}>Awards &amp; certificates</Heading>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>

        <Box sx={{mt: 2}}>
          <ChecklistIcon/> 2023 Mastering IT management
          (<Link aria-label="Link to Vlerick Business School website" href="https://www.vlerick.com/en/" target="_blank">Vlerick Business School</Link>)
        </Box>

        <Box sx={{mt: 2}}>
          <TrophyIcon/> 2011 <Link aria-label="Link to CERA award website"
                                   href="https://cera-award.be/"
                                   target="_blank">CERA award</Link>
        </Box>
      </Box>
    </Box>
)

export default Awards