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
      <Grid className="flexGrid" alignItems="center" gridGap={2}>
        {children}
      </Grid>);
}