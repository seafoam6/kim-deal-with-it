/*global firebaseui*/
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import React, { Component } from 'react';
import config from '../configs/firebaseCredentials';
import FireInstance from '../services/FireInstance';

var authUi = new firebaseui.auth.AuthUI(firebase.auth());

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
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
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

export default FirebaseUI;
