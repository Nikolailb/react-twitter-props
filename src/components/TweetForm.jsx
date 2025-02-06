import ProfileIcon from "./ProfileIcon";

function TweetForm({
  loggedInUser,
  createTweetContent,
  setCreateTweetContent,
  addTweet,
}) {
  let formReference;
  return (
    <>
      <div className="create-tweet">
        <form onSubmit={addTweet} ref={(el) => (formReference = el)}>
          <ProfileIcon
            profileImage={loggedInUser.profileImage}
            isAvatar={true}
          />

          <div className="textarea-section">
            <textarea
              className="content"
              type="text"
              placeholder="What is happening?!"
              value={createTweetContent}
              onChange={(e) => setCreateTweetContent(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter" && e.shiftKey == false && createTweetContent.length > 0) {
                  addTweet(e);
                } else if (e.key == "Enter" && createTweetContent.length == 0) {
                  e.preventDefault();
                }
              }}
            ></textarea>
          </div>

          <div></div>

          <div className="actions-section">
            <div className="actions">
              <i className="fa-regular fa-image action-icon"></i>
              <i className="fa-solid fa-list action-icon"></i>
              <i className="fa-regular fa-face-smile action-icon"></i>
              <i className="fa-regular fa-calendar action-icon"></i>
              <i className="fa-solid fa-location-dot action-icon"></i>
            </div>

            <button
              type="submit"
              disabled={createTweetContent.length < 1}
              className="tweet-btn"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default TweetForm;
