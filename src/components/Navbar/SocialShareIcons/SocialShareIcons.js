import React from "react";
import { SITE_URL } from "../../../Constants";
import "./SocialShareIcons.css";
import { Facebook, Twitter, Email } from "react-sharingbuttons";
import "react-sharingbuttons/dist/main.css";
const shareText = "Check this site!";

const SocialShareIcons = () => {
  return (
    <div>
      <Facebook url={SITE_URL} />
      <Twitter url={SITE_URL} shareText={shareText} />
      <Email
        url={SITE_URL}
        text={"Email"}
        subject={"This is a pretty cool UI gradient site"}
      />
    </div>
  );
};

export default SocialShareIcons;
