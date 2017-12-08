import React, { Component } from 'react';

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

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="measure center" onSubmit={this.handleSubmit}>
        <fieldset id="newTweet" class="ba b--transparent ph0 mh0">
          <legend class="f4 fw6 ph0 mh0">New Tweet</legend>
          <div class="mt3">
            <label class="db fw6 lh-copy f6" for="tweet">
              Tweet
            </label>
            <span>[ {this.state.value.length} / 280]</span>
            <textarea
              class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
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
