const config = {
    apiKey: "AIzaSyBjnOlK8gTeFhKcs0-KgcbhITxeeWFv2Ss",
    authDomain: "start-firebase-79b24.firebaseapp.com",
    databaseURL: "https://start-firebase-79b24.firebaseio.com",
    projectId: "start-firebase-79b24",
    storageBucket: "start-firebase-79b24.appspot.com",
    messagingSenderId: "799799915448"
};
firebase.initializeApp(config);

const dbRef = firebase.database().ref().child('list/mes1/message');

dbRef.on('value', snap => console.log(snap.val()));