import React from 'react';
import Footer from '../Footer';
import './About.css';
import { FaUsers, FaInfoCircle } from 'react-icons/fa';

const About = () => (
  <section className="aboutTwittler">
    <header className="aboutTwittler__header">
      <FaInfoCircle className="aboutTwittler__headerIcon" />
      <h1 className="aboutTwittler__title">React Twittler Info</h1>
    </header>

    <div className="aboutTwittler__card">
      <FaUsers className="aboutTwittler__icon" />
      <p className="aboutTwittler__text">
        React Twittler는 당신의 생각을 전 세계와 나누고, 새로운 사람들과
        소통할 수 있는 나만의 플랫폼입니다. 팔로우, 좋아요, 공유 기능을
        활용해 커뮤니티를 키워보세요. 다양한 커스텀 테마와 인터랙티브한
        인터페이스로 자신만의 스타일을 표현하세요!
      </p>
    </div>

    <Footer />
  </section>
);

export default About;