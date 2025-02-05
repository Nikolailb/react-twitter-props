import MenuItem from "./MenuItem"
import ProfileIcon from "./ProfileIcon"

function LeftSide({ loggedInUser }) {
  return (
    <>
      <aside className="left-side">
        <div className="logo">
          <i className="fa-brands fa-twitter"></i>
        </div>

        <MenuItem text="Home" icon="fa-solid fa-house" classes={["active"]} />
        <MenuItem text="Explore" icon="fa-solid fa-magnifying-glass" />
        <MenuItem text="Notifications" icon="fa-regular fa-bell" />
        <MenuItem text="Messages" icon="fa-regular fa-envelope" />
        <MenuItem text="Lists" icon="fa-solid fa-bars" />
        <MenuItem text="Bookmarks" icon="fa-regular fa-bookmark" />
        <MenuItem text="Verified" icon="fa-regular fa-circle-check" />
        <MenuItem text="Profile" icon="fa-regular fa-user" />
        <MenuItem text="More" icon="fa-solid fa-ellipsis" />

        <button className="tweet-btn">Tweet</button>

        <div className="profile-card">
          <ProfileIcon profileImage={loggedInUser.profileImage} />

          <div className="profile-details">
            <h4>{loggedInUser.name}</h4>
            <small>{loggedInUser.handle}</small>
          </div>

          <div className="action">
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
      </aside>
    </>
  )
}

export default LeftSide