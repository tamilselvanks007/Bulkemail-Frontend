import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { IconButton, Avatar } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import Logo from "../JS/Logo";
import "../CSS/header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <Logo />
      </div>

      <div className="header__middle">
        <div className="search__mail">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search or start new chat" /> {/* to search the mail */}
          <IconButton>
            <TuneIcon />
          </IconButton>
        </div>
      </div>

      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src="https://english.mathrubhumi.com/image/contentid/policy:1.7425048:1649664833/Vijay.jpg?$p=69198cf&f=16x10&w=856&q=0.8" />
      </div>
    </div>
  );
};

export default Header;
