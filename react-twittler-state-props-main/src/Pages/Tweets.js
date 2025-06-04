
import React, { useState } from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './Tweets.css';
import dummyTweets from '../static/dummyData';

const Tweets = () => {
  const [tweets, setTweets] = useState(dummyTweets);
  const [username, setUsername] = useState('Bob');
  const [message, setMessage] = useState('');

  const handleButtonClick = (event) => {
    event.preventDefault();
    const tweet = {
      id: tweets.length + 1,
      username,
      picture: 'https://randomuser.me/api/portraits/men/98.jpg',
      content: message,
      createdAt: new Date().toISOString(),
    };

    if (username.trim() === '' || message.trim() === '') return;

    setTweets([tweet, ...tweets]);
    setMessage('');
  };

  const handleChangeUser = (event) => {
    setUsername(event.target.value);
  };

  const handleChangeMsg = (event) => {
    setMessage(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile">
            <img src="https://randomuser.me/api/portraits/men/98.jpg" alt="profile" />
          </div>
          <div className="tweetForm__inputContainer">
            <div className="tweetForm__inputWrapper">
              <div className="tweetForm__input">
                <input
                  type="text"
                  value={username}
                  onChange={handleChangeUser}
                  placeholder="your username here.."
                  className="tweetForm__input--username"
                />
                <textarea
                  value={message}
                  onChange={handleChangeMsg}
                  placeholder="What's happening?"
                  className="tweetForm__input--message"
                />
              </div>
              <div className="tweetForm__count" role="status">
                <span className="tweetForm__count__text">
                  total : {tweets.length}
                </span>
              </div>
            </div>
            <div className="tweetForm__submit">
              <div className="tweetForm__submitIcon"></div>
              <button
                className="tweetForm__submitButton"
                onClick={handleButtonClick}
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul className="tweets">
        {tweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </ul>
      <Footer />
    </React.Fragment>
  );
};

export default Tweets;
