import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAYWZG1VRrTLzaQzjSSGbSofD3YoZZeVck",
    authDomain: "team-voting-app-2c5b6.firebaseapp.com",
    databaseURL: "https://team-voting-app-2c5b6-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-2c5b6",
    storageBucket: "team-voting-app-2c5b6.appspot.com",
    messagingSenderId: "906434877352",
    appId: "1:906434877352:web:098a19ff71e19e931fef9d"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();