import Bio from "./containers/cv/Bio";
import Experience from "./containers/cv/Experience";
import Jobs from "./containers/cv/Jobs";
import Education from "./containers/cv/Education";
import Awards from "./containers/cv/Awards";
import Contact from "./containers/cv/Contact";

export default function Cv() {
  return (
      <>
        <main id="cv">
          <Bio/>
          <Experience/>
          <Jobs/>
          <Education/>
          <Awards/>
          <Contact/>
        </main>
      </>
  );
}