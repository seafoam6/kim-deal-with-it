import React from 'react';
import { Link, Route } from 'react-router-dom';
import oldTweets from './oldTweets';
import newTweet from './newTweet';
import '../styles/App.css';

const App = () => (
  <div>
    <header className="site-header">
      <nav className="main-nav">
        <Link to="/old-tweets">Old Tweets</Link>
        <Link to="/new-tweet">New Tweet</Link>
      </nav>
    </header>
    <div>
      <Route path="/old-tweets" component={oldTweets} />
      <Route path="/new-tweet" component={newTweet} />
    </div>
  </div>
);

export default App;
