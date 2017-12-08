/*global firebaseui*/
import firebase from 'firebase';
import React, { Component } from 'react';
import config from '../configs/firebaseCredentials';
const fire = firebase.initializeApp(config);

class FirebaseUI extends React.Component {
  componentDidMount() {
    var self = this;
    var uiConfig = {
      callbacks: {
        signInSuccess: function(user) {
          if (self.props.onSignIn) {
            self.props.onSignIn(user);
          }
          return false;
        }
      },
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    authUi.start('#firebaseui-auth', uiConfig);
  }

  componentWillUnmount() {
    authUi.reset();
  }

  render() {
    return <div id="firebaseui-auth" />;
  }
}

export default Database;
