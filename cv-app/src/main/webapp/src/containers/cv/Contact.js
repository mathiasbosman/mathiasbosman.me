import MailToLink from "../../components/MailToLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
      <section className="hideOnPrint">
        <h2 id="contact" className="sectionHead icon envelope">Contact me</h2>
        <p>
          If you would like to setup a small to medium sized network at your
          home or office you can
          contact me below!
        </p>
        <p className="warning">
          Be advised that I will only be able to do this during weekends or
          official holidays
          as this is my secondary occupation.<br/>
          Still interested? <MailToLink
            className="linkButton"
            mail="bosmanmathias@gmail.com?subject=mathiasbosman.be contact form">
          <FontAwesomeIcon icon={faPaperPlane} />&nbsp;
          Send me an email
        </MailToLink> to get in touch!
        </p>
      </section>
  );
}