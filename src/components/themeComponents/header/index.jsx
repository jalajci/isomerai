import React from "react";
import "./header.scss";
import { Avatar } from "@material-ui/core";

const Header = () => {
  return (
    <div className="header">
      This is Header
      <div className="avatar__container">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
