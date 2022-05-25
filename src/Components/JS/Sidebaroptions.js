import React from "react";
import "../CSS/sidebaroptions.css";

function Sidebaroptions({ Icon, title, number, isactive }) { // to display the icon, title, number and active status
  return (
    <div className={`sidebaroptions ${isactive && "sidebaroptions--active"}`}> {/* to display the active status */}
      <Icon />
      <h4>{title}</h4> {/* to display the title */} 
      <p>{number}</p> {/* to display the number */}
    </div>
  );
}

export default Sidebaroptions;
