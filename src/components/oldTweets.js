import React from 'react';
import { FireInstance } from '../services/FireInstance';
import moment from 'moment';

const oldTweets = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tweets: [] };
  }

  componentDidMount() {
    const tweetsRef = FireInstance.database().ref('tweets');
    tweetsRef.on('value', snapshot => {
      let tweets = snapshot.val();
      let newState = [];
      for (let tweet in tweets) {
        newState.push({
          key: tweet,
          timesTweeted: tweets[tweet].timesTweeted,
          timestamp: tweets[tweet].timestamp,
          value: tweets[tweet].value
        });
      }
      this.setState({
        tweets: newState
      });
    });
  }

  render() {
    return (
      <div className="pa4">
        {this.tweet}
        <div className="overflow-auto">
          <table className="f6 w-100 mw8 center" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white">Controls</th>
                <th className="fw6 tl pa3 bg-white">Date Tweeted</th>
                <th className="fw6 tl pa3 bg-white"># of Times Tweeted</th>
                <th className="fw6 tl pa3 bg-white">Test</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {this.state.tweets.map(tweet => {
                return (
                  <tr className="stripe-dark" key={tweet.key}>
                    <td className="pa3">put button here</td>
                    <td className="pa3">
                      {moment(tweet.timestamp).format(
                        'MMMM Do YYYY, h:mm:ss a'
                      )}
                    </td>
                    <td className="pa3">{tweet.timesTweeted}</td>
                    <td className="pa3">{tweet.value}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default oldTweets;
