import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCYW2j54CHCQPKZvo_0CUM9CuNCI7PFgD4",
  authDomain: "groupprojectweek3.firebaseapp.com",
  databaseURL: "https://groupprojectweek3.firebaseio.com",
  projectId: "groupprojectweek3",
  storageBucket: "groupprojectweek3.appspot.com",
  messagingSenderId: "419569816296",
  appId: "1:419569816296:web:1d59715972dede63"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
