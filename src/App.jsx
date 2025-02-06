import { useState } from "react";

// The initial tweet objects that should be displayed
import initialTweets from "./assets/data/tweets.js";

// The user that we're pretending is signed in
import user from "./assets/data/user.js";

import RightSide from "./components/RightSide.jsx";
import LeftSide from "./components/LeftSide.jsx";
import MainContent from "./components/MainContent.jsx";

function App() {
  const [loggedInUser] = useState(user);
  const [tweets, setTweets] = useState(initialTweets);
  const [createTweetContent, setCreateTweetContent] = useState("");
  const [search, setSearch] = useState("");

	let filteredTweets = tweets
	if (search) {
    let res = []
    filteredTweets.forEach(tweet => {
      let values = [
        tweet.content,
        tweet.name,
        tweet.handle,
      ]
      if (tweet.article) {
        values.push(tweet.article.content, tweet.article.title, tweet.article.site)
      }
      if (values.join(" ").toUpperCase().includes(search))
        res.push(tweet)
    })
		filteredTweets = res
  }

  const addTweet = (e) => {
    e.preventDefault();
    let content = createTweetContent.trim()
    if (content.length === 0) return 
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
    setCreateTweetContent("")
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
