import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { App } from './src/App';
import firebase from 'firebase';


const config = {
  apiKey: "AIzaSyCZW9lrGYu8ooec0j-nxO_YsgGUFSApHtc",
  authDomain: "manager-12d0a.firebaseapp.com",
  projectId: "manager-12d0a",
  storageBucket: "manager-12d0a.appspot.com",
  messagingSenderId: "999202282540",
  appId: "1:999202282540:web:3e05715dcc4edf8db34589",
  measurementId: "G-Z8T6BPKKFS"
};
// Initialize Firebase
firebase.initializeApp(config);

AppRegistry.registerComponent(appName, () => App);
