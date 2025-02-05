import React from "react";

function MenuItem({ href = "#", text, icon, classes = [] }) {
  return (
    <>
      <div className={"menu-item" + (classes.length ? " " + classes.join(" ") : "")}>
        <a href={href}>
          <i className={icon}></i>
          {text}
        </a>
      </div>
    </>
  );
}

export default MenuItem;
