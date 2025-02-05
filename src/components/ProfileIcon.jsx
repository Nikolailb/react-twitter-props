import React from "react";

function ProfileIcon({ profileImage, isAvatar = false }) {
  return (
    <div className={isAvatar ? "avatar-section" : null}>
      <div className="profile-icon">
        <img src={profileImage} />
      </div>
    </div>
  );
}

export default ProfileIcon;
