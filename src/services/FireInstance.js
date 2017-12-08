/*global firebaseui*/
import firebase from 'firebase';
import { config } from '../configs/firebaseCredentials';
export const FireInstance = firebase.initializeApp(config);
