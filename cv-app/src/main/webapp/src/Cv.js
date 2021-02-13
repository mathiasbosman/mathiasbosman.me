import Bio from "./containers/cv/Bio";
import Experience from "./containers/cv/Experience";
import Jobs from "./containers/cv/Jobs";
import Education from "./containers/cv/Education";
import Awards from "./containers/cv/Awards";
import Contact from "./containers/cv/Contact";
import Copyright from "./components/Copyright";
import Sticker from "./components/Sticker";

export default function Cv() {
  return (
      <>
        <Sticker/>
        <main id="cv">
          <Bio/>
          <Experience/>
          <Jobs/>
          <Education/>
          <Awards/>
          <Contact/>
        </main>
        <footer className="hideOnPrint">
          <Copyright name="Mathias Bosman"/>
        </footer>
      </>
  );
}