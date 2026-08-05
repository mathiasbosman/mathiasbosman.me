import type { ReactElement } from 'react';
import SiteFooter from '@components/layout/site-footer.tsx';
import SiteHeader from '@components/layout/site-header.tsx';
import AboutSection from '@components/sections/about-section.tsx';
import ContactSection from '@components/sections/contact-section.tsx';
import ExperienceSection from '@components/sections/experience-section.tsx';
import FocusSection from '@components/sections/focus-section.tsx';
import HeroSection from '@components/sections/hero-section.tsx';
import ProjectsSection from '@components/sections/projects-section.tsx';
import ToolboxSection from '@components/sections/toolbox-section.tsx';
import '@fontsource/geist/latin-400.css';
import '@fontsource/geist/latin-500.css';
import '@fontsource/geist/latin-600.css';
import '@fontsource/geist/latin-700.css';

export const App = (): ReactElement => {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <FocusSection />
        <ExperienceSection />
        <ProjectsSection />
        <ToolboxSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
};

export default App;
