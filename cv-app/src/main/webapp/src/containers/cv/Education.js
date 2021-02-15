import TimeLineItem from "../../components/timeline/TimeLineItem";
import Timeline from "../../components/timeline/Timeline";

export default function Education() {
  return (
      <section>
        <h2 className="sectionHead icon learn">Education</h2>
        <Timeline id="schools">
          <TimeLineItem organisation="University of Ghent"
                        title={<><abbr
                            title="Bachelor of Applied Science">B.A.Sc.</abbr> Multimedia &amp; Programming</>}
                        from="2009" to="2012">
            My main education in Computer Science with a specialty in multimedia
            and in programming.
            (.NET &amp; Java)
          </TimeLineItem>
          <TimeLineItem organisation="Syntra / GSA" title="Stage lighting"
                        from="2014" to="2015/7">
            On a side-track I studied stage lighting coming from my love of
            musical theatre.
          </TimeLineItem>
          <TimeLineItem organisation="KT@ Dendermonde"
                        title="Applied Computer Science" from="2006"
                        to="2009">
            High school education as a jumping board to university.
          </TimeLineItem>
        </Timeline>
      </section>
  );
}