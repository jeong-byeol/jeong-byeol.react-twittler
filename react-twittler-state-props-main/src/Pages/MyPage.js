import React from 'react';
import Footer from '../Footer';
import Tweet from '../Components/Tweet';
import './MyPage.css';
import dummyTweets from '../static/dummyData';
import { FiEdit2, FiSettings } from 'react-icons/fi';

const MyPage = () => {
  const filteredTweets = dummyTweets.filter(tweet => tweet.username === 'Bob');
  const profile = filteredTweets[0];

  return (
    <section className="myInfo">
      <div className="myInfo__header">
        <div className="myInfo__profileWrapper">
          {profile && (
            <img
              className="myInfo__avatar"
              src={profile.picture}
              alt="profile"
            />
          )}
          <div className="myInfo__actions">
            <button className="btn btn--primary">
              <FiEdit2 /> Edit Profile
            </button>
            <button className="btn btn--icon">
              <FiSettings />
            </button>
          </div>
        </div>
      </div>

      <div className="myInfo__details">
        <h2 className="myInfo__name">{profile?.username}</h2>
        <p className="myInfo__bio">Frontend Developer | React Enthusiast | Coffee Lover</p>
        <div className="myInfo__stats">
          <span><strong>28</strong> Followers</span>
          <span><strong>100</strong> Following</span>
          <span><strong>{filteredTweets.length}</strong> Tweets</span>
        </div>
      </div>

      <nav className="myInfo__tabs">
        <button className="tab active">Tweets</button>
        <button className="tab">Tweets & Replies</button>
        <button className="tab">Media</button>
        <button className="tab">Likes</button>
      </nav>

      <ul className="tweets__mypage">
        {filteredTweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </ul>

      <Footer />
    </section>
  );
};

export default MyPage;