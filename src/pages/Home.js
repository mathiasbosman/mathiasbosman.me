import React, {Suspense} from "react";
import "../styles/main.scss";
import {BorderBox, Box, Flex} from "@primer/components";
import {LAYOUT_WIDTH, TITLE_BASE, TITLE_SEPERATOR} from "../Constants";
import Footer from "../components/Footer";
import DocTitle from "../components/DocTitle";
import PreLoader from "../components/PreLoader";

const Bio = React.lazy(() => import("../components/cv/Bio"));
const ExperienceAndEducation = React.lazy(
    () => import("../components/cv/ExperienceAndEducation"));
const SkillsSection = React.lazy(
    () => import("../components/cv/SkillsSection"));
const Contact = React.lazy(() => import("../components/cv/Contact"));
const Awards = React.lazy(() => import("../components/cv/Awards"));

export default class Home extends React.Component {

  render() {
    return (
        <>
          <main itemScope itemType="https://schema.org/Person">
            <BorderBox boxShadow="shadows.medium"
                       bg="bg.canvas" mx="auto" p={3}
                       maxWidth={LAYOUT_WIDTH}>
              <section>
                <Suspense fallback={<PreLoader/>}>
                  <Bio/>
                </Suspense>
              </section>

              <section>
                <Flex className="flexWrapper" justifyItems="space-between">
                  <Box flexBasis="100%" as="section" px={3}>
                    <Suspense fallback={<PreLoader/>}>
                      <ExperienceAndEducation/>
                    </Suspense>
                  </Box>

                  <Box flexBasis="100%" as="section" px={3}>
                    <Suspense fallback={<PreLoader/>}>
                      <SkillsSection/>
                      <Awards/>
                    </Suspense>
                  </Box>
                </Flex>
              </section>
              <Box px={3}>
                <Suspense fallback={<PreLoader/>}>
                  <Contact/>
                </Suspense>
              </Box>
              <Footer/>
            </BorderBox>
          </main>
        </>
    );
  }
}
