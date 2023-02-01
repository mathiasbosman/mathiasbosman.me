import React from "react";
import "../styles/main.scss";
import {Box} from "@primer/react";
import {Constants} from "../Constants";
import Footer from "../components/Footer";
import Bio from "../components/cv/Bio";
import ExperienceAndEducation from "../components/cv/ExperienceAndEducation";
import SkillsSection from "../components/cv/SkillsSection";
import Awards from "../components/cv/Awards";
import Contact from "../components/cv/Contact";
import ProjectsSection from "../components/cv/ProjectsSection";

const Home = () => (
    <Box itemScope itemType="https://schema.org/Person">
      <Box maxWidth={Constants.LAYOUT_WIDTH} mx="auto">
        <Box
            borderWidth={[0, 0, 1]}
            borderStyle="solid" borderColor="border.default"
            borderRadius={[0, 0, 2]}
            boxShadow="shadows.medium" bg="canvas.default" mx="auto"
            p={[0, 0, 3]}
            as="main"
        >
          <Bio/>
          <Box display="flex" flexWrap={["wrap", "wrap", "nowrap"]}
               justifyItems="space-between">
            <Box flexBasis="100%" as="section" px={3}>
              <ExperienceAndEducation/>
            </Box>
            <Box flexBasis="100%" as="section" px={3}>
              <SkillsSection/>
              <Awards/>
            </Box>
          </Box>
          <Box px={3}>
            <ProjectsSection/>
            <Contact/>
          </Box>
        </Box>
        <Footer/>
      </Box>
    </Box>
)

export default Home
