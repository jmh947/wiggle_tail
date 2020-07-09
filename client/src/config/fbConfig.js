  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB9zZI-2-XHMJZjpmIIt15xQwkaQEv92CI",
    authDomain: "project3-e639f.firebaseapp.com",
    databaseURL: "https://project3-e639f.firebaseio.com",
    projectId: "project3-e639f",
    storageBucket: "project3-e639f.appspot.com",
    messagingSenderId: "1075261776572",
    appId: "1:1075261776572:web:7df3b2fe3568c25ff526b9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots:true});

  export default firebase;