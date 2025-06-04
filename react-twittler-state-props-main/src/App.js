import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './Sidebar';
import Tweets from './Pages/Tweets';
import MyPage from './Pages/MyPage';
import About from './Pages/About';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Routes>
              <Route path="/" element={<Tweets />} />
              <Route path="/about" element={<About />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </section>
        </main>
      </div>
    </Router>
  );
};

export default App;

