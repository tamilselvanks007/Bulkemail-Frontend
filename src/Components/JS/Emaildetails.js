import React from "react";
import "../CSS/emaillist.css";
import { IconButton, Avatar } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import LaunchIcon from "@mui/icons-material/Launch";
import PrintIcon from "@mui/icons-material/Print";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSelectedMessage } from "../../features/mailSlice";

function Emaildetails({ name, subject, message, time }) { // to pass the props from the parent component
  const mail = useSelector(selectSelectedMessage); // to get the selected mail
  const history = useHistory(); // to navigate to other pages
  return (
    <div className="emaildetails">
      <div className="emaillist__setting">
        <div className="emaillist__settingLeft">
          <IconButton>
            <ArrowBackIcon onClick={() => history.push("/")} /> {/* to navigate to the previous page */}
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emaillist__settingRight">
          <p>1-50 of 10,222</p> {/* to display the number of mails */}
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
      </div>
      <div className="emaildetails__message">
        <div className="emaildetails__header">
          <div className="emaildetails__header__left">
            <h4>{mail.subject}</h4> {/* to display the subject of the mail */}
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
          </div>
          <div className="emaildetails__header__right">
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>
        </div>

        <div className="emaildetails__middle__header">
          <div className="emaildetails__middle__header__left">
            <IconButton>
              <Avatar />
            </IconButton>
            <h4>{mail.subject}</h4> {/* to display the subject of the mail */}
            <p>{mail.name}</p> {/* to display the name of the sender */}
          </div>
          <div className="emaildetails__middle__header__right">
            <p>{mail.time}</p> {/* to display the time of the message */}

            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="emaildetails__body">
          <p>{mail.message}</p> {/* to display the message of the mail */}
        </div>
      </div>
    </div>
  );
}

export default Emaildetails;
