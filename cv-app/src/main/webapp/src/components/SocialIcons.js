import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faBlog} from "@fortawesome/free-solid-svg-icons";

export default function SocialIcons() {
  return (
      <div className="platformIcons">
        <a className="platformIcon linkedinIcon" target="_blank"
           rel="noreferrer"
           href="https://www.linkedin.com/in/mathiasbosman" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn}/>
        </a>
        <a className="platformIcon githubIcon" target="_blank"
           rel="noreferrer"
           href="https://github.com/mathiasbosman" title="Github">
          <FontAwesomeIcon icon={faGithub}/>
        </a>
        <a className="platformIcon blogIcon"
           href="/blog" title="Blog">
          <FontAwesomeIcon icon={faBlog}/>
        </a>
      </div>
  );
}