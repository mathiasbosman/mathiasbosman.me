import React from "react";
import "../styles/home.scss";
import {BorderBox, Box, Flex} from "@primer/components";
import ExperienceAndEducation from "../components/cv/ExperienceAndEducation";
import SkillsSection from "../components/cv/SkillsSection";
import Bio from "../components/cv/Bio";
import Contact from "../components/cv/Contact";
import Awards from "../components/cv/Awards";
import {LAYOUT_WIDTH,} from "../Constants";
import Footer from "../components/Footer";
import {theme} from "@primer/components/lib/theme-preval";

export default class Home extends React.Component {

  render() {
    return (
        <BorderBox boxShadow={theme.shadows.medium} as="main"
                   maxWidth={LAYOUT_WIDTH} mx="auto" my={3} p={3}>
          <section>
            <Bio/>
          </section>

          <section>
            <Flex className="flexWrapper" justifyItems="space-between">
              <Box flexBasis="100%" as="section" px={3}>
                <ExperienceAndEducation/>
              </Box>

              <Box flexBasis="100%" as="section" px={3}>
                <SkillsSection/>
                <Awards/>
              </Box>
            </Flex>
          </section>
          <Box px={3}>
            <Contact/>
          </Box>
          <Footer/>
        </BorderBox>
    );
  }
}
