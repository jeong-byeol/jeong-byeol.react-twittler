import React from 'react';
import './Tweet.css';

const Tweet = ({ tweet }) => {
  const dateObj = new Date(tweet.createdAt);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const parsedDate = `${year}. ${month}. ${day}.`;

  return (
    <li className="tweet" id={tweet.id}>
      <div className="tweet__profile">
        <img src={tweet.picture} alt="profile" />
      </div>
      <div className="tweet__content">
        <div className="tweet__userInfo">
          <div className="tweet__userInfo--wrapper">
            <span className="tweet__username">{tweet.username}</span>
            <span className="tweet__createdAt">{parsedDate}</span>
          </div>
        </div>
        <div className="tweet__message">{tweet.content}</div>
      </div>
    </li>
  );
};

export default Tweet;
