import React from "react";

function Widget({ children, title }) {
  return (
    <>
      <div className="widget">
        {title && <h1>{title}</h1>}
        {children}
      </div>
    </>
  );
}

export default Widget;
