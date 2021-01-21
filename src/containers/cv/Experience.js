import ExperienceElement from "../../components/ExperienceElement";

export default function Experience() {
  return (
      <section>
        <h2 id="tools" className="sectionHead">Skills</h2>
        <ul id="skills">
          <ExperienceElement percentage={100}>Being awesome</ExperienceElement>
          <ExperienceElement percentage={90}>HTML + CSS (HTML5, SASS, Mobile development, ...)</ExperienceElement>
          <ExperienceElement percentage={90}>Version Control (Git, SVN)</ExperienceElement>
          <ExperienceElement percentage={80}>PHP</ExperienceElement>
          <ExperienceElement percentage={80}>Java (Spring, Thymeleaf, Wicket, Maven, Hibernate, ...)</ExperienceElement>
          <ExperienceElement percentage={80}>Databases (MySQL, PostgreSQL, Oracle, ...)</ExperienceElement>
          <ExperienceElement percentage={80}>Javascript (jQuery, Angular, React, NPM, ...)</ExperienceElement>
          <ExperienceElement percentage={80}>Webservices (REST, SOAP)</ExperienceElement>
          <ExperienceElement percentage={70}>SEO</ExperienceElement>
          <ExperienceElement percentage={60}>Photoshop</ExperienceElement>
          <ExperienceElement percentage={60}>WordPress Development</ExperienceElement>
          <ExperienceElement percentage={40}><del>Niting &amp; sewing</del></ExperienceElement>
        </ul>
      </section>
  );
}