import React from "react";
import "../CSS/emaillist.css";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMessage } from "../../features/mailSlice";

function Emailbody({ name, subject, message, time }) { // to pass the props from the parent component
  const history = useHistory(); // to navigate to other pages
  const dispatch = useDispatch(); // to dispatch actions

  const setMail = () => { // to set the mail as selected
    dispatch(selectMessage({ name, subject, message, time }));
    history.push("/mail");
  };

  return (
    <div className="emailbody" onClick={setMail}>
      <div className="emailbody__left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelOutlinedIcon />
        <h4>{name}</h4> {/* to display the name of the sender */}
      </div>
      <div className="emailbody__middle">
        <div className="emailbody__middle__msg">
          <p>
            <b>{subject}</b> {message} {/* to display the subject and message */}
          </p>
        </div>
      </div>
      <div className="emailbody__right">
        <p>{time}</p> {/* to display the time of the message */}
      </div>
    </div>
  );
}

export default Emailbody;
