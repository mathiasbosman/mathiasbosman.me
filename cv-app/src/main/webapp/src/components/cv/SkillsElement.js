import PropTypes from "prop-types";
import {Box, Grid, ProgressBar, Text} from "@primer/components";

export function SkillsElement({skill, percentage}) {
  return (
      <>
        <Text>{skill}</Text>
        <Box pr={3}>
          <ProgressBar progress={percentage}/>
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