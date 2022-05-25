import React from "react";
import "../CSS/compose.css";
import MinimizeIcon from "@mui/icons-material/Minimize";
import HeightIcon from "@mui/icons-material/Height";
import CloseIcon from "@mui/icons-material/Close";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeMessage } from "../../features/mailSlice";
import { API } from "./global";

function Compose() {
  const dispatch = useDispatch(); // to dispatch actions

  const [to, setTo] = useState(""); // to store the value of the input field
  const [subject, setSubject] = useState(""); // to store the value of the input field
  const [message, setMessage] = useState(""); // to store the value of the textarea field

  return (
    <div className="compose">
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <MinimizeIcon />
          <HeightIcon />
          <CloseIcon onClick={() => dispatch(closeMessage())} />
        </div>
      </div>
      <form>
        <div className="compose__body">
          <div className="compose__body__form">
            <input
              type="email"
              placeholder="Recipient"
              value={to}
              onChange={(event) => setTo(event.target.value)} // to set the value of the input field
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
            <textarea
              rows="20"
              onChange={(event) => setMessage(event.target.value)}
            >
              {message}
            </textarea>
          </div>
        </div>
        <div className="compose__footer">
          <div className="compose__footer__left">
            <button
              type="submit"
              onClick={() => {
                const arr = [];
                arr.push(to);
                console.log(arr);

                // to send the message
                const data = {
                  to: arr,
                  subject: subject,
                  message: message,
                };
                dispatch(closeMessage());
                fetch(`${API}/send`, {
                  // to send the message
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then((res) => {
                  if (res.status === 200) {
                    alert("Message sent successfully✔️");
                  } else {
                    alert("Message not sent❌");
                  }
                });
              }}
            >
              Send <ArrowDropDownIcon />
            </button>
          </div>
          <div className="compose__footer__right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <LinkIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <PhonelinkLockIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Compose;
