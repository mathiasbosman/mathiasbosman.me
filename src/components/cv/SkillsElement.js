import PropTypes from "prop-types";
import {Box, Grid, ProgressBar, Text} from "@primer/components";
import React from "react";

export function SkillsElement({skill, percentage, color, className}) {
  return (
      <Box>
        <Text className={className}>{skill}</Text>
        <Box pr={3}>
          <ProgressBar bg={color} progress={percentage}/>
        </Box>
      </Box>);
}

SkillsElement.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}

export default function Skills({children}) {
  return (
      <Grid alignItems="center" gridTemplateColumns="50% 50%" gridGap={2}>
        {children}
      </Grid>);
}