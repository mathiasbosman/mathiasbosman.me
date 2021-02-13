import avatar from '../../images/avatar.webp';
import ScrollToLink from "../../components/ScrollToLink";
import Age from "../../components/Age";
import SocialIcons from "../../components/SocialIcons";

export default function Bio() {
  return (
      <section itemScope itemType="http://schema.org/Person">
        <h1 className="titleName sectionHead" itemProp="name">
          <span itemProp="givenName">Mathias</span>
          <span itemProp="familyName">Bosman</span>
        </h1>
        <div id="bio">
          <h2>Web designer, Java developer &amp; network engineer</h2>
          <SocialIcons/>
          <div className="flex">
            <aside className="flex-grow-1" id="avatar">
              <img itemProp="image" src={avatar}
                   alt="Mathias Bosman"/>
            </aside>
            <p className="flex-grow-3" itemProp="description">
              Known as "The little one", I'm a web designer and Java developer
              living in the outskirts of <span itemProp="homeLocation">Dendermonde, Belgium</span> and
              currently <Age birthdate="1990-12-05"/> of age. Welcome to my
              online personal resume!<br/>
              At the moment I'm full-time employed at the Department of
              Environment of the Flemish Government.<br/>
              In my spare time you will find me on my (not so) super expensive
              Decathlon race bike or setting up some network somewhere.
              <span className="hideOnPrint">
                If you would like to hire me for the latter you can&nbsp;
                <ScrollToLink className="linkButton" targetAnchor="contact"
                              behavior="smooth">contact me</ScrollToLink>.
                <br/>
                If you want to read some of my banter (just kidding) you can always
                read <a href="/blog">my blog</a>.
              </span><br/>
              I am also the proud "hooman" of a <Age
                birthdate="2020-08-28"/> old Beagle called Luna.<br/>

            </p>
          </div>
        </div>
      </section>
  );
}