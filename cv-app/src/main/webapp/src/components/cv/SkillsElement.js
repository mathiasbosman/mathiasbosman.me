import PropTypes from "prop-types";
import {Box, Grid, ProgressBar, Text} from "@primer/components";

export function SkillsElement({skill, percentage, color, className}) {
  return (
      <>
        <Text className={className}>{skill}</Text>
        <Box pr={3}>
          <ProgressBar bg={color} progress={percentage}/>
        </Box>
      </>);
}

SkillsElement.propTypes = {
  skill: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
}

export default function Skills({children}) {
  return (
      <Grid gridTemplateColumns="50% 50%" gridGap={2}>
        {children}
      </Grid>);
}