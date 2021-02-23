import {Heading} from "@primer/components";
import Skills, {SkillsElement} from "./SkillsElement";
import React from "react";

export default class SkillsSection extends React.Component {
  render() {
    return <>
      <Heading mt={5}>Skills</Heading>
      <Skills>
        <SkillsElement percentage={100}
                       skill="Drenched in awesomesauce"/>
        <SkillsElement percentage={80} skill="HTML + CSS + JS"/>
        <SkillsElement percentage={80}
                       skill="Version control (Git, SVN)"/>
        <SkillsElement percentage={70} skill="PHP"/>
        <SkillsElement percentage={70}
                       skill="Java (Spring, Hibernate, ...)"/>
        <SkillsElement percentage={70}
                       skill="Frontend frameworks (React, Thymeleaf, Wicket, ...)"/>
        <SkillsElement percentage={70}
                       skill="Databases (MySql, PostgreSql, Oracle)"/>
        <SkillsElement percentage={60} skill="SEO"/>
        <SkillsElement percentage={60} skill="Photoshop"/>
        <SkillsElement percentage={20}
                       skill="Nitting &amp; sewing"/>
      </Skills>
    </>
  }
}