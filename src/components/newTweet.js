import React from 'react';
import firebase from 'firebase';

class newTweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(e) {
    console.log('Tweet submitted: ' + this.state.value);
    e.preventDefault();
    this.firebaseRef.push({
      value: this.state.value,
      timestamp: Date.now(),
      timesTweeted: 0
    });
    this.setState({ value: '' });
  }

  componentDidMount() {
    //console.log(fire.auth().currentUser);
  }

  componentWillMount() {
    this.firebaseRef = firebase.database().ref('tweets');
  }

  render() {
    return (
      <form className="measure center" onSubmit={this.handleSubmit}>
        <fieldset id="newTweet" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">New Tweet</legend>
          <div className="mt3">
            <label className="db fw6 lh-copy f6" htmlFor="tweet">
              [ {this.state.value.length} / 280]
            </label>

            <textarea
              className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
              type="email"
              name="email-address"
              id="tweet"
              value={this.state.value}
              onChange={this.handleChange}
              maxLength="280"
            />
          </div>
          <input
            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
            type="submit"
            value="Submit"
          />
        </fieldset>
      </form>
    );
  }
}

export default newTweet;
