import firebase from 'firebase';
import Rebase from 're-base';

const config = {
    apiKey: "AIzaSyAWPJu22l5s8wKUxWul0GvO1LEN8h2cKKQ",
    authDomain: "udac-lore.firebaseapp.com",
    databaseURL: "https://udac-lore.firebaseio.com",
    projectId: "udac-lore",
    storageBucket: "",
    messagingSenderId: "50825490719",
    appId: "1:50825490719:web:0112aed5cc3db3fd"
  };

  const app = firebase.initializeApp(config)
  const base = Rebase.createClass(app.database())

  export {base};