import SocialIcons from "./SocialIcons";

function Sticker() {
  return (
      <div id="sticker">
        <h2 className="sectionHead titleName" itemProp="name">
          <span itemProp="givenName">Mathias</span>
          <span itemProp="familyName">Bosman</span>
        </h2>
        <SocialIcons/>
      </div>
  );
}

export default Sticker;