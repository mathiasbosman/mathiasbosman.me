import TimeLineItem from "../../components/timeline/TimeLineItem";
import Timeline from "../../components/timeline/Timeline";

export default function Jobs() {
  return (
      <section>
        <h2 className="sectionHead clock">Experience</h2>
        <Timeline id="jobs">
            <TimeLineItem organisation="Flemish Government" title="Java Programmer"
                          from="2018">
              Currently I'm employed as a Java programmer for the department of
              Environment
              where I work on in-house applications. Mostly using frameworks
              such as Spring.
            </TimeLineItem>
            <TimeLineItem organisation="Flemish Government" title="Application manager"
                          from="2016" to="2018">
              Responsible for handling tickets and user feedback for an in-house
              application that
              handled cases for an environment license.
            </TimeLineItem>
            <TimeLineItem organisation="Flemish Government"
                          title="Expert employee system / IT-support" from="2013"
                          to="2016">
              Employed as IT-Expert and responsible for reporting statistics
              about employee data. I was
              also employed as a personnel expert for a short time, replacing an
              absent colleague.
            </TimeLineItem>
            <TimeLineItem organisation="Echoweb" title="PHP Web developer" from="2013"
                          to="2013">
              After my education I developed an HR PHP web application as a web
              developer for this
              startup company.
            </TimeLineItem>
            <TimeLineItem organisation="Procius Limited"
                          title="PHP Web developer (internship)" from="2012"
                          to="2012">
              For my internship I traveled to the UK for six months where I
              developed PHP applications
              as a web developer for a background checking company.
            </TimeLineItem>
        </Timeline>
      </section>
  );
}