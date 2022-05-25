import React from "react";
import "../CSS/emaillist.css";
import EmailListSetting from "./EmailListSetting";
import Emailtype from "./Emailtype";
import Emailbody from "./Emailbody";

function Emaillist() {
  return (
    <div className="emaillist">
      <EmailListSetting />
      <Emailtype />
      <Emailbody
        name="vijaykumar@gmail.com"
        subject="We have done it!"
        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit sapien, sed diam nonumy eirmod tempor invid, eum er consectetur adipiscing elit sapien."
        time="03:30 PM"
      />{" "}
      {/* to display the mail */}
      <Emailbody
        name="vasanthakumar@gmail.com"
        subject="Check this out!"
        message="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        time="10:15 AM"
      />{" "}
      {/* to display the mail */}
      <Emailbody
        name="vishnuprashanth@gmail.com"
        subject="Our new product!"
        message="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        time="02:36 PM"
      />{" "}
      {/* to display the mail */}
      <Emailbody
        name="gunasekaran@gmail.com"
        subject="Dude, ready for that?"
        message="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        time="01:30 PM"
      />{" "}
      {/* to display the mail */}
      <Emailbody
        name="aiswaryaaishu@gmail.com"
        subject="Meet me at the office!"
        message="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        time="05:12 PM"
      />{" "}
      {/* to display the mail */}
      <Emailbody
        name="ranjithkumaru@gmail.com"
        subject="Update on the project!"
        message="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
        time="11:02 AM"
      />{" "}
      {/* to display the mail */}
      <Emailbody
        name="elangovansk@gmail.com"
        subject="This is a test mail!"
        message="Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
        time="09:22 AM"
      />{" "}
      {/* to display the mail */}
      <Emailbody
        name="thirumoorthie@gmail.com"
        subject="Friendly reminder!"
        message="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
        time="04:07 PM"
      />{" "}
      {/* to display the mail */}
      <Emailbody
        name="ayeshabanu@gmail.com"
        subject="Meeting at 3:30 PM!"
        message="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        time="08:45 AM"
      />{" "}
      {/* to display the mail */}
      <Emailbody
        name="raguls5268@gmail.com"
        subject="Bro, have you heard about the new movie?"
        message="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
        time="07:20 PM"
      />{" "}
      {/* to display the mail */}
    </div>
  );
}

export default Emaillist;
