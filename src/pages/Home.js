import React from "react";
import "../styles/main.scss";
import {BorderBox, Box, Flex} from "@primer/components";
import {LAYOUT_WIDTH} from "../Constants";
import Footer from "../components/Footer";
import Bio from "../components/cv/Bio";
import ExperienceAndEducation from "../components/cv/ExperienceAndEducation";
import SkillsSection from "../components/cv/SkillsSection";
import Awards from "../components/cv/Awards";
import Contact from "../components/cv/Contact";

export default class Home extends React.Component {

  render() {
    return (
        <>
          <main itemScope itemType="https://schema.org/Person">
            <BorderBox boxShadow="shadows.medium"
                       bg="bg.canvas" mx="auto" p={3}
                       maxWidth={LAYOUT_WIDTH}>
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
          </main>
        </>
    );
  }
}
