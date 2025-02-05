import React from "react";

function TweetAction({icon, count = null}) {
  return (
    <>
      <span>
        <i className={icon}></i>
        {count && <small>{count}</small>}        
      </span>
    </>
  );
}

export default TweetAction;
