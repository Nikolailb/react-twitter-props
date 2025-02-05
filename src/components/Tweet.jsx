import React from "react";
import ProfileIcon from "./ProfileIcon";
import TweetAction from "./TweetAction";

function Tweet({ tweet }) {
  return (
    <>
      <article className="tweet">
        <ProfileIcon profileImage={tweet.profileImage} />

        <div className="tweet-content">
          <h4>
            {tweet.name}{" "}
            <span>
              {tweet.handle} · {tweet.date}
            </span>
          </h4>
          <p>{tweet.content}</p>

          {tweet.article && (
            <div className="tweet-article">
              <img src={tweet.article.image} />
              <small>{tweet.article.site}</small>
              <h5>{tweet.article.title}</h5>
              <p>{tweet.article.content}</p>
            </div>
          )}

          <div className="tweet-actions">
            <TweetAction icon="fa-regular fa-comment" count={tweet.commentCount} />
            <TweetAction icon="fa-solid fa-arrows-rotate" count={tweet.retweetCount} />
            <TweetAction icon="fa-regular fa-heart" count={tweet.heartCount} />
            <TweetAction icon="fa-solid fa-chart-simple" count={tweet.analyticsCount} />
            <TweetAction icon="fa-solid fa-upload" />
          </div>
        </div>
      </article>
    </>
  );
}

export default Tweet;
