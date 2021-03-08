import React from "react";
import "../styles/main.scss";
import {
  BorderBox,
  Box,
  Flash,
  Flex,
  Link,
  StyledOcticon
} from "@primer/components";
import ExperienceAndEducation from "../components/cv/ExperienceAndEducation";
import SkillsSection from "../components/cv/SkillsSection";
import Bio from "../components/cv/Bio";
import Contact from "../components/cv/Contact";
import Awards from "../components/cv/Awards";
import {LAYOUT_WIDTH, PREFERED_THEME} from "../Constants";
import Footer from "../components/Footer";
import {ShieldCheckIcon} from "@primer/octicons-react";
import Banner from "../components/Header";
import DocTitle from "../components/DocTitle";

export default class Home extends React.Component {

  _renderUserinfo(user, logoutMethod) {
    console.log(logoutMethod);
    return <Flash full mb={3}>
      <StyledOcticon icon={ShieldCheckIcon}/>
      Logged in as {user.name} (<Link href="#" variant="small"
                                      onClick={logoutMethod}>Logout</Link>)
    </Flash>;
  }

  render() {
    return (
        <>
          <DocTitle subTitle={""}/>
          <Banner/>
          <BorderBox boxShadow={PREFERED_THEME.shadows.medium}
                     bg="canvas" as="main" mx="auto" p={3}
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
        </>
    );
  }
}
