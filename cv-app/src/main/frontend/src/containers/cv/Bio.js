import avatar from '../../images/avatar.webp';
import ScrollToLink from "../../components/ScrollToLink";
import SocialIcons from "../SocialIcons";

function Bio() {
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
              living in the
              outskirts of <span
                itemProp="homeLocation">Dendermonde, Belgium</span>. And this...
              this
              is my personal resume.. online! Currently I am full-time employed
              at the Department of
              Environment of the Flemish Government.<br/>
              In my spare time you will find me on my (not so) super expensive
              Decathlon race bike or
              setting up some network somewhere.
              <span className="hideOnPrint">
                If you would like to hire me for the latter you can&nbsp;
                <ScrollToLink className="linkButton" targetAnchor="contact" behavior="smooth">contact me</ScrollToLink>.
              </span>
            </p>
          </div>
        </div>
      </section>
  );
}

export default Bio;