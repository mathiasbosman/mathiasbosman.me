import {Box, ProgressBar, Text} from "@primer/react";
import React from "react";

type ElementProps = {
  skill: string,
  percentage: number,
  color?: string,
  className?: string
}
export const SkillsElement = ({skill, percentage, color, className}: ElementProps) => (
      <Box>
        <Text className={className}>{skill}</Text>
        <Box pr={3}>
          <ProgressBar bg={color} progress={percentage}/>
        </Box>
      </Box>
);

type Props = {
  children?: React.ReactNode
}

const Skills = ({children}: Props) => (
      <Box display="grid"
           gridTemplateColumns="1fr"
           sx={{gap: 3}}
           alignItems="end">
        {children}
      </Box>
)

export default Skills