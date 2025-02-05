import { useState } from "react";

// The initial tweet objects that should be displayed
import initialTweets from "./assets/data/tweets.js";

// The user that we're pretending is signed in
import user from "./assets/data/user.js";

import MenuItem from "./components/MenuItem.jsx";
import ProfileIcon from "./components/ProfileIcon.jsx";
import Tweet from "./components/Tweet.jsx";
import RightSide from "./components/RightSide.jsx";
import LeftSide from "./components/LeftSide.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  const [loggedInUser] = useState(user);
  const [tweets, setTweets] = useState(initialTweets);
  const [createTweetContent, setCreateTweetContent] = useState("");
  const [search, setSearch] = useState("");

	let filteredTweets = tweets
	if (search)
		filteredTweets = filteredTweets.filter(tweet => tweet.content.toUpperCase().includes(search.toUpperCase()))

  const addTweet = (e) => {
    e.preventDefault();
    setTweets([
      {
        ...loggedInUser,
        date: "1m",
        content: createTweetContent,
        commentCount: 0,
        retweetCount: 0,
        heartCount: 0,
        analyticsCount: 0,
      },
      ...tweets,
    ]);
  };

  return (
    <div className="container">
      <LeftSide loggedInUser={loggedInUser} />
      <MainContent
        loggedInUser={loggedInUser}
        tweets={filteredTweets}
        addTweet={addTweet}
        createTweetContent={createTweetContent}
        setCreateTweetContent={setCreateTweetContent}
      />
      <RightSide setSearch={setSearch}/>
    </div>
  );
}

export default App;
