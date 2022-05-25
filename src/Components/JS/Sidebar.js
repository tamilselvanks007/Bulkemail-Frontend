import React from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import "../CSS/sidebar.css";
import Sidebaroptions from "./Sidebaroptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import SendIcon from "@mui/icons-material/Send";
import DraftsIcon from "@mui/icons-material/Drafts";
import CategoryIcon from "@mui/icons-material/Category";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { openMessage } from "../../features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch(); // to dispatch actions

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        className="compose__btn"
        onClick={() => dispatch(openMessage())} // to open the compose message page
      >
        Compose
      </Button>
      <Sidebaroptions
        Icon={InboxIcon} // to display the icon
        title="Inbox"
        number="254"
        isactive={true}
      />
      <Sidebaroptions Icon={StarRateIcon} title="Starred" number="254" /> 
      <Sidebaroptions Icon={WatchLaterIcon} title="Snoozed" number="254" />
      <Sidebaroptions
        Icon={LabelImportantIcon}
        title="Important"
        number="254"
      />
      <Sidebaroptions Icon={SendIcon} title="Sent" number="254" />
      <Sidebaroptions Icon={DraftsIcon} title="Drafts" number="" />
      <Sidebaroptions Icon={CategoryIcon} title="Category" number="" />
      <Sidebaroptions Icon={DeleteIcon} title="Trash" number="" />
      <Sidebaroptions Icon={FindInPageIcon} title="Documents" number="" />
      <Sidebaroptions Icon={ExpandMoreIcon} title="More" />
      <hr />
      <h3 className="sidebaroptions__heading">Meet</h3>
      <Sidebaroptions Icon={VideocamIcon} title="New meeting" />
      <Sidebaroptions Icon={KeyboardIcon} title="Join a meeting" />
      <hr />
      <h3 className="sidebaroptions__heading-2">Hangouts</h3>
      <Sidebaroptions Icon={AccountCircleIcon} title="New Hangout" />
    </div>
  );
}

export default Sidebar;
