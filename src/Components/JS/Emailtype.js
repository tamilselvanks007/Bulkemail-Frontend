import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "../CSS/emaillist.css";

function Emailtype() {
  return (
    <div class="emailtype">
      <div class="emailtype__options emailtype__options--active">
        <InboxIcon />
        <p>Primary</p> {/* to display the name of the folder */}
      </div>
      <div class="emailtype__options">
        <PeopleIcon />
        <p>Social</p> {/* to display the name of the folder */}
      </div>
      <div class="emailtype__options">
        <LocalOfferIcon />
        <p>Promotions</p> {/* to display the name of the folder */}
      </div>
    </div>
  );
}

export default Emailtype;
