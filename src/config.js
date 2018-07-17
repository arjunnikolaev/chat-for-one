import firebase from 'firebase';
import 'lodash';

const config = {
    apiKey: "AIzaSyBjnOlK8gTeFhKcs0-KgcbhITxeeWFv2Ss",
    authDomain: "start-firebase-79b24.firebaseapp.com",
    databaseURL: "https://start-firebase-79b24.firebaseio.com",
    projectId: "start-firebase-79b24",
    storageBucket: "start-firebase-79b24.appspot.com",
    messagingSenderId: "799799915448"
};
firebase.initializeApp(config);

const listRef = firebase.database().ref().child('list');

function addMsg(msgData) {
    listRef.push({
        ...msgData
    }).then(() => console.log('added new message'));
}

function enableListFetching(callback) {
    listRef.on('value', snap => {
        let listOfMessages = _.values(snap.val());
        callback(listOfMessages);
    });
}

const txtEmail = document.querySelector('.txt-email');
const txtPassword = document.querySelector('.txt-password');
const btnLogin = document.querySelector('.btn-login');
const btnSignup = document.querySelector('.btn-signup');
const btnLogout = document.querySelector('.btn-logout');

function onLogin() {

}

function onSignup() {

}

function onLogout() {

}

 export {addMsg, enableListFetching};
