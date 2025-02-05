import React from 'react';

const NewsBlock = ({ category, profile, tweets }) => {
  return (
    <>
        <div className="news-block">
        <div className="content">
            <small>{category}</small>
            <h4>{profile}</h4>
            <small>{tweets} Tweets</small>
        </div>
        <div className="action">
            <i className="fa-solid fa-ellipsis"></i>
        </div>
        </div>
    </>
  );
};

export default NewsBlock;