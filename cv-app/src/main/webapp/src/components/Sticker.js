import React from "react";

import SocialIcons from "./SocialIcons";

export default class Sticker extends React.Component{

  componentDidMount() {
    window.onscroll = function () {
      let e = document.getElementById("sticker");
      document.body.scrollTop > 140 || document.documentElement.scrollTop > 140
          ? e.style.top = "0" : e.style.top = "-60px"
    };
  }

  render() {
    return (
        <div id="sticker">
          <h2 className="sectionHead icon titleName" itemProp="name">
            <span itemProp="givenName">Mathias</span>
            <span itemProp="familyName">Bosman</span>
          </h2>
          <SocialIcons/>
        </div>
    );
  }
}