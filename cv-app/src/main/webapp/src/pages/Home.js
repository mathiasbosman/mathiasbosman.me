import React from "react";
import "../styles/home.scss";
import {
  BorderBox,
  Box,
  ButtonInvisible,
  Flash,
  Flex,
  StyledOcticon
} from "@primer/components";
import ExperienceAndEducation from "../components/cv/ExperienceAndEducation";
import SkillsSection from "../components/cv/SkillsSection";
import Bio from "../components/cv/Bio";
import Contact from "../components/cv/Contact";
import Awards from "../components/cv/Awards";
import {LAYOUT_WIDTH} from "../Constants";
import Footer from "../components/Footer";
import {theme} from "@primer/components/lib/theme-preval";
import {userContext} from "../Contexts";
import {ShieldCheckIcon} from "@primer/octicons-react";

export default class Home extends React.Component {

  _renderUserinfo(user, logoutMethod) {
    console.log(logoutMethod);
    return <Flash full mb={3}>
      <StyledOcticon icon={ShieldCheckIcon}/>
      Logged in as {user.name} ({user.login} - {user.id})
      <ButtonInvisible variant="small"
                       onClick={logoutMethod}>Logout</ButtonInvisible>
    </Flash>;
  }

  render() {
    return (
        <>
          <userContext.Consumer>
            {({user, logoutMethod}) => (
                user ? this._renderUserinfo(user, logoutMethod) : null
            )}
          </userContext.Consumer>
          <BorderBox boxShadow={theme.shadows.medium} backgroundColor="white"
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
        </>
    );
  }
}
