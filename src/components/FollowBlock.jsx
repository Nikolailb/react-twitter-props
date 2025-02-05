import React from "react";
import ProfileIcon from "./ProfileIcon";

function FollowBlock({ profileImage, name, handle }) {
  return (
    <>
      <div className="follow-block">
        <ProfileIcon profileImage={profileImage} />

        <div className="content">
          <h4>{name}</h4>
          <h5>@{handle}</h5>
        </div>

        <div className="action">
          <button className="follow-btn">Follow</button>
        </div>
      </div>
    </>
  );
}

export default FollowBlock;
