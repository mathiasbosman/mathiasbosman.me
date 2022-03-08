import {Box, Heading} from "@primer/react";
import Skills, {SkillsElement} from "./SkillsElement";
import React from "react";

export default class SkillsSection extends React.Component {
  render() {
    return <Box as="section" mt={5}>
      <Heading as="h2" sx={{textAlign: ["center", "center", "left"]}}>Skills</Heading>
      <Skills>
        <SkillsElement percentage={100}
                       skill="Drenched in awesomesauce"/>
        <SkillsElement percentage={80} skill="Html,&nbsp;Css,&nbsp;Javascript"/>
        <SkillsElement percentage={80}
                       skill="Version control (Git,&nbsp;SVN)"/>
        <SkillsElement percentage={70} skill="PHP"/>
        <SkillsElement percentage={70}
                       skill="Frontend tools (React,&nbsp;Thymeleaf,&nbsp;Wicket,&nbsp;...)"/>
        <SkillsElement percentage={70}
                       skill="Java (Spring,&nbsp;Hibernate,&nbsp;...)"/>
        <SkillsElement percentage={70}
                       skill="Databases (MySql,&nbsp;PostgreSql,&nbsp;Oracle)"/>
        <SkillsElement percentage={60} skill="SEO"/>
        <SkillsElement percentage={60} skill="Photoshop"/>
        <SkillsElement className="strikeThrough" percentage={20}
                       color="text.disabled"
                       skill="Nitting &amp; sewing"/>
      </Skills>
    </Box>
  }
}