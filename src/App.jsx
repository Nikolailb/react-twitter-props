import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'

// You may need to move these when creating new components
import imgElon from './assets/images/elon.jpg'
import imgZuck from './assets/images/zuck.jpg'

import MenuItem from './components/MenuItem.jsx'
import ProfileIcon from './components/ProfileIcon.jsx'
import Tweet from './components/Tweet.jsx'
import Widget from './components/Widget.jsx'
import NewsBlock from './components/NewsBlock.jsx'
import FollowBlock from './components/FollowBlock.jsx'

function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [createTweetContent, setCreateTweetContent] = useState('')

    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
        ])
    }

    return (
        <div className="container">
            
            <aside className="left-side">
                <div className="logo">
                    <i className="fa-brands fa-twitter"></i>
                </div>

                {/* <div className="menu-item active">
                    <a href="#">
                        <i className="fa-solid fa-house"></i>
                        Home
                    </a>
                </div> */}
                <MenuItem text="Home" icon="fa-solid fa-house" classes={["active"]} />
                <MenuItem text="Explore" icon="fa-solid fa-magnifying-glass"/>
                <MenuItem text="Notifications" icon="fa-regular fa-bell"/>
                <MenuItem text="Messages" icon="fa-regular fa-envelope"/>
                <MenuItem text="Lists" icon="fa-solid fa-bars"/>
                <MenuItem text="Bookmarks" icon="fa-regular fa-bookmark"/>
                <MenuItem text="Verified" icon="fa-regular fa-circle-check"/>
                <MenuItem text="Profile" icon="fa-regular fa-user"/>
                <MenuItem text="More" icon="fa-solid fa-ellipsis"/>

                <button className="tweet-btn">Tweet</button>

                <div className='profile-card'>
                    <ProfileIcon profileImage={loggedInUser.profileImage}/>

                    <div className="profile-details">
                        <h4>{loggedInUser.name}</h4>
                        <small>{loggedInUser.handle}</small>
                    </div>

                    <div className="action">
                        <i className="fa-solid fa-ellipsis"></i>
                    </div>
                </div>
            </aside>

            <main>
                <div className='top-bar'>
                    <h2 className="title">Home</h2>
                </div>

                <div className='create-tweet'>
                    <form onSubmit={addTweet}>
                        <ProfileIcon profileImage={loggedInUser.profileImage} isAvatar={true} />

                        <div className="textarea-section">
                            <textarea
                                className="content"
                                type="text"
                                placeholder="What is happening?!"
                                value={createTweetContent}
                                onChange={(e) => setCreateTweetContent(e.target.value)}
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

                            <button type="submit" disabled={createTweetContent.length < 1} className="tweet-btn">Tweet</button>
                        </div>
                    </form>
                </div>

                <div className="show-more-tweets">
                    <p>Show 35 Tweets</p>
                </div>

                {tweets.map((tweet, index) => {
                    return (
                        <Tweet tweet={tweet} index={index} />
                    )
                })}
            </main>

            <aside className='right-side'>
                <div className='search-section'>
                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                    <input className="search" type="text" placeholder="Search Twitter" />
                </div>
                <Widget>
                    <div className="widget-grid">
                        <h1>Get Verified</h1>
                        <h3>Subscribe to unlock nothing.</h3>

                        <button className="verify-btn">Get Verified</button>
                    </div>
                </Widget>

                <Widget title="What's happening">
                    <NewsBlock category="Entertainment · Trending" profile="Elon Musk" tweets="14.5k" />
                    <NewsBlock category={"Cage Fights · Trending"} profile={"Mark Zuckerberg"} tweets={"59.1k"}/>
                </Widget>
                <Widget title={"Who to follow"}>
                    <FollowBlock profileImage={imgElon} name={"Elon Musk"} handle={"elonmusk"}/>
                    <FollowBlock profileImage={imgZuck} name={"Mark Zuckerberg"} handle={"markzuckerberg"}/>
                </Widget>
            </aside>

        </div>
    )
}

export default App
