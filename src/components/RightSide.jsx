import Widget from "./Widget";
import NewsBlock from "./NewsBlock";
import FollowBlock from "./FollowBlock";

// You may need to move these when creating new components
import imgElon from "../assets/images/elon.jpg";
import imgZuck from "../assets/images/zuck.jpg";

function RightSide() {
  return (
    <>
      <aside className="right-side">
        <div className="search-section">
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
          <NewsBlock
            category={"Entertainment · Trending"}
            profile={"Elon Musk"}
            tweets={"14.5k"}
          />
          <NewsBlock
            category={"Cage Fights · Trending"}
            profile={"Mark Zuckerberg"}
            tweets={"59.1k"}
          />
        </Widget>
        <Widget title={"Who to follow"}>
          <FollowBlock
            profileImage={imgElon}
            name={"Elon Musk"}
            handle={"elonmusk"}
          />
          <FollowBlock
            profileImage={imgZuck}
            name={"Mark Zuckerberg"}
            handle={"markzuckerberg"}
          />
        </Widget>
      </aside>
    </>
  );
}

export default RightSide;
