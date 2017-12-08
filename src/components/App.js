import React from 'react';
import { Link, Route } from 'react-router-dom';
import oldTweets from './oldTweets';
import newTweet from './newTweet';

const App = () => (
  <div>
    <header className="site-header">
      <nav className="pa3 pa4-ns">
        <h1
          class="black b f1 f-headline-ns tc db mb3 mb4-ns"
          href="#"
          title="Home"
        >
          Kim Deal With It
        </h1>
        <div class="tc pb3">
          <Link to="/old-tweets" className="link dim gray f6 f5-ns dib mr3">
            Old Tweets
          </Link>
          <Link to="/new-tweet" className="link dim gray f6 f5-ns dib mr3">
            New Tweet
          </Link>
        </div>
      </nav>
    </header>
    <main className="pa5">
      <Route path="/old-tweets" component={oldTweets} />
      <Route path="/new-tweet" component={newTweet} />
    </main>
  </div>
);

export default App;
