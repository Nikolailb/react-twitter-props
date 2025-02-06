import Tweet from "./Tweet";
import ProfileIcon from "./ProfileIcon";
import TweetForm from "./TweetForm";


function MainContent({ loggedInUser, tweets, addTweet, setCreateTweetContent, createTweetContent}) {
  return (
    <>
      <main>
        <div className="top-bar">
          <h2 className="title">Home</h2>
        </div>
        <TweetForm loggedInUser={loggedInUser} createTweetContent={createTweetContent} setCreateTweetContent={setCreateTweetContent} addTweet={addTweet}/>
        <div className="show-more-tweets">
          <p>Show 35 Tweets</p>
        </div>

        {tweets.map((tweet, index) => {
          return <Tweet tweet={tweet} key={index} />;
        })}
      </main>
    </>
  );
}

export default MainContent;
