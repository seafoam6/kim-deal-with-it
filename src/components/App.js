import React from 'react';
import { Link, Route } from 'react-router-dom';
import oldTweets from './oldTweets';
import newTweet from './newTweet';
//import 'firebaseui/dist/firebaseui.css';
//import FirebaseUI from '../services/FirebaseUI';
//      <FirebaseUI />

const App = () => (
  <div>
    <header className="site-header">
      <nav className="pa3 pa4-ns">
        <h1
          className="black b f1 f-headline-ns tc db mb3 mb4-ns"
          href="#"
          title="Home"
        >
          Kim Deal With It
        </h1>
        <div className="tc pb3">
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
